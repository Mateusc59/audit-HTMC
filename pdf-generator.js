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
        'VOTRE ENTREPRISE MÉRITE UN SITE WEB À LA HAUTEUR': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
        'Votre site web aujourd\'hui :': 'El vostre lloc web avui:',
        'Entreprise établie avec expérience locale, équipe qualifiée': 'Empresa establerta amb experiència local, equip qualificat',
        'Auditoria de votre entreprise': 'Auditoria de la vostra empresa',
        'Pour transformer': 'Per transformar',
        'votre expertise': 'la vostra experiència',
        'ans d\'expérience': 'anys d\'experiència',
        'années d\'expérience à': 'anys d\'experiència a',
        'en plus de contrats': 'en més contractes',
        'doit :': 'ha de:',
        'doit aussi :': 'també ha de:',
        'Vous avez': 'Teniu',
        'mais votre site web reflète-t-il vraiment cette expertise': 'però el vostre lloc web reflecteix realment aquesta experiència',
        
        'Montrer la valeur réelle': 'Mostrar el valor real',
        'Les visiteurs doivent comprendre en 5 secondes que': 'Els visitants han d\'entendre en 5 segons que',
        'n\'est pas comme les autres': 'no és com les altres',
        'doivent être évidents dès la première vue': 'han de ser evidents des de la primera vista',
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
        'Nos clients passent de': 'Els nostres clients passen de',
        'Imaginez': 'Imagineu',
        'doubler ou tripler vos demandes de devis sans augmenter votre budget marketing': 'duplicar o triplicar les vostres sol·licituds de pressupost sense augmentar el vostre pressupost de màrqueting',
        
        'Assurer la confiance avec le portfolio': 'Assegurar la confiança amb el portafoli',
        'Les clients veulent voir des preuves concrètes': 'Els clients volen veure proves concretes',
        
        'Le site de': 'El lloc de',
        'Être optimisé mobile': 'Estar optimitzat mòbil',
        'Être optimisé Google': 'Estar optimitzat Google',
        'Être bien élaboré': 'Estar ben elaborat',
        
        'et son site web aujourd\'hui :': 'i el seu lloc web avui:',
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