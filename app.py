from flask import Flask, send_from_directory, request, jsonify, send_file
import os
from datetime import datetime
from xhtml2pdf import pisa
from io import BytesIO

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory('.', path)

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    """Generate PDF using xhtml2pdf (no API key needed)"""
    try:
        data = request.json
        html_content = data.get('htmlContent', '')
        lang = data.get('language', 'fr')
        company_name = data.get('companyName', 'Audit')
        
        if not html_content:
            return jsonify({'error': 'No HTML content'}), 400
        
        # Get CSS - inline it
        css_path = os.path.join(os.path.dirname(__file__), 'styles.css')
        with open(css_path, 'r', encoding='utf-8') as f:
            css_content = f.read()
        
        # Build complete HTML with inlined CSS
        full_html = f'''
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                {css_content}
                
                @page {{
                    size: A4;
                    margin: 0mm;
                }}
                
                body {{
                    margin: 0;
                    padding: 0;
                    font-family: Arial, Helvetica, sans-serif;
                }}
            </style>
        </head>
        <body>
            {html_content}
        </body>
        </html>
        '''
        
        # Generate PDF
        pdf_path = f'/tmp/audit_{company_name.replace(" ", "_")}_{lang}.pdf'
        
        with open(pdf_path, 'w+b') as pdf_file:
            pisa_status = pisa.CreatePDF(
                full_html.encode('utf-8'),
                dest=pdf_file,
                encoding='utf-8'
            )
        
        if pisa_status.err:
            return jsonify({'error': 'PDF generation failed'}), 500
        
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