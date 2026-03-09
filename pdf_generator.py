from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, KeepTogether
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfgen import canvas
import os

# Couleurs HTMC
ACCENT_COLOR = colors.HexColor('#D4A574')
DARK_COLOR = colors.HexColor('#1a1a1a')
LIGHT_BG = colors.HexColor('#FFF8E6')

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
    'Sur 1000 visiteurs': 'De 1000 visitants',
    'seulement': 'només',
    'vous contactent': 'us contacten',
    'Les': 'Els',
    'autres partent': 'altres marxen',
    'de perte': 'de pèrdua',
    'Objectif :': 'Objectiu:',
    'Passer à': 'Passar a',
    'contacts sur': 'contactes de',
    'Comment': 'Com',
    'CTA visibles': 'CTAs visibles',
    'formulaire': 'formulari',
    'champs': 'camps',
    'chat live': 'xat en directe',
    'ROI :': 'ROI:',
    'CA annuel supplémentaire': 'CA anual addicional',
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

class HeaderCanvas(canvas.Canvas):
    """Custom canvas with header on first page"""
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self.pages = []
        
    def showPage(self):
        self.pages.append(dict(self.__dict__))
        self._startPage()
        
    def save(self):
        page_count = len(self.pages)
        for page_num, page_dict in enumerate(self.pages):
            self.__dict__.update(page_dict)
            if page_num == 0:
                self.draw_header()
            self.draw_footer(page_num + 1, page_count)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)
        
    def draw_header(self):
        """Draw dark header on first page"""
        self.setFillColor(DARK_COLOR)
        self.rect(0, A4[1] - 60*mm, A4[0], 60*mm, fill=1, stroke=0)
        
        # Gold sidebar
        self.setFillColor(ACCENT_COLOR)
        self.rect(0, A4[1] - 60*mm, 8*mm, 60*mm, fill=1, stroke=0)
        
    def draw_footer(self, page_num, page_count):
        """Draw footer with HTMC info"""
        self.setFont('Helvetica', 9)
        self.setFillColor(colors.grey)
        self.drawCentredString(A4[0] / 2, 10*mm, f"Page {page_num}/{page_count}")

def generate_audit_pdf(data, lang='fr'):
    """Generate professional styled PDF"""
    
    company = data.get('companyName', 'Entreprise')
    years = data.get('years', '')
    location = data.get('location', '')
    problems = data.get('problems', [])
    solutions = data.get('solutions', [])
    
    # Output path
    output_path = f"/tmp/audit_{company.replace(' ', '_')}_{lang}.pdf"
    
    # Create PDF with custom canvas
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        topMargin=70*mm,  # Space for header
        bottomMargin=20*mm,
        leftMargin=15*mm,
        rightMargin=15*mm
    )
    
    # Styles
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'Title',
        parent=styles['Heading1'],
        fontSize=20,
        textColor=colors.white,
        alignment=TA_CENTER,
        spaceAfter=8,
        fontName='Helvetica-Bold',
        leading=24
    )
    
    company_style = ParagraphStyle(
        'Company',
        parent=styles['Normal'],
        fontSize=24,
        textColor=ACCENT_COLOR,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
        spaceAfter=15
    )
    
    heading_style = ParagraphStyle(
        'Heading',
        parent=styles['Heading2'],
        fontSize=13,
        textColor=ACCENT_COLOR,
        spaceAfter=6,
        spaceBefore=10,
        fontName='Helvetica-Bold'
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontSize=10,
        leading=14,
        spaceAfter=6,
        alignment=TA_JUSTIFY
    )
    
    # Story
    story = []
    
    # Title (will appear in header)
    if years and location:
        title = f"Vous avez {years} ans d'expérience à {location},<br/>mais votre site web reflète-t-il vraiment cette expertise ?"
    else:
        title = "VOTRE ENTREPRISE MÉRITE<br/>UN SITE WEB À LA HAUTEUR"
    
    story.append(Paragraph(translate_text(title, lang), title_style))
    story.append(Spacer(1, 5*mm))
    story.append(Paragraph(translate_text("Auditoria de votre entreprise", lang), body_style))
    story.append(Paragraph(company, company_style))
    story.append(Spacer(1, 8*mm))
    
    # Intro
    intro = translate_text(f"Pour transformer votre expertise en plus de contrats, <b>{company}</b> doit :", lang)
    story.append(Paragraph(intro, body_style))
    story.append(Spacer(1, 5*mm))
    
    # Sections with emoji
    sections = [
        ("💬", translate_text("Montrer la valeur réelle", lang), 
         translate_text(f"Les visiteurs doivent comprendre que {company} n'est pas comme les autres. Votre expertise doit être évidente dès la première vue.", lang)),
        ("👆", translate_text("Convertir chaque visite en vente concrète", lang), 
         translate_text("Avec des CTA optimisés et un formulaire simple (3 champs), doublez vos contacts. Nos clients passent de 5-10 à 20-30 contacts/mois.", lang)),
        ("🏆", translate_text("Assurer la confiance avec le portfolio", lang), 
         translate_text("Photos de projets réels avant/après. Les clients veulent des preuves concrètes, pas des promesses.", lang))
    ]
    
    for emoji, title_sec, content in sections:
        story.append(Paragraph(f"<b>{emoji} {title_sec}</b>", heading_style))
        story.append(Paragraph(content, body_style))
        story.append(Spacer(1, 3*mm))
    
    story.append(Spacer(1, 5*mm))
    
    # Liste numérotée
    story.append(Paragraph(translate_text(f"<b>Le site de {company} doit aussi :</b>", lang), heading_style))
    story.append(Spacer(1, 3*mm))
    
    items = [
        translate_text("<b>1. Être optimisé mobile</b> — 70% des recherches se font sur mobile", lang),
        translate_text("<b>2. Être optimisé Google</b> — Apparaître dans les recherches locales", lang),
        translate_text("<b>3. Être bien élaboré</b> — Répondre aux questions clés des clients", lang)
    ]
    for item in items:
        story.append(Paragraph(item, body_style))
    
    # PAGE 2
    story.append(PageBreak())
    
    story.append(Paragraph(translate_text(f"<b>{company} et son site web aujourd'hui :</b>", lang), heading_style))
    story.append(Spacer(1, 5*mm))
    
    # Problems with red X
    for problem in problems[:5]:
        story.append(Paragraph(f"❌ {translate_text(problem, lang)}", body_style))
    
    story.append(Spacer(1, 8*mm))
    
    # Benefits box
    story.append(Paragraph(translate_text(f"<b>Si ces critères sont remplis, {company} aura :</b>", lang), heading_style))
    story.append(Spacer(1, 3*mm))
    
    # Benefits table (styled box)
    benefits_data = [
        [translate_text("📈 +40-80% de devis", lang), translate_text("Présence optimisée = machine à leads", lang)],
        [translate_text("💰 Conversion 3-7%", lang), translate_text("30-70 visiteurs sur 1000 contactent", lang)],
        [translate_text("🎯 Contrats +50-100%", lang), translate_text("Projets 15k€, 30k€, 50k€+", lang)]
    ]
    
    benefits_table = Table(benefits_data, colWidths=[60*mm, 100*mm])
    benefits_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), LIGHT_BG),
        ('TEXTCOLOR', (0, 0), (-1, -1), DARK_COLOR),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('PADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    
    story.append(benefits_table)
    story.append(Spacer(1, 8*mm))
    
    # Focus Conversion box
    story.append(Paragraph(translate_text("<b>💰 Focus Conversion : Transformer visiteurs en clients payants</b>", lang), heading_style))
    story.append(Spacer(1, 3*mm))
    
    focus_text = translate_text(
        "<b>Problème :</b> Sur 1000 visiteurs, seulement 5-10 vous contactent (0,5-1%). Les 990+ autres partent = <b>99% de perte</b>.<br/><br/>"
        "<b>Objectif :</b> Passer à 30-70 contacts sur 1000 (3-7%). Comment ? CTA visibles, formulaire 3 champs, chat live.<br/><br/>"
        "<b>ROI :</b> +60k€ à +200k€ CA annuel supplémentaire.", 
        lang
    )
    story.append(Paragraph(focus_text, body_style))
    story.append(Spacer(1, 8*mm))
    
    # Solutions
    story.append(Paragraph(translate_text("<b>Solutions proposées :</b>", lang), heading_style))
    story.append(Spacer(1, 3*mm))
    
    for solution in solutions[:6]:
        story.append(Paragraph(f"✅ {translate_text(solution, lang)}", body_style))
    
    story.append(Spacer(1, 10*mm))
    
    # CTA Box
    cta_data = [[
        Paragraph(translate_text("<b>Prochaine étape</b><br/>15 minutes pour vous le présenter ?<br/><br/><b>GRATUIT • SANS ENGAGEMENT</b>", lang), 
                 ParagraphStyle('CTA', parent=body_style, alignment=TA_CENTER, textColor=colors.white, fontSize=12))
    ]]
    
    cta_table = Table(cta_data, colWidths=[160*mm])
    cta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), ACCENT_COLOR),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('PADDING', (0, 0), (-1, -1), 15),
        ('ROUNDEDCORNERS', [5, 5, 5, 5]),
    ]))
    
    story.append(cta_table)
    story.append(Spacer(1, 8*mm))
    
    # Footer
    footer_text = "<b>HTMC AGENCY</b><br/>contact@htmcagency.com | +33 7 69 16 56 34"
    story.append(Paragraph(footer_text, ParagraphStyle('Footer', parent=body_style, alignment=TA_CENTER, fontSize=9)))
    
    # Build PDF
    doc.build(story, canvasmaker=HeaderCanvas)
    
    return output_path
