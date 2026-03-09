from playwright.sync_api import sync_playwright
import os
import tempfile

def generate_audit_pdf_from_html(html_content, lang='fr'):
    """Generate PDF using Playwright - renders EXACT HTML like browser"""
    
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
            @media print {{
                @page {{
                    size: A4;
                    margin: 0 !important;
                }}
                
                body {{
                    margin: 0;
                    padding: 0;
                }}
                
                .pdf-page {{
                    page-break-after: always;
                    page-break-inside: avoid;
                    min-height: 297mm;
                    max-height: 297mm;
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
            }}
        </style>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """
    
    # Create temp HTML file
    temp_html = tempfile.NamedTemporaryFile(mode='w', suffix='.html', delete=False, encoding='utf-8')
    temp_html.write(full_html)
    temp_html.close()
    
    # Output PDF path
    output_path = f"/tmp/audit_{lang}.pdf"
    
    try:
        # Launch Playwright
        with sync_playwright() as p:
            # Launch Chromium
            browser = p.chromium.launch(
                headless=True,
                args=['--no-sandbox', '--disable-setuid-sandbox']
            )
            
            page = browser.new_page()
            
            # Load HTML
            page.goto(f'file://{temp_html.name}')
            
            # Wait for content to load
            page.wait_for_load_state('networkidle')
            
            # Generate PDF with print CSS
            page.pdf(
                path=output_path,
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
        if os.path.exists(temp_html.name):
            os.unlink(temp_html.name)
    
    return output_path
