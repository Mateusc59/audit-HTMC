// PDF GENERATOR: Téléchargement PDF avec traduction SANS CASSER LE CSS

function downloadPDF(lang) {
    // Afficher les instructions
    const instructions = lang === 'fr' 
        ? `📄 IMPORTANT pour un PDF parfait:\n\n1. Dans la fenêtre d'impression:\n   ✅ Marges: "Aucune" ou "0"\n   ✅ Échelle: "Par défaut" ou "100%"\n   ✅ Format: A4\n\n2. Ensuite "Enregistrer en PDF"\n\nClic OK pour continuer →`
        : `📄 IMPORTANT per un PDF perfecte:\n\n1. A la finestra d'impressió:\n   ✅ Marges: "Cap" o "0"\n   ✅ Escala: "Per defecte" o "100%"\n   ✅ Format: A4\n\n2. Després "Desa com a PDF"\n\nClic OK per continuar →`;
    
    if (!confirm(instructions)) {
        return;
    }
    
    if (lang === 'ca') {
        // Cloner pour ne pas toucher l'original
        const content = document.getElementById('pdfContent');
        const clone = content.cloneNode(true);
        
        // Traduire UNIQUEMENT le texte, pas les attributs/styles
        translateTextNodes(clone);
        
        // Remplacer temporairement
        content.style.display = 'none';
        content.parentNode.insertBefore(clone, content);
        
        setTimeout(() => {
            window.print();
            // Nettoyer
            setTimeout(() => {
                clone.remove();
                content.style.display = 'block';
            }, 1000);
        }, 300);
    } else {
        // Français
        window.print();
    }
}

function translateTextNodes(element) {
    const translations = {
        // HEADER - phrases complètes en MAJUSCULES
        'VOTRE ENTREPRISE MÉRITE UN SITE WEB A LA HAUTEUR': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
        'VOTRE ENTREPRISE MÉRITE UN SITE WEB À LA HAUTEUR': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
        
        // Phrases longues d'abord
        'Vous avez': 'Teniu',
        'ans d\'expérience à': 'anys d\'experiència a',
        'mais votre site web reflète-t-il vraiment cette expertise': 'però el vostre lloc web reflecteix realment aquesta experiència',
        'Auditoria de votre entreprise': 'Auditoria de la vostra empresa',
        'Pour transformer': 'Per transformar',
        'votre expertise': 'la vostra experiència',
        'la vostra experiència': 'la vostra experiència',
        'en plus de contrats': 'en més contractes',
        'doit :': 'ha de:',
        'doit aussi :': 'també ha de:',
        'ha de:': 'ha de:',
        
        // Phrases mélangées français-catalan à corriger
        'Entreprise établie avec expérience locale, équipe qualifiée': 'Empresa establerta amb experiència local, equip qualificat',
        'Entreprise établie amb expérience locale, équipe qualifiée': 'Empresa establerta amb experiència local, equip qualificat',
        'un formulaire simple': 'un formulari simple',
        'champs : nom': 'camps: nom',
        'Photos de projets réels avant/après, équipement': 'Fotos de projectes reals abans/després, equipament',
        'Photos Projectes réels avant/après, équipement': 'Fotos de projectes reals abans/després, equipament',
        
        // Section 1
        'Montrer la valeur réelle': 'Mostrar el valor real',
        'Mostrar el valor real': 'Mostrar el valor real',
        'Les visiteurs doivent comprendre que': 'Els visitants han d\'entendre que',
        'n\'est pas comme les autres': 'no és com els altres',
        'doit être évidente dès la première vue': 'ha de ser evident des de la primera vista',
        
        // Section 2
        'Convertir chaque visite en vente concrète': 'Convertir cada visita en venda concreta',
        'Actuellement, votre site perd': 'Actualment, el vostre lloc perd',
        'Un site mal optimisé perd': 'Un lloc mal optimitzat perd',
        'des visiteurs': 'dels visitants',
        'sans qu\'ils agissent': 'sense que actuïn',
        'Avec des boutons': 'Amb botons',
        'Demander un devis': 'Sol·licitar pressupost',
        'Sol·licitar pressupost': 'Sol·licitar pressupost',
        'ultra-visibles': 'ultra-visibles',
        'un formulaire ultra-simple': 'un formulari ultra-simple',
        'nom, téléphone, service': 'nom, telèfon, servei',
        'vous pouvez': 'podeu',
        'doubler ou tripler vos demandes de contact': 'duplicar o triplicar les sol·licituds de contacte',
        'doubler els vostres contactes': 'duplicar els vostres contactes',
        'en quelques semaines': 'en poques setmanes',
        'Nos clients passent de': 'Els nostres clients passen de',
        'contacts/mois à': 'contactes/mes a',
        'contactes/mes a 20-30': 'contactes/mes a 20-30',
        
        // Section 3
        'Assurer la confiance avec le portfolio': 'Assegurar la confiança amb el portafoli',
        'Photos de projets réels': 'Fotos de projectes reals',
        'Les clients veulent des preuves concrètes': 'Els clients volen proves concretes',
        'els clients veulent dels preuves concrètes': 'els clients volen proves concretes',
        
        // Liste
        'Le site de': 'El lloc de',
        'Être optimisé mobile': 'Estar optimitzat mòbil',
        'Estar optimitzat mòbil': 'Estar optimitzat mòbil',
        'des recherches se font sur mobile': 'de les cerques es fan en mòbil',
        'Être optimisé Google': 'Estar optimitzat Google',
        'Apparaître dans les recherches locales': 'Aparèixer a les cerques locals',
        'Être bien élaboré': 'Estar ben elaborat',
        'Répondre aux questions clés des clients': 'Respondre a les preguntes clau dels clients',
        
        // Page 2 - Problèmes
        'Votre site web aujourd\'hui :': 'El vostre lloc web avui:',
        'El vostre lloc web avui:': 'El vostre lloc web avui:',
        'Site qui ne génère presque aucun lead ni devis': 'Lloc que no genera gairebé cap lead ni pressupost',
        'Taux de conversion très faible': 'Taxa de conversió molt baixa',
        'Taux de conversió très faible': 'Taxa de conversió molt baixa',
        'visiteurs qui ne deviennent pas clients': 'visitants que no es converteixen en clients',
        'visitants qui ne deviennent pas clients': 'visitants que no es converteixen en clients',
        'Pas trouvable sur Google': 'No es pot trobar a Google',
        'Pas trouvable sobre Google': 'No es pot trobar a Google',
        'SEO local faible': 'SEO local feble',
        
        // Bénéfices
        'Si ces critères sont remplis': 'Si es compleixen aquests criteris',
        'aura :': 'tindrà:',
        'de devis': 'de pressupostos',
        'de pressupostos': 'de pressupostos',
        'Présence optimisée = machine à leads': 'Presència optimitzada = màquina de leads',
        'Presència optimitzada = màquina de leads': 'Presència optimitzada = màquina de leads',
        'Conversion': 'Conversió',
        'Conversió': 'Conversió',
        'visiteurs sur': 'visitants de',
        'visitants de': 'visitants de',
        'contactent': 'contacten',
        'Contrats': 'Contractes',
        'Contractes': 'Contractes',
        'Projets': 'Projectes',
        'Projectes': 'Projectes',
        
        // Focus Conversion - TOUT traduire
        'Focus Conversion : Comment transformer plus de visiteurs en clients payants': 'Focus Conversió: Com transformar més visitants en clients que paguen',
        'Focus Conversion : Transformer visiteurs en clients payants': 'Focus Conversió: Transformar visitants en clients que paguen',
        'Focus Conversió : Transformer visitants en clients payants': 'Focus Conversió: Transformar visitants en clients que paguen',
        'Le problème actuel :': 'El problema actual:',
        'Problème :': 'Problema:',
        'L\'objectif :': 'L\'objectiu:',
        'Objectif :': 'Objectiu:',
        'Le ROI :': 'El ROI:',
        'ROI :': 'ROI:',
        'Sur 1000 visiteurs': 'De 1000 visitants',
        'sobre 1000 visiteurs': 'de 1000 visitants',
        'sobre 1000 visitants': 'de 1000 visitants',
        'seulement': 'només',
        'vous contactent': 'us contacten',
        'autres partent': 'altres marxen',
        'autres partent =': 'altres marxen =',
        'de perte': 'de pèrdua',
        'de pèrdua': 'de pèrdua',
        'Passer à': 'Passar a',
        'contacts sur': 'contactes de',
        'contactes de': 'contactes de',
        'visiteurs': 'visitants',
        'visitants': 'visitants',
        'de conversion': 'de conversió',
        'de conversió': 'de conversió',
        'Comment ?': 'Com?',
        'Com?': 'Com?',
        'CTA visibles': 'CTAs visibles',
        'formulaire': 'formulari',
        'champs': 'camps',
        'bouton': 'botó',
        'botó': 'botó',
        'cliquable': 'clicable',
        'chat live': 'xat en directe',
        'témoignages photos': 'testimonis amb fotos',
        'témoignages': 'testimonis',
        'visiteurs/mois': 'visitants/mes',
        'visitants/mois': 'visitants/mes',
        'contacts': 'contactes',
        'contactes': 'contactes',
        'closent': 'tanquen',
        'clients/mois au lieu de': 'clients/mes en lloc de',
        'clients/mes au lieu de': 'clients/mes en lloc de',
        'Panier': 'Cistella',
        'CA annuel': 'CA anual',
        
        // Solutions
        'Solutions proposées:': 'Solucions proposades:',
        'Solucions proposades:': 'Solucions proposades:',
        'Optimisation des CTA': 'Optimització dels CTAs',
        'Optimisation dels CTA': 'Optimització dels CTAs',
        'parcours de conversion': 'recorregut de conversió',
        'parcours de conversió': 'recorregut de conversió',
        'optimisation Google My Business': 'optimització Google My Business',
        'Portfolio visuel avec projets': 'Portafoli visual amb projectes',
        'Portfolio visuel amb Projectes': 'Portafoli visual amb projectes',
        'avant/après': 'abans/després',
        
        // CTA
        'Prochaine étape': 'Pròxima etapa',
        'Pròxima etapa': 'Pròxima etapa',
        'minutes pour vous le présenter': 'minuts per presentar-vos-ho',
        'minuts per presentar-vos-ho': 'minuts per presentar-vos-ho',
        'GRATUIT': 'GRATUÏT',
        'GRATUÏT': 'GRATUÏT',
        'SANS ENGAGEMENT': 'SENSE COMPROMÍS',
        'SENSE COMPROMÍS': 'SENSE COMPROMÍS',
        
        // Petits mots
        ' et ': ' i ',
        ' avec ': ' amb ',
        ' sans ': ' sense ',
        ' sur ': ' sobre ',
        ' pour ': ' per ',
        ' dans ': ' a ',
        ' de ': ' de ',
        ' le ': ' el ',
        ' la ': ' la ',
        ' les ': ' els ',
        ' des ': ' dels '
    };
    
    // Parcourir UNIQUEMENT les nœuds de texte
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    // Traduire chaque nœud de texte
    textNodes.forEach(textNode => {
        let text = textNode.textContent;
        
        // Appliquer traductions (plus longues d'abord)
        const sorted = Object.entries(translations).sort((a, b) => b[0].length - a[0].length);
        
        for (const [fr, ca] of sorted) {
            // Regex global, case insensitive
            const regex = new RegExp(fr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
            text = text.replace(regex, ca);
        }
        
        textNode.textContent = text;
    });
}