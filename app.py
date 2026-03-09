from flask import Flask, send_from_directory, request, jsonify, send_file
import os
from datetime import datetime
from playwright.sync_api import sync_playwright
import tempfile

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory('.', path)

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    """Generate PDF using Playwright - renders EXACT HTML"""
    try:
        data = request.json
        html_content = data.get('htmlContent', '')
        lang = data.get('language', 'fr')
        company_name = data.get('companyName', 'Audit')
        
        if not html_content:
            return jsonify({'error': 'No HTML content'}), 400
        
        # Get CSS
        css_path = os.path.join(os.path.dirname(__file__), 'styles.css')
        with open(css_path, 'r', encoding='utf-8') as f:
            css_content = f.read()
        
        # Build complete HTML
        full_html = f'''
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                {css_content}
                
                @page {{
                    size: A4;
                    margin: 0;
                }}
                
                body {{
                    margin: 0;
                    padding: 0;
                }}
            </style>
        </head>
        <body>
            {html_content}
        </body>
        </html>
        '''
        
        # Create temp HTML file
        with tempfile.NamedTemporaryFile(mode='w', suffix='.html', delete=False, encoding='utf-8') as temp_html:
            temp_html.write(full_html)
            temp_html_path = temp_html.name
        
        # Output PDF path
        pdf_path = f'/tmp/audit_{company_name.replace(" ", "_")}_{lang}.pdf'
        
        try:
            # Launch Playwright
            with sync_playwright() as p:
                # Launch browser
                browser = p.chromium.launch(
                    headless=True,
                    args=[
                        '--no-sandbox',
                        '--disable-setuid-sandbox',
                        '--disable-dev-shm-usage',
                        '--disable-gpu'
                    ]
                )
                
                page = browser.new_page()
                
                # Load HTML
                page.goto(f'file://{temp_html_path}', wait_until='networkidle')
                
                # Generate PDF
                page.pdf(
                    path=pdf_path,
                    format='A4',
                    print_background=True,
                    margin={
                        'top': '0mm',
                        'right': '0mm',
                        'bottom': '0mm',
                        'left': '0mm'
                    }
                )
                
                browser.close()
        
        finally:
            # Clean up temp file
            if os.path.exists(temp_html_path):
                os.unlink(temp_html_path)
        
        # Send file
        filename = f"Audit_{company_name.replace(' ', '_')}_{lang.upper()}_{datetime.now().strftime('%Y%m%d')}.pdf"
        
        return send_file(
            pdf_path,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=filename
        )
        
    except Exception as e:
        print(f"Error: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)