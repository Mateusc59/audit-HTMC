from xhtml2pdf import pisa
from io import BytesIO
import os

def get_css():
    """Load CSS from file"""
    css_path = os.path.join(os.path.dirname(__file__), 'static', 'style.css')
    with open(css_path, 'r', encoding='utf-8') as f:
        return f.read()

# Traductions Catalan
TRANSLATIONS_CA = {
    'VOTRE ENTREPRISE MÉRITE UN SITE WEB A LA HAUTEUR': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
    'Auditoria de votre entreprise': 'Auditoria de la vostra empresa',
    'Pour transformer': 'Per transformar',
    'votre expertise': 'la vostra experiència',
    'ans d\'expérience': 'anys d\'experiència',
    'en plus de contrats': 'en més contractes',
    'doit :': 'ha de:',
    'doit aussi :': 'també ha de:',
    'Vous avez': 'Teniu',
    'mais votre site web reflète-t-il vraiment cette expertise': 'però el vostre lloc web reflecteix realment aquesta experiència',
    'Montrer la valeur réelle': 'Mostrar el valor real',
    'Convertir chaque visite en vente concrète': 'Convertir cada visita en venda concreta',
    'Assurer la confiance avec le portfolio': 'Assegurar la confiança amb el portafoli',
    'Le site de': 'El lloc de',
    'Être optimisé mobile': 'Estar optimitzat mòbil',
    'Être optimisé Google': 'Estar optimitzat Google',
    'Être bien élaboré': 'Estar ben elaborat',
    'et son site web aujourd\'hui': 'i el seu lloc web avui',
    'Si ces critères sont remplis': 'Si es compleixen aquests criteris',
    'aura :': 'tindrà:',
    'de devis': 'de pressupostos',
    'Présence optimisée = machine à leads': 'Presència optimitzada = màquina de leads',
    'Conversion': 'Conversió',
    'visiteurs sur': 'visitants de',
    'contactent': 'contacten',
    'Contrats': 'Contractes',
    'Projets': 'Projectes',
    'Focus Conversion': 'Focus Conversió',
    'Transformer visiteurs en clients payants': 'Transformar visitants en clients que paguen',
    'Problème :': 'Problema:',
    'Objectif :': 'Objectiu:',
    'ROI :': 'ROI:',
    'Solutions proposées :': 'Solucions proposades:',
    'Prochaine étape': 'Pròxima etapa',
    'minutes pour vous le présenter': 'minuts per presentar-vos-ho',
    'GRATUIT': 'GRATUÏT',
    'SANS ENGAGEMENT': 'SENSE COMPROMÍS'
}

def translate_text(text, lang):
    """Translate text to Catalan if needed"""
    if lang != 'ca':
        return text
    
    for fr, ca in sorted(TRANSLATIONS_CA.items(), key=lambda x: len(x[0]), reverse=True):
        text = text.replace(fr, ca)
    
    return text

def generate_audit_pdf(data, lang='fr'):
    """Generate PDF from audit data"""
    
    # Get data
    company = data.get('companyName', 'Entreprise')
    years = data.get('years', '')
    location = data.get('location', '')
    problems = data.get('problems', [])
    solutions = data.get('solutions', [])
    
    # Title
    if years and location:
        title = f"Vous avez {years} ans d'expérience à {location}, mais votre site web reflète-t-il vraiment cette expertise ?"
    else:
        title = "VOTRE ENTREPRISE MÉRITE UN SITE WEB À LA HAUTEUR"
    
    # Build HTML
    problems_html = ''.join([f'<li>❌ {p}</li>' for p in problems[:5]])
    solutions_html = ''.join([f'<li>✅ {s}</li>' for s in solutions[:5]])
    
    html = f'''
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            @page {{
                size: A4;
                margin: 15mm;
            }}
            
            body {{
                font-family: Arial, sans-serif;
                color: #1a1a1a;
                line-height: 1.6;
            }}
            
            .header {{
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                color: white;
                padding: 30px;
                margin: -15mm -15mm 20px -15mm;
                border-left: 5px solid #D4A574;
            }}
            
            .company-name {{
                color: #D4A574;
                font-size: 1.5rem;
                font-weight: bold;
            }}
            
            h1 {{
                font-size: 1.3rem;
                color: #1a1a1a;
                margin-top: 20px;
            }}
            
            h2 {{
                font-size: 1.1rem;
                color: #D4A574;
                margin-top: 15px;
            }}
            
            ul {{
                list-style: none;
                padding-left: 0;
            }}
            
            li {{
                margin: 8px 0;
                font-size: 0.9rem;
            }}
            
            .benefit-box {{
                background: #FFF8E6;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #D4A574;
                margin: 15px 0;
            }}
            
            .cta-box {{
                background: linear-gradient(135deg, #D4A574 0%, #B8935F 100%);
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 10px;
                margin-top: 30px;
            }}
            
            .footer {{
                margin-top: 30px;
                padding-top: 15px;
                border-top: 3px solid #D4A574;
                text-align: center;
                font-size: 0.9rem;
            }}
        </style>
    </head>
    <body>
        <div class="header">
            <h1 style="color: white; margin: 0;">{title}</h1>
            <p style="margin: 10px 0 0 0;">Auditoria de votre entreprise</p>
            <p class="company-name">{company}</p>
        </div>
        
        <h1>Pour transformer votre expertise en plus de contrats, {company} doit :</h1>
        
        <h2>💬 Montrer la valeur réelle</h2>
        <p>Les visiteurs doivent comprendre que {company} n'est pas comme les autres. Votre expertise doit être évidente.</p>
        
        <h2>👆 Convertir chaque visite en vente concrète</h2>
        <p>Avec des CTA optimisés et un formulaire simple, doublez vos contacts. Nos clients passent de 5-10 à 20-30 contacts/mois.</p>
        
        <h2>🏆 Assurer la confiance avec le portfolio</h2>
        <p>Photos de projets réels avant/après. Les clients veulent des preuves concrètes.</p>
        
        <h1>Le site de {company} doit aussi :</h1>
        <ul>
            <li><b>1. Être optimisé mobile</b> - 70% des recherches se font sur mobile</li>
            <li><b>2. Être optimisé Google</b> - Apparaître dans les recherches locales</li>
            <li><b>3. Être bien élaboré</b> - Répondre aux questions clés des clients</li>
        </ul>
        
        <div style="page-break-before: always;"></div>
        
        <h1>{company} et son site web aujourd'hui :</h1>
        
        <ul>
            {problems_html}
        </ul>
        
        <h2>Si ces critères sont remplis, {company} aura :</h2>
        
        <div class="benefit-box">
            <p><b>📈 +40-80% de devis</b> - Présence optimisée = machine à leads</p>
            <p><b>💰 Conversion 3-7%</b> - 30-70 visiteurs sur 1000 contactent</p>
            <p><b>🎯 Contrats +50-100%</b> - Projets 15k€, 30k€, 50k€+</p>
        </div>
        
        <div class="benefit-box">
            <h3 style="color: #D4A574; margin-top: 0;">💰 Focus Conversion</h3>
            <p><b>Problème :</b> Sur 1000 visiteurs, seulement 5-10 vous contactent (0,5-1%). Les 990+ autres partent = 99% de perte.</p>
            <p><b>Objectif :</b> Passer à 30-70 contacts sur 1000 (3-7%). Comment ? CTA visibles, formulaire 3 champs, chat live.</p>
            <p><b>ROI :</b> +60k€ à +200k€ CA annuel supplémentaire.</p>
        </div>
        
        <h2>Solutions proposées :</h2>
        <ul>
            {solutions_html}
        </ul>
        
        <div class="cta-box">
            <h3 style="margin: 0 0 10px 0;">Prochaine étape</h3>
            <p style="margin: 5px 0;">15 minutes pour vous le présenter ?</p>
            <p style="margin: 5px 0; font-size: 0.9rem;"><b>GRATUIT • SANS ENGAGEMENT</b></p>
        </div>
        
        <div class="footer">
            <p style="font-weight: bold;">HTMC AGENCY</p>
            <p>contact@htmcagency.com | +33 7 69 16 56 34</p>
        </div>
    </body>
    </html>
    '''
    
    # Translate if Catalan
    html = translate_text(html, lang)
    
    # Generate PDF
    output_path = f"/tmp/audit_{company.replace(' ', '_')}_{lang}.pdf"
    
    with open(output_path, "w+b") as pdf_file:
        pisa_status = pisa.CreatePDF(html, dest=pdf_file)
    
    if pisa_status.err:
        raise Exception(f"PDF generation error: {pisa_status.err}")
    
    return output_path
