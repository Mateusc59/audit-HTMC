// PDF GENERATOR: Téléchargement PDF PARFAIT avec fenêtre optimisée

function downloadPDF(lang) {
    // Récupérer le contenu
    const content = document.getElementById('pdfContent');
    
    if (!content || !content.innerHTML) {
        alert('Générez d\'abord l\'audit !');
        return;
    }
    
    // Cloner le contenu
    let htmlContent = content.innerHTML;
    
    // Traduire si catalan
    if (lang === 'ca') {
        htmlContent = translateHTML(htmlContent);
    }
    
    // Créer une nouvelle fenêtre optimisée pour l'impression
    const printWindow = window.open('', '_blank');
    
    // Get CSS
    const cssLink = document.querySelector('link[href*="style"]');
    const cssHref = cssLink ? cssLink.href : '';
    
    // Construire le HTML de la fenêtre d'impression
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Audit HTMC - ${lang.toUpperCase()}</title>
            <link rel="stylesheet" href="${cssHref}">
            <style>
                @page {
                    size: A4;
                    margin: 0;
                }
                
                body {
                    margin: 0;
                    padding: 0;
                }
                
                @media print {
                    .instructions, .print-button {
                        display: none !important;
                    }
                }
                
                .instructions {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
                    color: white;
                    padding: 20px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                    z-index: 10000;
                    text-align: center;
                }
                
                .instructions h2 {
                    margin: 0 0 15px 0;
                    font-size: 1.5rem;
                }
                
                .instructions ul {
                    list-style: none;
                    padding: 0;
                    margin: 10px 0;
                    display: inline-block;
                    text-align: left;
                }
                
                .instructions li {
                    margin: 8px 0;
                    font-size: 1.1rem;
                }
                
                .print-button {
                    background: white;
                    color: #4CAF50;
                    border: none;
                    padding: 15px 40px;
                    font-size: 1.2rem;
                    font-weight: bold;
                    border-radius: 8px;
                    cursor: pointer;
                    margin-top: 15px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                }
                
                .print-button:hover {
                    background: #f0f0f0;
                }
                
                #pdfContent {
                    margin-top: 220px;
                }
                
                @media print {
                    #pdfContent {
                        margin-top: 0 !important;
                    }
                }
            </style>
        </head>
        <body>
            <div class="instructions">
                <h2>📄 ${lang === 'fr' ? 'Instructions pour un PDF parfait' : 'Instruccions per un PDF perfecte'}</h2>
                <ul>
                    <li>✅ ${lang === 'fr' ? 'Marges : "Aucune" ou "0"' : 'Marges: "Cap" o "0"'}</li>
                    <li>✅ ${lang === 'fr' ? 'Échelle : "Par défaut" ou "100%"' : 'Escala: "Per defecte" o "100%"'}</li>
                    <li>✅ ${lang === 'fr' ? 'Format : A4' : 'Format: A4'}</li>
                    <li>✅ ${lang === 'fr' ? 'Cocher "Graphiques d\'arrière-plan"' : 'Marcar "Gràfics de fons"'}</li>
                </ul>
                <button class="print-button" onclick="window.print()">
                    🖨️ ${lang === 'fr' ? 'IMPRIMER / ENREGISTRER EN PDF' : 'IMPRIMIR / DESAR COM A PDF'}
                </button>
            </div>
            
            <div id="pdfContent">
                ${htmlContent}
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}

function translateHTML(html) {
    const translations = {
        // HEADER
        'VOTRE ENTREPRISE MÉRITE UN SITE WEB A LA HAUTEUR': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
        'VOTRE ENTREPRISE MÉRITE UN SITE WEB À LA HAUTEUR': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
        
        // Phrases longues d'abord
        'Vous avez': 'Teniu',
        'ans d\'expérience à': 'anys d\'experiència a',
        'mais votre site web reflète-t-il vraiment cette expertise': 'però el vostre lloc web reflecteix realment aquesta experiència',
        'Auditoria de votre entreprise': 'Auditoria de la vostra empresa',
        'Pour transformer': 'Per transformar',
        'votre expertise': 'la vostra experiència',
        'en plus de contrats': 'en més contractes',
        'doit :': 'ha de:',
        
        // Sections
        'Montrer la valeur réelle': 'Mostrar el valor real',
        'Les visiteurs doivent comprendre en 5 secondes que': 'Els visitants han d\'entendre en 5 segons que',
        'n\'est pas comme les autres': 'no és com les altres',
        'doivent être évidents dès la première vue': 'han de ser evidents des de la primera vista',
        'Vos': 'Els vostres',
        'ans d\'expérience': 'anys d\'experiència',
        'sont un atout majeur qui doit transparaître immédiatement sur votre site': 'són un actiu important que ha de ser transparent immediatament al vostre lloc',
        
        'Convertir chaque visite en vente concrète': 'Convertir cada visita en venda concreta',
        'Actuellement, votre site perd': 'Actualment, el vostre lloc perd el',
        'des visiteurs sans qu\'ils agissent': 'dels visitants sense que actuïn',
        'Pourquoi': 'Per què',
        'Parce que les boutons': 'Perquè els botons',
        'Demander un devis': 'Sol·licitar pressupost',
        'ne sont pas assez visibles': 'no són prou visibles',
        'le formulaire est trop long': 'el formulari és massa llarg',
        'et il n\'y a pas de numéro de téléphone cliquable sur mobile': 'i no hi ha número de telèfon clicable en mòbil',
        'Résultat': 'Resultat',
        'vous perdez des dizaines de clients potentiels chaque mois': 'perdeu desenes de clients potencials cada mes',
        
        'La solution': 'La solució',
        'Boutons ultra-visibles dès la première seconde': 'Botons ultra-visibles des del primer segon',
        'formulaire simplifié': 'formulari simplificat',
        'champs': 'camps',
        'nom': 'nom',
        'téléphone': 'telèfon',
        'service': 'servei',
        'numéro clicable': 'número clicable',
        'Nos clients passent de': 'Els nostres clients passen de',
        'contacts/mois à': 'contactes/mes a',
        'contacts/mois': 'contactes/mes',
        'Imaginez': 'Imagineu',
        'doubler ou tripler vos demandes de devis sans augmenter votre budget marketing': 'duplicar o triplicar les vostres sol·licituds de pressupost sense augmentar el vostre pressupost de màrqueting',
        
        'Assurer la confiance avec le portfolio': 'Assegurar la confiança amb el portafoli',
        'Les clients veulent voir des preuves concrètes': 'Els clients volen veure proves concretes',
        'photos de projets réels avant/après': 'fotos de projectes reals abans/després',
        'votre équipement': 'el vostre equipament',
        'vos installations': 'les vostres instal·lacions',
        'votre équipe au travail': 'el vostre equip treballant',
        'Un portfolio bien présenté rassure et convertit': 'Un portafoli ben presentat tranquil·litza i converteix',
        'fois plus qu\'un site sans photos': 'vegades més que un lloc sense fotos',
        
        // Liste numérotée
        'Le site de': 'El lloc de',
        'doit aussi :': 'també ha de:',
        'Être optimisé mobile': 'Estar optimitzat mòbil',
        'des recherches se font sur mobile': 'de les cerques es fan en mòbil',
        'Si votre site n\'est pas adapté': 'Si el vostre lloc no està adaptat',
        'vous perdez': 'perdeu',
        'clients sur': 'clients de',
        'avant même qu\'ils vous contactent': 'abans fins i tot que us contactin',
        
        'Être optimisé Google': 'Estar optimitzat Google',
        'Apparaître en premier sur': 'Aparèixer primer a',
        'quand les clients recherchent vos services': 'quan els clients cerquen els vostres serveis',
        
        'Être bien élaboré': 'Estar ben elaborat',
        'Répondre aux questions clés': 'Respondre a les preguntes clau',
        'Disponibilité': 'Disponibilitat',
        'Démarches administratives': 'Tràmits administratius',
        'Particuliers et entreprises': 'Particulars i empreses',
        'Devis gratuit': 'Pressupost gratuït',
        
        // Page 2
        'et son site web aujourd\'hui :': 'i el seu lloc web avui:',
        'Si ces critères sont remplis': 'Si es compleixen aquests criteris',
        'aura :': 'tindrà:',
        
        // Bénéfices
        'de devis': 'de pressupostos',
        'Présence optimisée = machine à leads': 'Presència optimitzada = màquina de leads',
        'Conversion': 'Conversió',
        'visiteurs sur': 'visitants de',
        'contactent': 'contacten',
        'Contrats': 'Contractes',
        'Projets': 'Projectes',
        
        // Focus Conversion
        'Focus Conversion': 'Focus Conversió',
        'Transformer visiteurs en clients payants': 'Transformar visitants en clients que paguen',
        'Problème :': 'Problema:',
        'Sur': 'De',
        'visiteurs': 'visitants',
        'seulement': 'només',
        'vous contactent': 'us contacten',
        'Les': 'Els',
        'autres partent =': 'altres marxen =',
        'de perte': 'de pèrdua',
        
        'Objectif :': 'Objectiu:',
        'Passer à': 'Passar a',
        'contacts sur': 'contactes de',
        'Comment': 'Com',
        'CTA visibles': 'CTAs visibles',
        'chat live': 'xat en directe',
        'témoignages photos': 'testimonis amb fotos',
        
        'ROI :': 'ROI:',
        'CA annuel': 'CA anual',
        
        // Solutions
        'Solutions proposées :': 'Solucions proposades:',
        
        // CTA
        'Prochaine étape': 'Pròxima etapa',
        'minutes pour vous le présenter': 'minuts per presentar-vos-ho',
        'GRATUIT': 'GRATUÏT',
        'SANS ENGAGEMENT': 'SENSE COMPROMÍS'
    };
    
    // Sort by length (longest first) to avoid partial replacements
    const sortedTranslations = Object.entries(translations).sort((a, b) => b[0].length - a[0].length);
    
    for (const [fr, ca] of sortedTranslations) {
        html = html.replace(new RegExp(fr, 'g'), ca);
    }
    
    return html;
}
