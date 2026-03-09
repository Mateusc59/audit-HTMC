from playwright.sync_api import sync_playwright
import tempfile
import os
import json
from urllib.parse import unquote

def handler(event, context):
    """Vercel serverless function to generate PDF"""
    
    try:
        # Parse request body
        body = json.loads(event.get('body', '{}'))
        html_content = body.get('htmlContent', '')
        lang = body.get('language', 'fr')
        company_name = body.get('companyName', 'Audit')
        
        if not html_content:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'No HTML content'})
            }
        
        # Get CSS from public folder
        css_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'styles.css')
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
                browser = p.chromium.launch(
                    headless=True,
                    args=[
                        '--no-sandbox',
                        '--disable-setuid-sandbox',
                        '--disable-dev-shm-usage'
                    ]
                )
                
                page = browser.new_page()
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
            if os.path.exists(temp_html_path):
                os.unlink(temp_html_path)
        
        # Read PDF and return as base64
        with open(pdf_path, 'rb') as f:
            pdf_data = f.read()
        
        import base64
        pdf_base64 = base64.b64encode(pdf_data).decode('utf-8')
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/pdf',
                'Content-Disposition': f'attachment; filename="Audit_{company_name}_{lang}.pdf"'
            },
            'body': pdf_base64,
            'isBase64Encoded': True
        }
        
    except Exception as e:
        print(f"Error: {str(e)}")
        import traceback
        traceback.print_exc()
        
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }