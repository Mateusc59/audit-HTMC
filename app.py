from flask import Flask, render_template, request, send_file, jsonify
import os
import json
from datetime import datetime

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max

# Create uploads directory if it doesn't exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    try:
        data = request.json
        
        # Get HTML content from frontend
        html_content = data.get('htmlContent', '')
        lang = data.get('language', 'fr')
        company_name = data.get('companyName', 'Audit')
        
        if not html_content:
            return jsonify({'error': 'No HTML content provided'}), 400
        
        # Generate PDF from HTML
        from pdf_generator import generate_audit_pdf_from_html
        pdf_path = generate_audit_pdf_from_html(html_content, lang)
        
        # Send file
        filename = f"Audit_{company_name.replace(' ', '_')}_{lang.upper()}_{datetime.now().strftime('%Y%m%d')}.pdf"
        
        return send_file(
            pdf_path,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=filename
        )
        
    except Exception as e:
        print(f"Error generating PDF: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

@app.route('/health')
def health():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)