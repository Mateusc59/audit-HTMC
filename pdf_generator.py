from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.enums import TA_CENTER, TA_LEFT
import os

# Traductions Catalan
TRANSLATIONS_CA = {
    'VOTRE ENTREPRISE MÉRITE UN SITE WEB À LA HAUTEUR': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
    'Auditoria de votre entreprise': 'Auditoria de la vostra empresa',
    'Pour transformer': 'Per transformar',
    'votre expertise': 'la vostra experiència',
    'ans d\'expérience': 'anys d\'experiència',
    'en plus de contrats': 'en més contractes',
    'doit :': 'ha de:',
    'Vous avez': 'Teniu',
    'mais votre site web reflète-t-il vraiment cette expertise': 'però el vostre lloc web reflecteix realment aquesta experiència',
    'Montrer la valeur réelle': 'Mostrar el valor real',
    'Convertir chaque visite en vente concrète': 'Convertir cada visita en venda concreta',
    'Assurer la confiance avec le portfolio': 'Assegurar la confiança amb el portafoli',
    'Le site de': 'El lloc de',
    'doit aussi :': 'també ha de:',
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
    """Translate text to Catalan"""
    if lang != 'ca':
        return text
    for fr, ca in sorted(TRANSLATIONS_CA.items(), key=lambda x: len(x[0]), reverse=True):
        text = text.replace(fr, ca)
    return text

def generate_audit_pdf(data, lang='fr'):
    """Generate PDF with ReportLab"""
    
    company = data.get('companyName', 'Entreprise')
    years = data.get('years', '')
    location = data.get('location', '')
    problems = data.get('problems', [])
    solutions = data.get('solutions', [])
    
    # Output path
    output_path = f"/tmp/audit_{company.replace(' ', '_')}_{lang}.pdf"
    
    # Create PDF
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        topMargin=15*mm,
        bottomMargin=15*mm,
        leftMargin=15*mm,
        rightMargin=15*mm
    )
    
    # Styles
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=18,
        textColor=colors.HexColor('#1a1a1a'),
        alignment=TA_CENTER,
        spaceAfter=10,
        fontName='Helvetica-Bold'
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=colors.HexColor('#D4A574'),
        spaceAfter=8,
        fontName='Helvetica-Bold'
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=11,
        leading=16,
        spaceAfter=8
    )
    
    # Story
    story = []
    
    # Title
    if years and location:
        title = f"Vous avez {years} ans d'expérience à {location}, mais votre site web reflète-t-il vraiment cette expertise ?"
    else:
        title = "VOTRE ENTREPRISE MÉRITE UN SITE WEB À LA HAUTEUR"
    
    title = translate_text(title, lang)
    
    story.append(Paragraph(title, title_style))
    story.append(Paragraph(translate_text(f"Auditoria de votre entreprise<br/><b>{company}</b>", lang), body_style))
    story.append(Spacer(1, 10*mm))
    
    # Intro
    intro = translate_text(f"Pour transformer votre expertise en plus de contrats, <b>{company}</b> doit :", lang)
    story.append(Paragraph(intro, body_style))
    story.append(Spacer(1, 5*mm))
    
    # Sections
    sections = [
        (translate_text("💬 Montrer la valeur réelle", lang), 
         translate_text(f"Les visiteurs doivent comprendre que {company} n'est pas comme les autres.", lang)),
        (translate_text("👆 Convertir chaque visite en vente concrète", lang), 
         translate_text("Avec des CTA optimisés, doublez vos contacts. Nos clients passent de 5-10 à 20-30 contacts/mois.", lang)),
        (translate_text("🏆 Assurer la confiance avec le portfolio", lang), 
         translate_text("Photos de projets réels. Les clients veulent des preuves concrètes.", lang))
    ]
    
    for title_sec, content in sections:
        story.append(Paragraph(f"<b>{title_sec}</b>", heading_style))
        story.append(Paragraph(content, body_style))
        story.append(Spacer(1, 3*mm))
    
    # Liste
    story.append(Paragraph(translate_text(f"<b>Le site de {company} doit aussi :</b>", lang), heading_style))
    items = [
        translate_text("<b>1. Être optimisé mobile</b> - 70% des recherches se font sur mobile", lang),
        translate_text("<b>2. Être optimisé Google</b> - Apparaître dans les recherches locales", lang),
        translate_text("<b>3. Être bien élaboré</b> - Répondre aux questions clés", lang)
    ]
    for item in items:
        story.append(Paragraph(item, body_style))
    
    # Page 2
    story.append(PageBreak())
    
    story.append(Paragraph(translate_text(f"<b>{company} et son site web aujourd'hui :</b>", lang), title_style))
    story.append(Spacer(1, 5*mm))
    
    # Problems
    for problem in problems[:5]:
        story.append(Paragraph(f"❌ {translate_text(problem, lang)}", body_style))
    
    story.append(Spacer(1, 8*mm))
    
    # Benefits
    story.append(Paragraph(translate_text(f"<b>Si ces critères sont remplis, {company} aura :</b>", lang), heading_style))
    benefits = [
        translate_text("📈 <b>+40-80% de devis</b> - Présence optimisée = machine à leads", lang),
        translate_text("💰 <b>Conversion 3-7%</b> - 30-70 visiteurs sur 1000 contactent", lang),
        translate_text("🎯 <b>Contrats +50-100%</b> - Projets 15k€, 30k€, 50k€+", lang)
    ]
    for benefit in benefits:
        story.append(Paragraph(benefit, body_style))
    
    story.append(Spacer(1, 8*mm))
    
    # Focus
    story.append(Paragraph(translate_text("<b>💰 Focus Conversion</b>", lang), heading_style))
    story.append(Paragraph(translate_text("<b>Problème :</b> Sur 1000 visiteurs, 5-10 contactent = 99% de perte.", lang), body_style))
    story.append(Paragraph(translate_text("<b>Objectif :</b> Passer à 3-7% avec CTA visibles, formulaire simplifié.", lang), body_style))
    story.append(Paragraph(translate_text("<b>ROI :</b> +60k€ à +200k€ CA annuel supplémentaire.", lang), body_style))
    
    story.append(Spacer(1, 8*mm))
    
    # Solutions
    story.append(Paragraph(translate_text("<b>Solutions proposées :</b>", lang), heading_style))
    for solution in solutions[:5]:
        story.append(Paragraph(f"✅ {translate_text(solution, lang)}", body_style))
    
    story.append(Spacer(1, 10*mm))
    
    # CTA
    story.append(Paragraph(translate_text("<b>Prochaine étape</b>", lang), heading_style))
    story.append(Paragraph(translate_text("15 minutes pour vous le présenter ?", lang), body_style))
    story.append(Paragraph(translate_text("<b>GRATUIT • SANS ENGAGEMENT</b>", lang), body_style))
    
    story.append(Spacer(1, 5*mm))
    
    # Footer
    story.append(Paragraph("<b>HTMC AGENCY</b><br/>contact@htmcagency.com | +33 7 69 16 56 34", body_style))
    
    # Build
    doc.build(story)
    
    return output_path
