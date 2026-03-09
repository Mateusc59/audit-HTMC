// PDF GENERATOR: Simple et qui marche !

function downloadPDF(lang) {
    // Traduire le contenu si catalan
    if (lang === 'ca') {
        const content = document.getElementById('pdfContent');
        const clone = content.cloneNode(true);
        translateTextNodes(clone);
        content.style.display = 'none';
        content.parentNode.insertBefore(clone, content);
        
        setTimeout(() => {
            window.print();
            setTimeout(() => {
                clone.remove();
                content.style.display = 'block';
            }, 1000);
        }, 300);
    } else {
        // Français - print direct
        window.print();
    }
}

function translateTextNodes(element) {
    const translations = {
        // Headers et titres
        'VOTRE ENTREPRISE MÉRITE UN SITE WEB À LA HAUTEUR': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
        'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
        'Votre site web aujourd\'hui :': 'El vostre lloc web avui:',
        'Votre site web aujourd\'hui': 'El vostre lloc web avui',
        'Entreprise établie avec expérience locale, équipe qualifiée': 'Empresa establerta amb experiència local, equip qualificat',
        'Auditoria de votre entreprise': 'Auditoria de la vostra empresa',
        
        // Page 1
        'Pour transformer': 'Per transformar',
        'votre expertise': 'la vostra experiència',
        'ans d\'expérience': 'anys d\'experiència',
        'années d\'expérience à': 'anys d\'experiència a',
        'en plus de contrats': 'en més contractes',
        'doit :': 'ha de:',
        'doit aussi :': 'també ha de:',
        'Vous avez': 'Teniu',
        'mais votre site web reflète-t-il vraiment cette expertise': 'però el vostre lloc web reflecteix realment aquesta experiència',
        'Votre entreprise mérite un site web à la hauteur': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
        
        'Montrer la valeur réelle': 'Mostrar el valor real',
        'Les visiteurs doivent comprendre en 5 secondes que': 'Els visitants han d\'entendre en 5 segons que',
        'n\'est pas comme les autres': 'no és com les altres',
        'doivent être évidents dès la première vue': 'han de ser evidents des de la primera vista',
        'sont un atout majeur qui doit transparaître immédiatement sur votre site': 'són un actiu important que ha de ser transparent immediatament al vostre lloc',
        'Votre expertise et votre professionnalisme': 'La vostra experiència i el vostre professionalisme',
        
        'Convertir chaque visite en vente concrète': 'Convertir cada visita en venda concreta',
        'Actuellement, votre site perd': 'Actualment, el vostre lloc perd',
        'des visiteurs': 'dels visitants',
        'sans qu\'ils agissent': 'sense que actuïn',
        'Pourquoi': 'Per què',
        'Parce que les boutons': 'Perquè els botons',
        'Demander un devis': 'Sol·licitar pressupost',
        'ne sont pas assez visibles': 'no són prou visibles',
        'le formulaire est trop long': 'el formulari és massa llarg',
        'et il n\'y a pas de numéro de téléphone cliquable sur mobile': 'i no hi ha número de telèfon clicable en mòbil',
        'Résultat': 'Resultat',
        'vous perdez des dizaines de clients potentiels chaque mois': 'perdeu desenes de clients potencials cada mes',
        'La solution': 'La solució',
        'Nos clients passent de': 'Els nostres clients passen de',
        'contacts/mois à': 'contactes/mes a',
        'contacts/mois': 'contactes/mes',
        'Imaginez': 'Imagineu',
        'doubler ou tripler vos demandes de devis sans augmenter votre budget marketing': 'duplicar o triplicar les vostres sol·licituds de pressupost sense augmentar el vostre pressupost de màrqueting',
        
        'Assurer la confiance avec le portfolio': 'Assegurar la confiança amb el portafoli',
        'Les clients veulent voir des': 'Els clients volen veure',
        'preuves concrètes': 'proves concretes',
        'Un portfolio bien présenté rassure et convertit 3x plus qu\'un site sans photos': 'Un portafoli ben presentat tranquil·itza i converteix 3 vegades més que un lloc sense fotos',
        
        'Le site de': 'El lloc de',
        'Être optimisé mobile': 'Estar optimitzat mòbil',
        'Être optimisé Google': 'Estar optimitzat Google',
        'Être bien élaboré': 'Estar ben elaborat',
        'des recherches se font sur mobile': 'de les cerques es fan en mòbil',
        'Si votre site n\'est pas adapté, vous perdez': 'Si el vostre lloc no està adaptat, perdeu',
        'clients sur': 'clients de',
        'avant même qu\'ils vous contactent': 'abans fins i tot que us contactin',
        'Apparaître en premier sur': 'Aparèixer primer a',
        'quand les clients recherchent vos services': 'quan els clients cerquen els vostres serveis',
        'votre région': 'la vostra regió',
        'Répondre aux questions clés': 'Respondre a les preguntes clau',
        'Disponibilité': 'Disponibilitat',
        'Démarches administratives': 'Tràmits administratius',
        'Particuliers et entreprises': 'Particulars i empreses',
        'Devis gratuit': 'Pressupost gratuït',
        
        // Nouvelle section page 1
        'Pourquoi c\'est urgent': 'Per què és urgent',
        'Chaque jour qui passe, vous perdez des clients potentiels qui vont chez vos concurrents': 'Cada dia que passa, perdeu clients potencials que van als vostres competidors',
        'Un site optimisé commence à générer des résultats en': 'Un lloc optimitzat comença a generar resultats en',
        'semaines': 'setmanes',
        'Votre retour sur investissement se mesure en mois, pas en années': 'El vostre retorn d\'inversió es mesura en mesos, no en anys',
        'Le coût de l\'inaction': 'El cost de la inacció',
        'Si vous générez actuellement': 'Si genereu actualment',
        'devis/mois et qu\'un site optimisé pourrait vous en apporter': 'pressupostos/mes i un lloc optimitzat us en podria portar',
        'vous perdez potentiellement': 'perdeu potencialment',
        'opportunités chaque mois': 'oportunitats cada mes',
        'Sur un an, c\'est': 'En un any, són',
        'clients perdus': 'clients perduts',
        
        'Les chiffres clés de votre secteur': 'Les xifres clau del vostre sector',
        'des clients cherchent en ligne avant de contacter': 'dels clients cerquen en línia abans de contactar',
        'des recherches se font sur mobile': 'de les cerques es fan en mòbil',
        'Un site lent perd': 'Un lloc lent perd',
        'de visiteurs en': 'de visitants en',
        'secondes': 'segons',
        'des clients lisent les avis avant de choisir': 'dels clients llegeixen les ressenyes abans de triar',
        
        // Page 2
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
        'Problème': 'Problema',
        'Sur': 'De',
        'visiteurs, seulement': 'visitants, només',
        'vous contactent': 'us contacten',
        'Les': 'Els',
        'autres partent': 'altres marxen',
        'de perte': 'de pèrdua',
        'Objectif': 'Objectiu',
        'Passer à': 'Passar a',
        'contacts sur': 'contactes de',
        'Comment': 'Com',
        'CTA visibles': 'CTAs visibles',
        'formulaire': 'formulari',
        'champs': 'camps',
        'bouton mobile cliquable': 'botó mòbil clicable',
        'chat live': 'xat en directe',
        'témoignages photos': 'testimonis amb fotos',
        'ROI': 'ROI',
        'visiteurs/mois avec': 'visitants/mes amb',
        'contacts': 'contactes',
        'Si': 'Si',
        'closent': 'tanquen',
        'clients/mois au lieu de': 'clients/mes en lloc de',
        'Panier': 'Cistella',
        'CA annuel': 'CA anual',
        
        'Solutions proposées': 'Solucions proposades',
        
        // Solutions spécifiques
        'Optimisation des CTA et parcours de conversion': 'Optimització dels CTAs i recorregut de conversió',
        'Formulaire de devis simplifié (3-4 champs max)': 'Formulari de pressupost simplificat (3-4 camps màx)',
        'SEO local + optimisation Google My Business': 'SEO local + optimització Google My Business',
        'Campagnes Google Ads ciblées pour générer des leads': 'Campanyes Google Ads orientades a generar leads',
        'Portfolio visuel avec projets avant/après': 'Portafoli visual amb projectes abans/després',
        'Système de témoignages et avis clients': 'Sistema de testimonis i ressenyes de clients',
        'Refonte complète orientée conversion': 'Redisseny complet orientat a conversió',
        'Chat en direct ou chatbot pour capturer leads': 'Xat en directe o chatbot per capturar leads',
        'Landing pages spécifiques par service': 'Landing pages específiques per servei',
        'Tracking et analytics pour optimiser conversions': 'Seguiment i analytics per optimitzar conversions',
        'Retargeting / Remarketing pour récupérer visiteurs': 'Retargeting / Remarketing per recuperar visitants',
        'Email marketing et automation pour nurturer leads': 'Email marketing i automatització per nodrir leads',
        
        // Section "Ce qui change"
        'Ce qui change dès maintenant': 'El que canvia des d\'ara',
        'Semaine': 'Setmana',
        'Audit complet + stratégie définie': 'Auditoria completa + estratègia definida',
        'Premiers résultats mesurables': 'Primers resultats mesurables',
        'Mois': 'Mes',
        'Doublement des contacts qualifiés': 'Duplicació dels contactes qualificats',
        'ROI positif et croissance continue': 'ROI positiu i creixement continu',
        
        'Prochaine étape': 'Pròxima etapa',
        'minutes pour vous le présenter': 'minuts per presentar-vos-ho',
        'GRATUIT': 'GRATUÏT',
        'SANS ENGAGEMENT': 'SENSE COMPROMÍS',
        'Mon entreprise à contacter': 'La meva empresa per contactar',
        
        // Nombres et caractères spéciaux
        '1-2': '1-2',
        '3-4': '3-4',
        '2-3': '2-3',
        '4-6': '4-6',
        '70-80%': '70-80%',
        '5-10': '5-10',
        '20-30': '20-30',
        '40-80%': '40-80%',
        '3-7%': '3-7%',
        '50-100%': '50-100%',
        '15k€': '15k€',
        '30k€': '30k€',
        '50k€': '50k€',
        '60k€': '60k€',
        '200k€': '200k€',
        '15 000€': '15 000€',
        '5 000€': '5 000€'
    };
    
    // Utiliser TreeWalker pour parcourir seulement les text nodes
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const nodesToTranslate = [];
    let node;
    while (node = walker.nextNode()) {
        nodesToTranslate.push(node);
    }
    
    // Traduire dans l'ordre (plus long d'abord)
    const sortedTranslations = Object.entries(translations).sort((a, b) => b[0].length - a[0].length);
    
    nodesToTranslate.forEach(textNode => {
        let text = textNode.nodeValue;
        sortedTranslations.forEach(([fr, ca]) => {
            text = text.replace(new RegExp(fr, 'g'), ca);
        });
        textNode.nodeValue = text;
    });
}