// TEMPLATES — Audit bilingue FR/CA, orienté secteur, printer-friendly

// ─────────────────────────────────────────────────────────────────────────────
// Contenu spécifique par secteur
// ─────────────────────────────────────────────────────────────────────────────
function getSectorContent(industry, c, loc, uv, expLabel, isCa) {
    const loc2 = loc ? (isCa ? `a ${loc}` : `à ${loc}`) : '';
    const exp  = expLabel ? (isCa ? `amb ${expLabel}` : `avec ${expLabel}`) : '';

    const sectors = {
        construction: {
            fr: {
                p1t: 'Valoriser vos réalisations',
                p1b: `Les maîtres d'ouvrage décident sur des preuves visuelles. Photos de chantiers avant/après, certifications (RGE, Qualibat, Qualifelec), références clients — ${c} ${exp ? exp + ' ' : ''}${loc2} doit transformer ses chantiers en arguments de vente immédiatement visibles.`,
                p2t: 'Simplifier la demande de devis',
                p2b: `Un maître d'ouvrage compare 3 à 4 entreprises avant de choisir. Si votre formulaire ne permet pas de soumettre une demande en moins de 60 secondes (type de travaux, surface, date souhaitée), il passe au concurrent suivant.`,
                p3t: 'Être visible sur les bons mots-clés locaux',
                p3b: `Quand un particulier tape "entreprise de construction ${loc || 'votre ville'}" ou "rénovation maison ${loc || 'votre région'}", votre site doit apparaître. Sans SEO local, vous êtes invisible pour 85% de vos futurs clients.`,
                ops: ['Galerie chantiers avant/après', 'Formulaire devis en 3 champs', 'Page par service (gros œuvre, rénovation...)', 'Fiche Google My Business optimisée'],
            },
            ca: {
                p1t: 'Valoritzar les vostres realitzacions',
                p1b: `Els propietaris decideixen amb proves visuals. Fotos d'obres abans/després, certificacions, referències de clients — ${c} ${exp ? exp + ' ' : ''}${loc2} ha de transformar les seves obres en arguments de venda visibles.`,
                p2t: 'Simplificar la sol·licitud de pressupost',
                p2b: `Un client compara 3 o 4 empreses abans de triar. Si el formulari no permet enviar una sol·licitud en menys de 60 segons (tipus d'obra, superfície, data), passarà al competidor.`,
                p3t: 'Ser visible a les paraules clau locals',
                p3b: `Quan algú cerca "empresa de construcció ${loc || 'la vostra ciutat'}", el vostre lloc ha d'aparèixer. Sense SEO local, sou invisible per al 85% dels vostres futurs clients.`,
                ops: ['Galeria d\'obres abans/després', 'Formulari pressupost 3 camps', 'Pàgina per servei', 'Fitxa Google My Business'],
            }
        },
        plomberie: {
            fr: {
                p1t: 'Capter les urgences en premier',
                p1b: `En situation d'urgence (fuite, canalisation bouchée), le client appelle le premier résultat Google. ${c} ${loc2} doit afficher : disponibilité, zone d'intervention, bouton d'appel direct et délai d'intervention — visible en 2 secondes sur mobile.`,
                p2t: 'Convertir les visites en appels',
                p2b: `Sur mobile, 80% des visiteurs veulent appeler directement. Un numéro cliquable en haut de page, un bouton "Urgence 24h/7j" bien visible, et une présentation claire de vos services suffisent à faire la différence.`,
                p3t: 'Rassurer avec vos références',
                p3b: `Avis Google, certifications (RGE, Qualigaz), photos d'interventions — les preuves de sérieux sont décisives. Un client en urgence n'a pas le temps de douter, il doit avoir confiance immédiatement.`,
                ops: ['Bouton appel direct visible', 'Mention disponibilité 24h/7j', 'Avis Google mis en avant', 'Zones d\'intervention listées'],
            },
            ca: {
                p1t: 'Captar les urgències primer',
                p1b: `En cas d'urgència (fuga, canonada obstruïda), el client truca al primer resultat de Google. ${c} ${loc2} ha de mostrar disponibilitat, zona d'intervenció i botó de trucada directa en 2 segons.`,
                p2t: 'Convertir visites en trucades',
                p2b: `En mòbil, el 80% dels visitants vol trucar directament. Un número clicable a la part superior i un botó "Urgència 24h/7d" visible fan la diferència.`,
                p3t: 'Generar confiança amb referències',
                p3b: `Ressenyes de Google, certificacions, fotos d'intervencions — les proves de serietat són decisives. Un client en urgència ha de confiar immediatament.`,
                ops: ['Botó trucada directa visible', 'Disponibilitat 24h/7d', 'Ressenyes Google destacades', 'Zones d\'intervenció'],
            }
        },
        electricite: {
            fr: {
                p1t: 'Afficher vos certifications et compétences',
                p1b: `Qualibat, RGE, habilitations électriques — ces certifications rassurent et qualifient ${c} aux yeux des particuliers comme des professionnels. Elles doivent être visibles dès la page d'accueil, pas cachées dans les mentions légales.`,
                p2t: 'Toucher les marchés porteurs : photovoltaïque & rénovation',
                p2b: `Les recherches pour "installation panneaux solaires ${loc || 'votre région'}" ou "mise aux normes électriques" explosent. ${c} doit avoir des pages dédiées par service pour capter ces demandes à forte valeur.`,
                p3t: 'Faciliter la prise de contact selon l\'urgence',
                p3b: `Dépannage d'urgence ou projet planifié — les besoins sont différents. Votre site doit proposer deux chemins clairs : "Urgence" (numéro direct) et "Projet" (formulaire de devis détaillé).`,
                ops: ['Page dédiée photovoltaïque', 'Certifications en avant', 'Double parcours urgence/projet', 'Devis en ligne simplifié'],
            },
            ca: {
                p1t: 'Mostrar certificacions i competències',
                p1b: `Qualibat, RGE, habilitacions elèctriques — aquestes certificacions tranquil·litzen ${c} davant els clients. Han de ser visibles des de la pàgina principal.`,
                p2t: 'Aprofitar els mercats de fotovoltaic i reforma',
                p2b: `Les cerques de "instal·lació plaques solars ${loc || 'la vostra regió'}" creixen molt. ${c} ha de tenir pàgines dedicades per servei per captar aquestes demandes.`,
                p3t: 'Facilitar el contacte segons la urgència',
                p3b: `Avaria urgent o projecte planificat — el lloc ha de proposar dos camins clars: "Urgència" (número directe) i "Projecte" (formulari de pressupost).`,
                ops: ['Pàgina fotovoltaica dedicada', 'Certificacions destacades', 'Doble camí urgència/projecte', 'Pressupost en línia'],
            }
        },
        immobilier: {
            fr: {
                p1t: 'Convaincre les vendeurs de vous confier leur bien',
                p1b: `Un propriétaire qui veut vendre compare les agences en ligne avant même de prendre rendez-vous. ${c} ${loc2} doit afficher son nombre de ventes réussites, ses délais moyens et ses témoignages pour emporter le mandat.`,
                p2t: 'Attirer des acheteurs qualifiés',
                p2b: `Votre portefeuille de biens doit être visible, filtrable et mis à jour. Des photos professionnelles, des descriptions précises et un formulaire de contact par bien — c'est le minimum pour convertir un visiteur en prospect.`,
                p3t: 'Proposer de l\'estimation en ligne',
                p3b: `L'estimation en ligne est l'outil de génération de leads numéro 1 pour l'immobilier. En échange d'une estimation gratuite de leur bien, les propriétaires vous laissent leurs coordonnées — un flux de contacts qualifiés régulier.`,
                ops: ['Outil d\'estimation en ligne', 'Portefeuille biens avec filtres', 'Témoignages vendeurs/acheteurs', 'Page agent avec stats'],
            },
            ca: {
                p1t: 'Convèncer els venedors de confiar-vos el seu bé',
                p1b: `Un propietari que vol vendre compara les agències en línia abans de demanar cita. ${c} ${loc2} ha de mostrar vendes reeixides, terminis i testimonis.`,
                p2t: 'Atreure compradors qualificats',
                p2b: `La vostra cartera de béns ha de ser visible, filtrable i actualitzada. Fotos professionals i formulari de contacte per bé — el mínim per convertir un visitant en prospecte.`,
                p3t: 'Oferir estimació en línia',
                p3b: `L'estimació en línia és l'eina número 1 de generació de leads per a immobiliàries. A canvi d'una estimació gratuïta, els propietaris us deixen les seves dades.`,
                ops: ['Eina d\'estimació en línia', 'Cartera amb filtres', 'Testimonis venedors/compradors', 'Pàgina agent amb estadístiques'],
            }
        },
        menuiserie: {
            fr: {
                p1t: 'Exposer votre savoir-faire artisanal',
                p1b: `Le sur-mesure se vend par le visuel. ${c} ${exp ? exp + ' ' : ''}${loc2} doit présenter ses réalisations en galerie : fenêtres, portes, cuisines, escaliers — avec photos haute qualité et descriptif des matériaux utilisés.`,
                p2t: 'Cibler les projets à forte valeur',
                p2b: `Les projets de rénovation complète ou d'agencement sur-mesure représentent votre marge la plus élevée. Votre site doit avoir des pages dédiées par type de projet pour attirer ces clients qui ont un budget conséquent.`,
                p3t: 'Rassurer sur les délais et le process',
                p3b: `"Combien de temps ça prend ? Comment ça se passe ?" — ce sont les premières questions de vos prospects. Une page "Comment ça marche" (visite, devis, fabrication, pose) lève les freins à la prise de contact.`,
                ops: ['Galerie réalisations par catégorie', 'Pages par type de projet', 'Page "Comment ça marche"', 'Demande de devis visuel'],
            },
            ca: {
                p1t: 'Exposar el vostre saber fer artesanal',
                p1b: `El fet a mida es ven pel visual. ${c} ${exp ? exp + ' ' : ''}${loc2} ha de presentar les seves realitzacions en galeria amb fotos d'alta qualitat.`,
                p2t: 'Orientar-se als projectes d\'alt valor',
                p2b: `Els projectes de renovació completa o d'arranjament a mida representen el vostre marge més alt. El vostre lloc ha de tenir pàgines dedicades per atraure aquests clients.`,
                p3t: 'Tranquil·litzar sobre terminis i procés',
                p3b: `"Quant temps tarda? Com funciona?" — són les primeres preguntes dels vostres prospectes. Una pàgina "Com funciona" elimina les barreres al contacte.`,
                ops: ['Galeria realitzacions per categoria', 'Pàgines per tipus de projecte', 'Pàgina "Com funciona"', 'Sol·licitud pressupost visual'],
            }
        },
        peinture: {
            fr: {
                p1t: 'Montrer la qualité de vos finitions',
                p1b: `La peinture, ça se voit. ${c} ${loc2} doit présenter des photos avant/après de haute qualité de ses chantiers : intérieur, extérieur, ravalement, décoration. Une image vaut mieux que dix lignes de texte.`,
                p2t: 'Se positionner sur le ravalement et les syndics',
                p2b: `Le ravalement de façade et les contrats avec des syndics de copropriété représentent des chantiers récurrents et à forte valeur. Votre site doit clairement adresser ces deux marchés avec une page dédiée et un formulaire adapté.`,
                p3t: 'Faciliter les demandes de devis chantier',
                p3b: `Un formulaire qui demande : type de surface (intérieur/extérieur), superficie estimée, type de prestation — permet de recevoir des demandes qualifiées et de préparer un chiffrage préliminaire en amont.`,
                ops: ['Galerie avant/après haute qualité', 'Page ravalement & syndics', 'Formulaire devis par type de surface', 'Avis clients avec photos chantier'],
            },
            ca: {
                p1t: 'Mostrar la qualitat dels vostres acabats',
                p1b: `La pintura es veu. ${c} ${loc2} ha de presentar fotos abans/després d'alta qualitat de les seves obres: interior, exterior, façanes.`,
                p2t: 'Posicionar-se en façanes i comunitats',
                p2b: `La restauració de façanes i els contractes amb comunitats representen obres recurrents d'alt valor. El lloc ha d'adreçar clarament aquests dos mercats.`,
                p3t: 'Facilitar les sol·licituds de pressupost',
                p3b: `Un formulari que demani: tipus de superfície, metratge estimat, tipus de prestació — permet rebre sol·licituds qualificades.`,
                ops: ['Galeria abans/després d\'alta qualitat', 'Pàgina façanes i comunitats', 'Formulari pressupost per superfície', 'Ressenyes amb fotos d\'obra'],
            }
        },
        architecture: {
            fr: {
                p1t: 'Exposer votre portfolio de projets',
                p1b: `Un client qui envisage un projet architectural cherche un architecte dont il aime déjà l'œuvre. ${c} ${loc2} doit présenter ses projets réalisés avec photos, descriptifs et contexte — c'est votre meilleur argument commercial.`,
                p2t: 'Cibler les projets résidentiels haut de gamme',
                p2b: `Les clients à fort budget choisissent leur architecte sur sa réputation et son style. Votre site doit refléter le niveau de qualité de vos projets et s'adresser clairement aux particuliers et promoteurs avec des projets ambitieux.`,
                p3t: 'Expliquer votre démarche et votre process',
                p3b: `"Comment se déroule une mission d'architecture ?" — une page dédiée qui explique votre méthode (brief, esquisse, permis, suivi de chantier) lève les appréhensions et renforce la confiance avant même le premier rendez-vous.`,
                ops: ['Portfolio projets réalisés', 'Page démarche & philosophie', 'Formulaire projet (type, budget, surface)', 'Mentions dans la presse'],
            },
            ca: {
                p1t: 'Exposar el vostre portafoli de projectes',
                p1b: `Un client que vol un projecte arquitectònic busca un arquitecte la obra del qual li agradi. ${c} ${loc2} ha de presentar els seus projectes amb fotos, descripcius i context.`,
                p2t: 'Orientar-se als projectes residencials d\'alt nivell',
                p2b: `Els clients amb alt pressupost trien el seu arquitecte per la seva reputació i estil. El lloc ha de reflectir la qualitat dels projectes.`,
                p3t: 'Explicar el vostre procés',
                p3b: `"Com es desenvolupa una missió d'arquitectura?" — una pàgina dedicada que explica el mètode reforça la confiança abans de la primera cita.`,
                ops: ['Portafoli de projectes', 'Pàgina filosofia i mètode', 'Formulari projecte (tipus, pressupost)', 'Mencions a la premsa'],
            }
        },
        autre: {
            fr: {
                p1t: 'Afficher clairement votre expertise',
                p1b: `${c} ${exp ? exp + ' ' : ''}${loc2} doit se différencier dès la page d'accueil. Votre spécialisation, vos références, vos certifications — tout ce qui justifie pourquoi choisir ${c} plutôt qu'un concurrent doit être visible immédiatement.`,
                p2t: 'Simplifier la prise de contact',
                p2b: `Chaque étape supplémentaire entre un visiteur et son premier contact avec vous coûte des clients potentiels. Formulaire court, numéro cliquable, réponse sous 24h — la simplicité crée la confiance.`,
                p3t: 'Être trouvé sur Google localement',
                p3b: `85% des clients cherchent en ligne avant de contacter un prestataire. Sans présence optimisée sur Google, ${c} rate la majorité de ces opportunités — notamment les recherches mobiles de proximité.`,
                ops: ['Page d\'accueil centrée sur les bénéfices client', 'Formulaire de contact simplifié', 'SEO local optimisé', 'Avis clients mis en avant'],
            },
            ca: {
                p1t: 'Mostrar clarament la vostra experiència',
                p1b: `${c} ${exp ? exp + ' ' : ''}${loc2} s'ha de diferenciar des de la pàgina principal. La vostra especialització, referències i certificacions han de ser visibles immediatament.`,
                p2t: 'Simplificar el contacte',
                p2b: `Cada pas addicional entre un visitant i el primer contacte us costa clients potencials. Formulari curt, número clicable, resposta en 24h.`,
                p3t: 'Ser trobat a Google localment',
                p3b: `El 85% dels clients cerquen en línia abans de contactar. Sense presència optimitzada a Google, ${c} perd la majoria d'oportunitats.`,
                ops: ['Pàgina principal centrada en beneficis', 'Formulari de contacte simplificat', 'SEO local optimitzat', 'Ressenyes de clients'],
            }
        }
    };

    const s = sectors[industry] || sectors['autre'];
    return isCa ? s.ca : s.fr;
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer — fond blanc, printer-friendly
// ─────────────────────────────────────────────────────────────────────────────
function footerHTML() {
    return `
    <div class="pdf-footer">
        <div class="pdf-footer-brand">
            <span class="pdf-footer-name">HTMC AGENCY</span>
            <span class="pdf-footer-tagline">Agence Digitale</span>
        </div>
        <div class="pdf-footer-contacts">
            <span>contact@htmcagency.com</span>
            <span>htmcagency.com &nbsp;|&nbsp; +33 7 69 16 56 34</span>
        </div>
        <img src="logohtmc.png" class="pdf-footer-logo">
    </div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Template principal
// ─────────────────────────────────────────────────────────────────────────────
function generateAuditHTML(data, lang = 'fr') {
    const isCa = lang === 'ca';
    const c    = data.companyName;
    const loc  = data.location || '';

    const expLabel = data.years
        ? (isCa ? `${data.years} anys d'experiència` : `${data.years} ans d'expérience`)
        : '';

    const uv = data.uniqueValue || (isCa ? `La vostra experiència i professionalisme` : `Votre expertise et professionnalisme`);

    const logoTopHTML    = data.logo ? `<img src="${data.logo}" class="pdf-logo">` : '';
    const logoHeaderHTML = data.logo ? `<img src="${data.logo}" class="pdf-header-logo">` : '';

    // Titre
    const title = data.years
        ? (isCa
            ? `${data.years} anys d'experiència a ${loc} — el vostre lloc web ho reflecteix?`
            : `${data.years} ans d'expérience à ${loc} — votre site web le reflète-t-il ?`)
        : (isCa ? `La vostra empresa mereix un lloc web a l'alçada` : `Votre entreprise mérite un site web à la hauteur`);

    // Contenu sectoriel
    const sc = getSectorContent(data.industry, c, loc, expLabel, expLabel, isCa);

    // Problèmes & solutions
    const problemsHTML  = data.problems.map(p => `<li style="margin:4px 0;font-size:0.78rem;line-height:1.35;">❌ ${p}</li>`).join('');
    const solutionsHTML = data.solutions.map(s => `<li style="margin:4px 0;font-size:0.78rem;line-height:1.35;">✅ ${s}</li>`).join('');

    // Block problèmes page 2 (avec ou sans screenshot)
    const problemsBlock = data.screenshot ? `
        <div class="audit-box" style="margin:10px 0;">
            <div style="display:grid;grid-template-columns:220px 1fr;gap:16px;align-items:start;">
                <img src="${data.screenshot}" style="width:100%;border:2px solid #ddd;border-radius:6px;">
                <ul style="list-style:none;padding:0;">${problemsHTML}</ul>
            </div>
        </div>` : (data.problems.length > 0 ? `
        <div class="audit-box" style="margin:10px 0;">
            <p style="font-size:0.82rem;font-weight:700;margin:0 0 8px;">${isCa ? `Problemes identificats :` : `Problèmes identifiés :`}</p>
            <ul style="list-style:none;padding:0;columns:2;gap:10px;">${problemsHTML}</ul>
        </div>` : '');

    // Opportunités (non chiffrées, qualitatives)
    const opsItems = sc.ops.map(op => `
        <div style="display:flex;align-items:center;gap:8px;font-size:0.77rem;padding:6px 0;border-bottom:1px solid #eee;">
            <span style="color:var(--accent);font-weight:800;">→</span> ${op}
        </div>`).join('');

    return `
<!-- ══════════════════════════ PAGE 1 ══════════════════════════ -->
<div class="pdf-page">
    ${logoTopHTML}

    <!-- En-tête -->
    <div class="pdf-header">
        <div class="pdf-header-side">HTMC</div>
        ${logoHeaderHTML}
        <div style="flex:1;">
            <h1 class="pdf-title">${title.toUpperCase()}</h1>
            <p style="font-size:0.82rem;margin-top:6px;opacity:0.85;">
                ${isCa ? 'Auditoria de la vostra empresa' : 'Audit de votre entreprise'} —
                <span class="pdf-company-name" style="font-weight:800;">${c}</span>
            </p>
        </div>
    </div>

    <!-- Intro -->
    <p style="text-align:center;font-size:0.95rem;font-weight:800;margin:14px 0 12px;line-height:1.4;">
        ${isCa
            ? `Per convertir ${expLabel || 'la vostra experiència'} en més clients, <span style="color:var(--accent);">${c}</span> ha de :`
            : `Pour convertir ${expLabel || 'votre expertise'} en plus de clients, <span style="color:var(--accent);">${c}</span> doit :`}
    </p>

    <!-- 3 points sectoriels -->
    <div style="margin:10px 0 8px;display:flex;gap:12px;align-items:flex-start;">
        <div class="audit-icon">💼</div>
        <div>
            <h2 class="audit-point-title">${sc.p1t}</h2>
            <p class="audit-point-body">${sc.p1b}</p>
        </div>
    </div>

    <div style="margin:8px 0;display:flex;gap:12px;align-items:flex-start;">
        <div class="audit-icon">📲</div>
        <div>
            <h2 class="audit-point-title">${sc.p2t}</h2>
            <p class="audit-point-body">${sc.p2b}</p>
        </div>
    </div>

    <div style="margin:8px 0;display:flex;gap:12px;align-items:flex-start;">
        <div class="audit-icon">🔍</div>
        <div>
            <h2 class="audit-point-title">${sc.p3t}</h2>
            <p class="audit-point-body">${sc.p3b}</p>
        </div>
    </div>

    <!-- Actions prioritaires -->
    <div class="audit-box" style="margin-top:14px;">
        <p style="font-size:0.82rem;font-weight:800;margin:0 0 6px;">
            ${isCa ? `🎯 Actions prioritaires pour ${c} :` : `🎯 Actions prioritaires pour ${c} :`}
        </p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 20px;">
            ${opsItems}
        </div>
    </div>

    <!-- Chiffres clés — faits, pas promesses -->
    <div class="audit-box-accent" style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div>
            <p style="font-size:0.82rem;font-weight:800;margin:0 0 6px;">
                📊 ${isCa ? 'Comportement des clients :' : 'Comportement des clients :'}
            </p>
            <ul style="list-style:none;padding:0;margin:0;">
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? '85% cerquen en línia abans de contactar' : '85% cherchent en ligne avant de contacter'}</li>
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? '70% de les cerques es fan en mòbil' : '70% des recherches se font sur mobile'}</li>
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? '90% llegeixen ressenyes abans de triar' : '90% lisent les avis avant de choisir'}</li>
            </ul>
        </div>
        <div>
            <p style="font-size:0.82rem;font-weight:800;margin:0 0 6px;">
                ⚡ ${isCa ? 'Ràpid a implementar :' : 'Rapide à mettre en place :'}
            </p>
            <ul style="list-style:none;padding:0;margin:0;">
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? 'Resultats mesurables en 30-60 dies' : 'Résultats mesurables en 30-60 jours'}</li>
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? 'Inversió recuperable a mig termini' : 'Investissement récupérable à moyen terme'}</li>
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? 'Sense interrupcions de l\'activitat' : 'Sans interruption de votre activité'}</li>
            </ul>
        </div>
    </div>

    ${footerHTML()}
</div>

<!-- ══════════════════════════ PAGE 2 ══════════════════════════ -->
<div class="pdf-page">
    ${logoTopHTML}

    <h2 style="font-size:1.1rem;font-weight:900;margin:0 0 10px;text-align:center;">
        ${isCa ? `${c} — diagnòstic del lloc web actual :` : `${c} — diagnostic du site web actuel :`}
    </h2>

    ${problemsBlock}

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0;">
        <!-- Ce qui est en jeu -->
        <div class="audit-box">
            <p style="font-size:0.82rem;font-weight:800;margin:0 0 8px;">
                💡 ${isCa ? 'Ce que vous perdez sans site optimisé :' : 'Ce que vous perdez sans site optimisé :'}
            </p>
            <p style="font-size:0.76rem;line-height:1.5;margin:0;">
                ${isCa
                    ? `Cada dia sense site optimitzat, visitants que podrien contactar-vos van als vostres competidors. La majoria d'empreses ${data.industry} de ${loc} no han optimitzat la seva presència — qui ho faci primer tindrà un avantatge significatiu.`
                    : `Chaque jour sans site optimisé, des visiteurs qui auraient pu vous contacter vont chez vos concurrents. La plupart des entreprises de ${data.industry} à ${loc} n'ont pas encore optimisé leur présence — celui qui le fait en premier prend une avance significative.`}
            </p>
        </div>
        <!-- Valeur unique -->
        <div class="audit-box">
            <p style="font-size:0.82rem;font-weight:800;margin:0 0 8px;">
                🏆 ${isCa ? `Ce qui distingue ${c} :` : `Ce qui distingue ${c} :`}
            </p>
            <p style="font-size:0.76rem;line-height:1.5;margin:0;">
                ${uv}${expLabel ? (isCa ? ` — ${expLabel} qui méritent d'être mis en avant.` : ` — ${expLabel} qui méritent d'être mis en avant.`) : '.'}
                ${isCa ? `Ces atouts sont sous-exploités en ligne.` : `Ces atouts sont sous-exploités en ligne.`}
            </p>
        </div>
    </div>

    <!-- Solutions -->
    <h2 style="font-size:0.95rem;font-weight:900;margin:12px 0 8px;">
        ${isCa ? 'Solutions proposées :' : 'Solutions proposées :'}
    </h2>
    <div style="columns:2;gap:16px;margin-bottom:10px;">
        <ul style="list-style:none;padding:0;">${solutionsHTML}</ul>
    </div>

    <!-- Timeline sobre, sans promesses chiffrées -->
    <div class="audit-box" style="margin-top:10px;">
        <p style="font-size:0.82rem;font-weight:800;margin:0 0 8px;text-align:center;">
            🚀 ${isCa ? 'Étapes de mise en œuvre' : 'Étapes de mise en œuvre'}
        </p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
            <div style="font-size:0.74rem;padding:5px 0;border-bottom:1px solid #eee;">
                <strong>${isCa ? 'Semaine 1-2 :' : 'Semaine 1-2 :'}</strong>
                ${isCa ? 'Audit complet + stratégie' : 'Audit complet + stratégie'}
            </div>
            <div style="font-size:0.74rem;padding:5px 0;border-bottom:1px solid #eee;">
                <strong>${isCa ? 'Semaine 3-4 :' : 'Semaine 3-4 :'}</strong>
                ${isCa ? 'Mise en production' : 'Mise en production'}
            </div>
            <div style="font-size:0.74rem;padding:5px 0;">
                <strong>${isCa ? 'Mois 2 :' : 'Mois 2 :'}</strong>
                ${isCa ? 'Suivi & optimisations' : 'Suivi & optimisations'}
            </div>
            <div style="font-size:0.74rem;padding:5px 0;">
                <strong>${isCa ? 'Mois 3+ :' : 'Mois 3+ :'}</strong>
                ${isCa ? 'Analyse des résultats' : 'Analyse des résultats'}
            </div>
        </div>
    </div>

    <!-- CTA sobre -->
    <div class="audit-cta" style="margin-top:10px;">
        <p style="font-size:1rem;font-weight:800;margin:0 0 4px;">
            ${isCa ? 'Parlons de votre projet' : 'Parlons de votre projet'}
        </p>
        <p style="font-size:0.82rem;margin:0 0 4px;opacity:0.9;">
            ${isCa ? '15 minutes pour faire le point ensemble, sans engagement.' : '15 minutes pour faire le point ensemble, sans engagement.'}
        </p>
        <p style="font-size:0.78rem;font-weight:700;margin:0;opacity:0.85;">
            ${isCa ? 'contact@htmcagency.com &nbsp;·&nbsp; htmcagency.com' : 'contact@htmcagency.com &nbsp;·&nbsp; htmcagency.com'}
        </p>
    </div>

    ${footerHTML()}
</div>`;
}
