// TEMPLATES — Audit bilingue FR/CA, printer-friendly

// ─────────────────────────────────────────────────────────────────────────────
// Contenu spécifique par secteur
// ─────────────────────────────────────────────────────────────────────────────
function getSectorContent(industry, c, loc, expLabel, isCa) {
    const loc2 = loc ? (isCa ? `a ${loc}` : `à ${loc}`) : '';
    const exp  = expLabel ? (isCa ? `amb ${expLabel}` : `avec ${expLabel}`) : '';

    const sectors = {
        construction: {
            fr: {
                p1t: 'Valoriser vos chantiers en ligne',
                p1b: `Les maîtres d'ouvrage décident sur des preuves visuelles. Photos avant/après de vos chantiers, certifications (RGE, Qualibat), références clients — ${c} ${exp} ${loc2} doit transformer ses réalisations en arguments de vente immédiatement visibles dès la page d'accueil.`,
                p2t: 'Simplifier la demande de devis',
                p2b: `Un maître d'ouvrage compare 3 à 4 entreprises avant de choisir. Un formulaire en 3 champs max (type de travaux, surface, date souhaitée) et un numéro cliquable sur mobile suffisent à capturer ces demandes avant vos concurrents.`,
                p3t: 'Dominer les recherches locales',
                p3b: `Quand un particulier tape "construction ${loc || 'votre ville'}" ou "rénovation maison ${loc || 'votre région'}", votre site doit apparaître. Le SEO local et Google My Business bien configurés font toute la différence.`,
                ops: ['Galerie chantiers avant/après', 'Formulaire devis en 3 champs', 'Certifications RGE/Qualibat visibles', 'Fiche Google My Business optimisée'],
                avantApres: [
                    ['Chantiers visibles en ligne', '❌ Aucune galerie photo', '✅ Portfolio avant/après'],
                    ['Demande de devis', '❌ Formulaire absent ou complexe', '✅ 3 champs, visible sur mobile'],
                    ['Référencement local', '❌ Absent ou mal positionné', '✅ 1ère page Google locale'],
                    ['Certifications', '❌ Cachées dans les mentions', '✅ Mises en avant, rassurantes'],
                    ['Avis clients', '❌ Non collectés ni affichés', '✅ Intégrés, mis à jour'],
                ]
            },
            ca: {
                p1t: 'Valoritzar les vostres obres en línia',
                p1b: `Els propietaris decideixen amb proves visuals. Fotos d'obres abans/després, certificacions (RGE, Qualibat), referències de clients — ${c} ${exp} ${loc2} ha de transformar les seves realitzacions en arguments de venda visibles.`,
                p2t: 'Simplificar la sol·licitud de pressupost',
                p2b: `Un client compara 3 o 4 empreses abans de triar. Un formulari de 3 camps màxim (tipus d'obra, superfície, data) i un número clicable en mòbil n'hi ha prou per captar demandes.`,
                p3t: 'Dominar les cerques locals',
                p3b: `Quan algú cerca "construcció ${loc || 'la vostra ciutat'}" o "reforma casa ${loc || 'la vostra regió'}", el vostre lloc ha d'aparèixer. El SEO local i Google My Business ben configurats fan la diferència.`,
                ops: ['Galeria d\'obres abans/després', 'Formulari pressupost 3 camps', 'Certificacions visibles', 'Fitxa Google My Business'],
                avantApres: [
                    ['Obres visibles en línia', '❌ Sense galeria de fotos', '✅ Portafoli abans/després'],
                    ['Sol·licitud de pressupost', '❌ Formulari absent o complex', '✅ 3 camps, visible en mòbil'],
                    ['Posicionament local', '❌ Absent o mal posicionat', '✅ 1a pàgina Google local'],
                    ['Certificacions', '❌ Amagades a les mencions', '✅ Destacades, tranquil·litzadores'],
                    ['Ressenyes de clients', '❌ No recollides ni mostrades', '✅ Integrades i actualitzades'],
                ]
            }
        },
        plomberie: {
            fr: {
                p1t: 'Capter les urgences en premier',
                p1b: `En situation d'urgence (fuite, canalisation bouchée), le client appelle le premier résultat Google. ${c} ${loc2} doit afficher en 2 secondes : disponibilité 24h/7j, zone d'intervention, et bouton d'appel direct — surtout sur mobile.`,
                p2t: 'Convertir les visites en appels directs',
                p2b: `Sur mobile, 80% des visiteurs veulent appeler directement. Un numéro cliquable en haut de page, un badge "Intervention rapide" et une présentation claire de votre zone d'intervention suffisent à faire la différence.`,
                p3t: 'Bâtir votre réputation locale',
                p3b: `Avis Google, certifications (RGE, Qualigaz), photos d'interventions — les preuves de sérieux sont décisives. Un client en urgence n'a pas le temps de douter, il doit avoir confiance immédiatement.`,
                ops: ['Numéro cliquable en évidence', 'Badge disponibilité 24h/7j', 'Avis Google mis en avant', 'Zones d\'intervention listées'],
                avantApres: [
                    ['Numéro de téléphone', '❌ Difficile à trouver', '✅ Cliquable, en haut de page'],
                    ['Urgences 24h/7j', '❌ Non mentionné', '✅ Badge visible immédiatement'],
                    ['Zone d\'intervention', '❌ Absente', '✅ Carte et liste des secteurs'],
                    ['Avis clients', '❌ Non affichés', '✅ Google Reviews intégrées'],
                    ['Référencement local', '❌ Peu visible', '✅ 1ère page Google locale'],
                ]
            },
            ca: {
                p1t: 'Captar les urgències primer',
                p1b: `En cas d'urgència, el client truca al primer resultat de Google. ${c} ${loc2} ha de mostrar en 2 segons: disponibilitat 24h/7d, zona d'intervenció i botó de trucada directa.`,
                p2t: 'Convertir visites en trucades',
                p2b: `En mòbil, el 80% dels visitants vol trucar directament. Un número clicable a la part superior i un indicador "Intervenció ràpida" fan la diferència.`,
                p3t: 'Construir la vostra reputació local',
                p3b: `Ressenyes de Google, certificacions, fotos d'intervencions — les proves de serietat són decisives. Un client en urgència ha de confiar immediatament.`,
                ops: ['Número clicable en evidència', 'Disponibilitat 24h/7d', 'Ressenyes Google destacades', 'Zones d\'intervenció'],
                avantApres: [
                    ['Número de telèfon', '❌ Difícil de trobar', '✅ Clicable, a la part superior'],
                    ['Urgències 24h/7d', '❌ No mencionat', '✅ Indicador visible'],
                    ['Zona d\'intervenció', '❌ Absent', '✅ Mapa i llista de sectors'],
                    ['Ressenyes de clients', '❌ No mostrades', '✅ Google Reviews integrades'],
                    ['Posicionament local', '❌ Poc visible', '✅ 1a pàgina Google local'],
                ]
            }
        },
        electricite: {
            fr: {
                p1t: 'Mettre vos certifications en avant',
                p1b: `Qualibat, RGE, habilitations électriques — ces certifications rassurent et qualifient ${c} auprès des particuliers comme des professionnels. Elles doivent être visibles dès la page d'accueil, pas cachées dans les mentions légales.`,
                p2t: 'Capter les marchés porteurs',
                p2b: `Les recherches pour "installation panneaux solaires ${loc || 'votre région'}" ou "mise aux normes électriques" explosent. ${c} doit avoir des pages dédiées par service pour capter ces demandes à forte valeur.`,
                p3t: 'Proposer deux parcours clairs',
                p3b: `Dépannage d'urgence ou projet planifié — les besoins sont différents. Votre site doit proposer deux chemins clairs : "Urgence" (numéro direct) et "Projet" (formulaire de devis détaillé).`,
                ops: ['Page dédiée photovoltaïque', 'Certifications en évidence', 'Double parcours urgence/projet', 'Devis en ligne simplifié'],
                avantApres: [
                    ['Certifications affichées', '❌ Cachées ou absentes', '✅ Visibles en page d\'accueil'],
                    ['Photovoltaïque', '❌ Pas de page dédiée', '✅ Page et formulaire spécifique'],
                    ['Urgences électriques', '❌ Non mis en avant', '✅ Bouton appel direct visible'],
                    ['Devis en ligne', '❌ Absent ou complexe', '✅ Formulaire par type de projet'],
                    ['Référencement local', '❌ Peu visible', '✅ 1ère page Google locale'],
                ]
            },
            ca: {
                p1t: 'Destacar les vostres certificacions',
                p1b: `Qualibat, RGE, habilitacions elèctriques — tranquil·litzen ${c} davant els clients. Han de ser visibles des de la pàgina principal.`,
                p2t: 'Captar els mercats de major creixement',
                p2b: `Les cerques de "instal·lació plaques solars ${loc || 'la vostra regió'}" creixen molt. ${c} ha de tenir pàgines dedicades per captar aquestes demandes d'alt valor.`,
                p3t: 'Proposar dos camins clars',
                p3b: `Avaria urgent o projecte planificat — el lloc ha de proposar dos camins: "Urgència" (número directe) i "Projecte" (formulari de pressupost detallat).`,
                ops: ['Pàgina fotovoltaica dedicada', 'Certificacions en evidència', 'Doble camí urgència/projecte', 'Pressupost en línia'],
                avantApres: [
                    ['Certificacions mostrades', '❌ Amagades o absents', '✅ Visibles a la pàgina principal'],
                    ['Fotovoltaic', '❌ Sense pàgina dedicada', '✅ Pàgina i formulari específic'],
                    ['Urgències', '❌ No destacades', '✅ Botó trucada directa'],
                    ['Pressupost en línia', '❌ Absent o complex', '✅ Formulari per tipus de projecte'],
                    ['Posicionament local', '❌ Poc visible', '✅ 1a pàgina Google local'],
                ]
            }
        },
        immobilier: {
            fr: {
                p1t: 'Convaincre les vendeurs de vous choisir',
                p1b: `Un propriétaire qui veut vendre compare les agences en ligne avant même de prendre rendez-vous. ${c} ${loc2} doit afficher son nombre de ventes réussites, ses délais moyens de vente et des témoignages clients pour emporter le mandat.`,
                p2t: 'Attirer des acheteurs qualifiés',
                p2b: `Votre portefeuille de biens doit être visible, filtrable et à jour. Des photos professionnelles, des descriptions précises et un formulaire de contact par bien — c'est le minimum pour convertir un visiteur en prospect sérieux.`,
                p3t: 'Générer des leads vendeurs via l\'estimation',
                p3b: `L'outil d'estimation en ligne est le meilleur générateur de leads pour l'immobilier. En échange d'une estimation gratuite, les propriétaires vous laissent leurs coordonnées — un flux régulier de contacts qualifiés.`,
                ops: ['Outil d\'estimation en ligne', 'Portefeuille filtrable', 'Témoignages vendeurs/acheteurs', 'Page agent avec résultats'],
                avantApres: [
                    ['Estimation en ligne', '❌ Absente', '✅ Formulaire d\'estimation gratuit'],
                    ['Portefeuille de biens', '❌ Non filtrable', '✅ Recherche avancée + photos pro'],
                    ['Témoignages clients', '❌ Non affichés', '✅ Vendeurs et acheteurs satisfaits'],
                    ['Stats de vente', '❌ Cachées', '✅ Délais et prix mis en avant'],
                    ['Mobile', '❌ Non adapté', '✅ Navigation fluide sur smartphone'],
                ]
            },
            ca: {
                p1t: 'Convèncer els venedors de triar-vos',
                p1b: `Un propietari que vol vendre compara les agències en línia. ${c} ${loc2} ha de mostrar vendes reeixides, terminis de venda i testimonis per guanyar el mandat.`,
                p2t: 'Atreure compradors qualificats',
                p2b: `La cartera de béns ha de ser visible, filtrable i actualitzada. Fotos professionals i formulari de contacte per bé — el mínim per convertir un visitant en prospecte.`,
                p3t: 'Generar contactes venedors via estimació',
                p3b: `L'eina d'estimació en línia és el millor generador de leads per a immobiliàries. A canvi d'una estimació gratuïta, els propietaris us deixaran les seves dades.`,
                ops: ['Eina d\'estimació en línia', 'Cartera filtrable', 'Testimonis venedors/compradors', 'Pàgina agent amb resultats'],
                avantApres: [
                    ['Estimació en línia', '❌ Absent', '✅ Formulari d\'estimació gratuït'],
                    ['Cartera de béns', '❌ No filtrable', '✅ Cerca avançada + fotos pro'],
                    ['Testimonis de clients', '❌ No mostrats', '✅ Venedors i compradors satisfets'],
                    ['Estadístiques de venda', '❌ Amagades', '✅ Terminis i preus destacats'],
                    ['Mòbil', '❌ No adaptat', '✅ Navegació fluida en smartphone'],
                ]
            }
        },
        menuiserie: {
            fr: {
                p1t: 'Exposer votre savoir-faire sur mesure',
                p1b: `Le sur-mesure se vend par le visuel. ${c} ${exp} ${loc2} doit présenter ses réalisations en galerie : fenêtres, portes, cuisines, escaliers — avec photos haute qualité et descriptif des matériaux. Chaque photo est un argument commercial.`,
                p2t: 'Attirer les projets à forte valeur',
                p2b: `Les projets de rénovation complète ou d'agencement représentent votre marge la plus élevée. Des pages dédiées par type de projet (cuisine, salle de bain, dressing) attirent les clients avec un budget conséquent.`,
                p3t: 'Lever les freins à la prise de contact',
                p3b: `"Combien de temps ça prend ? Comment ça se passe ?" Une page "Comment ça marche" (visite, devis, fabrication, pose) lève les appréhensions et augmente les prises de contact de façon significative.`,
                ops: ['Galerie par catégorie de réalisation', 'Pages par type de projet', 'Page "Comment ça marche"', 'Formulaire devis avec visuel'],
                avantApres: [
                    ['Galerie réalisations', '❌ Absente ou peu valorisée', '✅ Photos HD par catégorie'],
                    ['Pages par service', '❌ Une seule page générique', '✅ Une page par type de projet'],
                    ['Process client', '❌ Non expliqué', '✅ Étapes claires rassurantes'],
                    ['Formulaire devis', '❌ Formulaire générique', '✅ Adapté (type bois, surface...)'],
                    ['Référencement local', '❌ Peu visible', '✅ 1ère page Google locale'],
                ]
            },
            ca: {
                p1t: 'Exposar el vostre saber fer a mida',
                p1b: `El fet a mida es ven pel visual. ${c} ${exp} ${loc2} ha de presentar les seves realitzacions: finestres, portes, cuines, escales — amb fotos d'alta qualitat. Cada foto és un argument comercial.`,
                p2t: 'Atreure projectes d\'alt valor',
                p2b: `Els projectes de renovació completa representen el vostre marge més alt. Pàgines dedicades per tipus de projecte atrauen clients amb pressupost important.`,
                p3t: 'Eliminar les barreres al contacte',
                p3b: `"Quant temps tarda? Com funciona?" Una pàgina "Com funciona" (visita, pressupost, fabricació, muntatge) elimina les reticències i augmenta les preses de contacte.`,
                ops: ['Galeria per categoria', 'Pàgines per tipus de projecte', 'Pàgina "Com funciona"', 'Formulari pressupost visual'],
                avantApres: [
                    ['Galeria realitzacions', '❌ Absent o poc valorat', '✅ Fotos HD per categoria'],
                    ['Pàgines per servei', '❌ Una pàgina genèrica', '✅ Una pàgina per tipus'],
                    ['Procés client', '❌ No explicat', '✅ Etapes clares i tranquil·litzadores'],
                    ['Formulari pressupost', '❌ Formulari genèric', '✅ Adaptat (tipus fusta, superfície...)'],
                    ['Posicionament local', '❌ Poc visible', '✅ 1a pàgina Google local'],
                ]
            }
        },
        peinture: {
            fr: {
                p1t: 'Montrer la qualité de vos finitions',
                p1b: `La peinture, ça se voit. ${c} ${loc2} doit présenter des photos avant/après de haute qualité de ses chantiers : intérieur, extérieur, ravalement, décoratif. Une galerie bien présentée est votre meilleur argument commercial.`,
                p2t: 'Cibler le ravalement et les copropriétés',
                p2b: `Le ravalement de façade et les contrats avec des syndics représentent des chantiers récurrents et à forte valeur. Votre site doit adresser clairement ces deux marchés avec une page dédiée et un formulaire adapté.`,
                p3t: 'Simplifier les demandes de devis',
                p3b: `Un formulaire qui demande le type de surface (intérieur/extérieur), la superficie estimée et le type de prestation permet de recevoir des demandes qualifiées et de préparer un premier chiffrage en amont.`,
                ops: ['Galerie avant/après haute qualité', 'Page ravalement & copropriétés', 'Formulaire devis par surface', 'Avis clients avec photos chantier'],
                avantApres: [
                    ['Galerie de chantiers', '❌ Absente ou peu qualitative', '✅ Photos HD avant/après'],
                    ['Ravalement & syndics', '❌ Non adressés', '✅ Page et formulaire dédiés'],
                    ['Formulaire devis', '❌ Trop générique', '✅ Adapté (type surface, m²)'],
                    ['Avis clients', '❌ Non affichés', '✅ Avec photos de chantier'],
                    ['Mobile', '❌ Non adapté', '✅ Navigation fluide'],
                ]
            },
            ca: {
                p1t: 'Mostrar la qualitat dels vostres acabats',
                p1b: `La pintura es veu. ${c} ${loc2} ha de presentar fotos d'alta qualitat de les seves obres: interior, exterior, façanes, decoratiu. Una galeria ben presentada és el vostre millor argument.`,
                p2t: 'Orientar-se en façanes i comunitats',
                p2b: `La restauració de façanes i els contractes amb comunitats representen obres recurrents d'alt valor. El lloc ha d'adreçar clarament aquests dos mercats.`,
                p3t: 'Simplificar les sol·licituds de pressupost',
                p3b: `Un formulari que demani el tipus de superfície, els metres quadrats i el tipus de prestació permet rebre sol·licituds qualificades.`,
                ops: ['Galeria abans/després HD', 'Pàgina façanes i comunitats', 'Formulari per superfície', 'Ressenyes amb fotos d\'obra'],
                avantApres: [
                    ['Galeria d\'obres', '❌ Absent o poc qualitatiu', '✅ Fotos HD abans/després'],
                    ['Façanes i comunitats', '❌ No adreçats', '✅ Pàgina i formulari dedicats'],
                    ['Formulari pressupost', '❌ Massa genèric', '✅ Adaptat (tipus superfície, m²)'],
                    ['Ressenyes', '❌ No mostrades', '✅ Amb fotos d\'obra'],
                    ['Mòbil', '❌ No adaptat', '✅ Navegació fluida'],
                ]
            }
        },
        architecture: {
            fr: {
                p1t: 'Mettre votre portfolio en valeur',
                p1b: `Un client qui envisage un projet architectural cherche un architecte dont il aime déjà l'œuvre. ${c} ${loc2} doit présenter ses projets réalisés avec photos, descriptifs et contexte — c'est votre meilleur argument commercial et votre signature.`,
                p2t: 'Attirer des clients à fort budget',
                p2b: `Les clients ambitieux choisissent leur architecte sur sa réputation et son univers. Votre site doit refléter le niveau de qualité de vos projets, avec une présentation soignée qui donne envie de vous rencontrer.`,
                p3t: 'Expliquer votre démarche',
                p3b: `"Comment se passe une mission d'architecture ?" Une page qui explique votre méthode (brief, esquisse, permis, suivi de chantier) lève les appréhensions et renforce la confiance avant même le premier rendez-vous.`,
                ops: ['Portfolio de projets réalisés', 'Page démarche & philosophie', 'Formulaire projet (type, budget)', 'Mentions presse & distinctions'],
                avantApres: [
                    ['Portfolio en ligne', '❌ Absent ou peu valorisé', '✅ Projets présentés avec soin'],
                    ['Démarche expliquée', '❌ Non présentée', '✅ Page étapes et philosophie'],
                    ['Formulaire projet', '❌ Générique', '✅ Adapté (type, surface, budget)'],
                    ['Distinctions & presse', '❌ Non mentionnées', '✅ Mises en avant'],
                    ['Référencement local', '❌ Peu visible', '✅ 1ère page Google locale'],
                ]
            },
            ca: {
                p1t: 'Valoritzar el vostre portafoli',
                p1b: `Un client que vol un projecte arquitectònic busca un arquitecte la obra del qual li agradi. ${c} ${loc2} ha de presentar els seus projectes amb fotos, descripcius i context.`,
                p2t: 'Atreure clients amb alt pressupost',
                p2b: `Els clients ambiciosos trien el seu arquitecte per la seva reputació. El lloc ha de reflectir la qualitat dels projectes amb una presentació acurada.`,
                p3t: 'Explicar el vostre procés',
                p3b: `"Com es desenvolupa una missió d'arquitectura?" Una pàgina que explica el vostre mètode reforça la confiança abans de la primera cita.`,
                ops: ['Portafoli de projectes', 'Pàgina filosofia i mètode', 'Formulari projecte (tipus, pressupost)', 'Mencions i distincions'],
                avantApres: [
                    ['Portafoli en línia', '❌ Absent o poc valorat', '✅ Projectes presentats amb cura'],
                    ['Procés explicat', '❌ No presentat', '✅ Pàgina etapes i filosofia'],
                    ['Formulari projecte', '❌ Genèric', '✅ Adaptat (tipus, superfície, pressupost)'],
                    ['Distincions i premsa', '❌ No mencionades', '✅ Destacades'],
                    ['Posicionament local', '❌ Poc visible', '✅ 1a pàgina Google local'],
                ]
            }
        },
        autre: {
            fr: {
                p1t: 'Afficher clairement votre expertise',
                p1b: `${c} ${exp} ${loc2} doit se différencier dès la page d'accueil. Votre spécialisation, vos références, vos certifications — tout ce qui justifie de choisir ${c} doit être visible immédiatement, avant que le visiteur aille voir un concurrent.`,
                p2t: 'Simplifier la prise de contact',
                p2b: `Chaque friction entre un visiteur et son premier contact coûte des clients. Formulaire court, numéro cliquable, messagerie rapide — la simplicité crée la confiance et augmente le nombre de demandes entrantes.`,
                p3t: 'Être trouvé sur Google localement',
                p3b: `85% des clients recherchent en ligne avant de contacter un prestataire. Sans présence optimisée, ${c} rate la majorité de ces opportunités — notamment les recherches mobiles de proximité qui représentent le volume le plus important.`,
                ops: ['Page d\'accueil orientée bénéfices client', 'Formulaire de contact simplifié', 'SEO local et Google My Business', 'Avis clients mis en avant'],
                avantApres: [
                    ['Visibilité Google', '❌ Peu ou pas visible', '✅ 1ère page résultats locaux'],
                    ['Prise de contact', '❌ Formulaire complexe', '✅ 3 champs, numéro cliquable'],
                    ['Présentation services', '❌ Trop technique', '✅ Orientée bénéfices client'],
                    ['Avis clients', '❌ Non affichés', '✅ Google Reviews intégrées'],
                    ['Mobile', '❌ Non adapté', '✅ 100% responsive'],
                ]
            },
            ca: {
                p1t: 'Mostrar clarament la vostra experiència',
                p1b: `${c} ${exp} ${loc2} s'ha de diferenciar des de la pàgina principal. La vostra especialització, referències i certificacions han de ser visibles immediatament.`,
                p2t: 'Simplificar el contacte',
                p2b: `Cada fricció entre un visitant i el primer contacte costa clients. Formulari curt, número clicable — la simplicitat crea confiança.`,
                p3t: 'Ser trobat a Google localment',
                p3b: `El 85% dels clients cerquen en línia. Sense presència optimitzada, ${c} perd la majoria d'oportunitats — especialment les cerques mòbils de proximitat.`,
                ops: ['Pàgina principal orientada a beneficis', 'Formulari de contacte simplificat', 'SEO local i Google My Business', 'Ressenyes de clients'],
                avantApres: [
                    ['Visibilitat Google', '❌ Poc o gens visible', '✅ 1a pàgina resultats locals'],
                    ['Presa de contacte', '❌ Formulari complex', '✅ 3 camps, número clicable'],
                    ['Presentació serveis', '❌ Massa tècnica', '✅ Orientada beneficis client'],
                    ['Ressenyes', '❌ No mostrades', '✅ Google Reviews integrades'],
                    ['Mòbil', '❌ No adaptat', '✅ 100% responsive'],
                ]
            }
        }
    };

    const s = sectors[industry] || sectors['autre'];
    return isCa ? s.ca : s.fr;
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer — fond blanc, sobre
// ─────────────────────────────────────────────────────────────────────────────
function footerHTML() {
    return `
    <div class="pdf-footer">
        <div class="pdf-footer-brand">
            <span class="pdf-footer-name">HTMC AGENCY</span>
            <span class="pdf-footer-tagline">Agence Digitale</span>
        </div>
        <div class="pdf-footer-contacts">
            <span>contact@htmcagency.com &nbsp;·&nbsp; htmcagency.com</span>
            <span>+33 7 69 16 56 34</span>
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

    const uv = data.uniqueValue || (isCa ? `Experiència i professionalisme reconeguts` : `Expertise et professionnalisme reconnus`);

    const logoHeaderHTML = data.logo ? `<img src="${data.logo}" class="pdf-header-logo">` : '';

    // Date courante
    const dateStr = new Date().toLocaleDateString(isCa ? 'ca-ES' : 'fr-FR', { month: 'long', year: 'numeric' });

    // Contenu sectoriel
    const sc = getSectorContent(data.industry, c, loc, expLabel, isCa);

    // Problèmes & solutions
    const problemsHTML  = data.problems.map(p => `<li style="margin:5px 0;font-size:0.79rem;line-height:1.4;">❌ ${p}</li>`).join('');
    const solutionsHTML = data.solutions.map(s => `<li style="margin:5px 0;font-size:0.79rem;line-height:1.4;">✅ ${s}</li>`).join('');

    // Tableau avant/après (5 lignes fixes par secteur)
    const tableRows = sc.avantApres.map((row, i) => `
        <div style="display:contents;">
            <div style="padding:7px 10px;font-size:0.75rem;font-weight:600;background:${i%2===0?'#fafafa':'white'};border-bottom:1px solid #eee;">${row[0]}</div>
            <div style="padding:7px 10px;font-size:0.74rem;background:${i%2===0?'#fafafa':'white'};border-bottom:1px solid #eee;border-left:1px solid #eee;color:#c0392b;">${row[1]}</div>
            <div style="padding:7px 10px;font-size:0.74rem;background:${i%2===0?'#fafafa':'white'};border-bottom:1px solid #eee;border-left:1px solid #eee;color:#27ae60;">${row[2]}</div>
        </div>`).join('');

    // Block screenshot ou problèmes
    const problemsBlock = data.screenshot ? `
        <div class="audit-box" style="margin:0 0 18px;">
            <div style="display:grid;grid-template-columns:210px 1fr;gap:16px;align-items:start;">
                <img src="${data.screenshot}" style="width:100%;border:1px solid #ddd;border-radius:6px;">
                <div>
                    <p style="font-size:0.8rem;font-weight:700;margin:0 0 8px;">${isCa ? 'Problemes identificats :' : 'Problèmes identifiés :'}</p>
                    <ul style="list-style:none;padding:0;">${problemsHTML}</ul>
                </div>
            </div>
        </div>` : (data.problems.length > 0 ? `
        <div class="audit-box" style="margin:0 0 18px;">
            <p style="font-size:0.8rem;font-weight:700;margin:0 0 8px;">${isCa ? 'Problemes identificats :' : 'Problèmes identifiés :'}</p>
            <ul style="list-style:none;padding:0;columns:2;gap:10px;">${problemsHTML}</ul>
        </div>` : '');

    return `
<!-- ══════════════════════════ PAGE 1 ══════════════════════════ -->
<div class="pdf-page">

    <!-- EN-TÊTE LIGHT — plus de noir massif -->
    <div class="pdf-header">
        <div class="pdf-header-side">AUDIT</div>
        ${logoHeaderHTML}
        <div style="flex:1;">
            <div style="font-size:0.7rem;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
                ${isCa ? 'Auditoria Digital' : 'Audit Digital'} &nbsp;·&nbsp; ${data.industry} &nbsp;·&nbsp; ${loc} &nbsp;·&nbsp; ${dateStr}
            </div>
            <h1 class="pdf-title">${c}</h1>
            <p style="font-size:0.82rem;color:#555;margin:4px 0 0;font-style:italic;line-height:1.4;">
                ${data.years
                    ? (isCa ? `${data.years} anys d'experiència — el vostre lloc web ho reflecteix?` : `${data.years} ans d'expérience — votre site web le reflète-t-il ?`)
                    : (isCa ? `La vostra empresa mereix un lloc web a la seva alçada.` : `Votre entreprise mérite un site web à la hauteur.`)}
            </p>
        </div>
        <img src="logohtmc.png" class="pdf-header-htmc">
    </div>

    <!-- Intro -->
    <p style="text-align:center;font-size:0.92rem;font-weight:800;margin:0 0 20px;line-height:1.4;color:#222;">
        ${isCa
            ? `Per convertir ${expLabel || 'la vostra experiència'} en més clients, <span style="color:var(--accent);">${c}</span> ha de :`
            : `Pour convertir ${expLabel || 'votre expertise'} en plus de clients, <span style="color:var(--accent);">${c}</span> doit :`}
    </p>

    <!-- 3 points sectoriels -->
    <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:18px;">
        <div class="audit-icon">💼</div>
        <div>
            <h2 class="audit-point-title">${sc.p1t}</h2>
            <p class="audit-point-body">${sc.p1b}</p>
        </div>
    </div>

    <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:18px;">
        <div class="audit-icon">📲</div>
        <div>
            <h2 class="audit-point-title">${sc.p2t}</h2>
            <p class="audit-point-body">${sc.p2b}</p>
        </div>
    </div>

    <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:22px;">
        <div class="audit-icon">🔍</div>
        <div>
            <h2 class="audit-point-title">${sc.p3t}</h2>
            <p class="audit-point-body">${sc.p3b}</p>
        </div>
    </div>

    <!-- Actions prioritaires + chiffres clés côte à côte -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px;">
        <div class="audit-box">
            <p style="font-size:0.82rem;font-weight:800;margin:0 0 10px;">🎯 ${isCa ? `Accions prioritàries per a ${c} :` : `Actions prioritaires pour ${c} :`}</p>
            ${sc.ops.map(op => `<div style="display:flex;gap:8px;font-size:0.77rem;padding:5px 0;border-bottom:1px solid #eee;"><span style="color:var(--accent);font-weight:800;">→</span>${op}</div>`).join('')}
        </div>
        <div class="audit-box-accent">
            <p style="font-size:0.82rem;font-weight:800;margin:0 0 10px;">📊 ${isCa ? 'El que diuen els estudis :' : 'Ce que disent les études :'}</p>
            <ul style="list-style:none;padding:0;margin:0;">
                <li style="font-size:0.76rem;margin:6px 0;">✓ ${isCa ? '85% cerquen en línia abans de contactar' : '85% cherchent en ligne avant de contacter'}</li>
                <li style="font-size:0.76rem;margin:6px 0;">✓ ${isCa ? '70% de les cerques es fan en mòbil' : '70% des recherches se font sur mobile'}</li>
                <li style="font-size:0.76rem;margin:6px 0;">✓ ${isCa ? '90% llegeixen ressenyes abans de triar' : '90% lisent les avis avant de choisir'}</li>
                <li style="font-size:0.76rem;margin:6px 0;">✓ ${isCa ? 'Lloc lent = 40% menys de visitants' : 'Site lent = 40% de visiteurs perdus'}</li>
            </ul>
        </div>
    </div>

    <!-- Valeur unique -->
    <div class="audit-box-accent" style="display:flex;align-items:flex-start;gap:12px;">
        <span style="font-size:1.3rem;">🏆</span>
        <div>
            <p style="font-size:0.82rem;font-weight:800;margin:0 0 4px;">${isCa ? `Ce qui distingue ${c} :` : `Ce qui distingue ${c} :`}</p>
            <p style="font-size:0.78rem;line-height:1.5;margin:0;color:#444;">${uv}${expLabel ? (isCa ? ` — ${expLabel} qui mériten ser més visibles en línia.` : ` — ${expLabel} qui méritent d'être plus visibles en ligne.`) : '.'}</p>
        </div>
    </div>

    ${footerHTML()}
</div>

<!-- ══════════════════════════ PAGE 2 ══════════════════════════ -->
<div class="pdf-page">

    <h2 style="font-size:1.05rem;font-weight:900;margin:0 0 14px;text-align:center;color:#1a1a1a;">
        ${isCa ? `${c} — diagnòstic i plan d'acció :` : `${c} — diagnostic et plan d'action :`}
    </h2>

    ${problemsBlock}

    <!-- Tableau avant / après — module ajouté -->
    <p style="font-size:0.85rem;font-weight:800;margin:0 0 8px;">
        📋 ${isCa ? 'Comparatif : situation actuelle vs optimisée' : 'Comparatif : situation actuelle vs optimisée'}
    </p>
    <div style="display:grid;grid-template-columns:1.4fr 1fr 1fr;border:1px solid #ddd;border-radius:6px;overflow:hidden;margin-bottom:18px;">
        <div style="padding:7px 10px;font-size:0.75rem;font-weight:700;background:#f0f0f0;border-bottom:1px solid #ddd;">${isCa ? 'Criteri' : 'Critère'}</div>
        <div style="padding:7px 10px;font-size:0.75rem;font-weight:700;background:#f0f0f0;border-bottom:1px solid #ddd;border-left:1px solid #ddd;">${isCa ? 'Situació actual' : 'Situation actuelle'}</div>
        <div style="padding:7px 10px;font-size:0.75rem;font-weight:700;background:#f0f0f0;border-bottom:1px solid #ddd;border-left:1px solid #ddd;">${isCa ? 'Après optimisation' : 'Après optimisation'}</div>
        ${tableRows}
    </div>

    <!-- Solutions proposées -->
    <p style="font-size:0.85rem;font-weight:800;margin:0 0 8px;">
        ${isCa ? 'Solutions proposées :' : 'Solutions proposées :'}
    </p>
    <div style="columns:2;gap:18px;margin-bottom:16px;">
        <ul style="list-style:none;padding:0;">${solutionsHTML}</ul>
    </div>

    <!-- Timeline sobre -->
    <div class="audit-box" style="margin-bottom:14px;">
        <p style="font-size:0.82rem;font-weight:800;margin:0 0 10px;text-align:center;">🚀 ${isCa ? 'Étapes de mise en œuvre' : 'Étapes de mise en œuvre'}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
            <div style="font-size:0.75rem;padding:5px 0;border-bottom:1px solid #eee;"><strong>${isCa ? 'Semaine 1-2 :' : 'Semaine 1-2 :'}</strong> ${isCa ? 'Audit complet + stratégie' : 'Audit complet + stratégie'}</div>
            <div style="font-size:0.75rem;padding:5px 0;border-bottom:1px solid #eee;"><strong>${isCa ? 'Semaine 3-4 :' : 'Semaine 3-4 :'}</strong> ${isCa ? 'Mise en production' : 'Mise en production'}</div>
            <div style="font-size:0.75rem;padding:5px 0;"><strong>${isCa ? 'Mois 2 :' : 'Mois 2 :'}</strong> ${isCa ? 'Suivi & ajustements' : 'Suivi & ajustements'}</div>
            <div style="font-size:0.75rem;padding:5px 0;"><strong>${isCa ? 'Mois 3+ :' : 'Mois 3+ :'}</strong> ${isCa ? 'Analyse des résultats' : 'Analyse des résultats'}</div>
        </div>
    </div>

    <!-- CTA sobre -->
    <div class="audit-cta">
        <p style="font-size:0.95rem;font-weight:800;margin:0 0 5px;">${isCa ? 'Parlons de votre projet' : 'Parlons de votre projet'}</p>
        <p style="font-size:0.8rem;margin:0 0 5px;color:#555;">${isCa ? '15 minutes pour faire le point ensemble, sans engagement.' : '15 minutes pour faire le point ensemble, sans engagement.'}</p>
        <p style="font-size:0.78rem;font-weight:700;margin:0;color:var(--accent);">contact@htmcagency.com &nbsp;·&nbsp; htmcagency.com</p>
    </div>

    ${footerHTML()}
</div>`;
}
