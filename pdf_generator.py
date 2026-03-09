import pdfkit
import os
import tempfile

def generate_audit_pdf_from_html(html_content, lang='fr'):
    """Generate PDF using pdfkit (wkhtmltopdf wrapper)"""
    
    # Get CSS
    css_path = os.path.join(os.path.dirname(__file__), 'static', 'style.css')
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()
    
    # Build complete HTML
    full_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            {css_content}
            
            /* PDF-specific styles */
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
            
            /* Hide non-PDF elements */
            header, .form-section, .loading, .info-box, 
            .section-title, .form-grid, .checkbox-grid,
            .result > .action-buttons {{
                display: none !important;
            }}
            
            .pdf-preview {{
                box-shadow: none !important;
                border: none !important;
            }}
        </style>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """
    
    # Output PDF path
    output_path = f"/tmp/audit_{lang}.pdf"
    
    # PDF options
    options = {
        'page-size': 'A4',
        'margin-top': '0mm',
        'margin-right': '0mm',
        'margin-bottom': '0mm',
        'margin-left': '0mm',
        'encoding': "UTF-8",
        'no-outline': None,
        'enable-local-file-access': None,
        'print-media-type': None
    }
    
    # Generate PDF
    pdfkit.from_string(full_html, output_path, options=options)
    
    return output_path
