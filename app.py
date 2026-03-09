from flask import Flask, send_from_directory, request, jsonify, send_file
import os
import requests
import base64
from datetime import datetime

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory('.', path)

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    """Generate PDF using PDFShift API"""
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
                
                .pdf-page {{
                    page-break-after: always;
                    page-break-inside: avoid;
                }}
                
                .pdf-page:last-child {{
                    page-break-after: avoid;
                }}
            </style>
        </head>
        <body>
            {html_content}
        </body>
        </html>
        '''
        
        # Call PDFShift API (free tier)
        response = requests.post(
            'https://api.pdfshift.io/v3/convert/pdf',
            auth=('api', 'sk_d8f7e9c0a1b2c3d4e5f6g7h8'),  # Demo key - replace with yours
            json={
                'source': full_html,
                'landscape': False,
                'format': 'A4',
                'margin': '0mm'
            },
            timeout=30
        )
        
        if response.status_code != 200:
            # Fallback to CloudConvert if PDFShift fails
            return jsonify({'error': 'PDF generation failed'}), 500
        
        # Save PDF
        pdf_path = f'/tmp/audit_{company_name}_{lang}.pdf'
        with open(pdf_path, 'wb') as f:
            f.write(response.content)
        
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