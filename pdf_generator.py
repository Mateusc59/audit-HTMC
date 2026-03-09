from weasyprint import HTML, CSS
from flask import url_for
import os

def get_full_css():
    """Get complete CSS including print styles"""
    css_path = os.path.join(os.path.dirname(__file__), 'static', 'style.css')
    with open(css_path, 'r', encoding='utf-8') as f:
        base_css = f.read()
    
    # Add PDF-specific CSS
    pdf_css = """
    @page {
        size: A4;
        margin: 0;
    }
    
    body {
        margin: 0;
        padding: 0;
    }
    
    .pdf-page {
        page-break-after: always;
        page-break-inside: avoid;
    }
    
    .pdf-page:last-child {
        page-break-after: avoid;
    }
    
    /* Hide everything except PDF content */
    header, .form-section, .loading, .action-buttons, .btn, 
    .info-box, .section-title, .form-grid, .checkbox-grid,
    .result .action-buttons {
        display: none !important;
    }
    
    .pdf-preview {
        box-shadow: none !important;
    }
    """
    
    return base_css + pdf_css

def generate_audit_pdf_from_html(html_content, lang='fr'):
    """Generate PDF directly from the HTML preview"""
    
    # Get CSS
    css_content = get_full_css()
    
    # Build complete HTML document
    full_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            {css_content}
        </style>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """
    
    # Generate PDF path
    output_path = f"/tmp/audit_{lang}.pdf"
    
    # Create PDF with WeasyPrint - CORRECT SYNTAX
    html_obj = HTML(string=full_html)
    html_obj.write_pdf(output_path)
    
    return output_path
