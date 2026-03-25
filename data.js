// DONNÉES: Problèmes et Solutions (Bilingue FR/CA)

const PROBLEMS = [
    { 
        value: { fr: "Site qui ne génère presque aucun lead ni devis", ca: "Lloc que gairebé no genera cap lead ni pressupost" },
        label: { fr: "📉 Pas de leads/devis", ca: "📉 Sense leads/pressupostos" }
    },
    { 
        value: { fr: "Taux de conversion très faible (visiteurs qui ne deviennent pas clients)", ca: "Taxa de conversió molt baixa (visitants que no es converteixen en clients)" },
        label: { fr: "💔 Conversion faible", ca: "💔 Conversió baixa" }
    },
    { 
        value: { fr: "Boutons d'appel à l'action (CTA) peu visibles ou absents", ca: "Botons de crida a l'acció (CTA) poc visibles o absents" },
        label: { fr: "🎯 CTA invisibles", ca: "🎯 CTAs invisibles" }
    },
    { 
        value: { fr: "Pas trouvable sur Google (SEO local faible)", ca: "No es pot trobar a Google (SEO local feble)" },
        label: { fr: "🔍 Invisible Google", ca: "🔍 Invisible a Google" }
    },
    { 
        value: { fr: "Pas de Google My Business ou mal optimisé", ca: "Sense Google My Business o mal optimitzat" },
        label: { fr: "📍 Pas de GMB", ca: "📍 Sense GMB" }
    },
    { 
        value: { fr: "Contenu centré sur l'entreprise, pas sur les besoins clients", ca: "Contingut centrat en l'empresa, no en les necessitats dels clients" },
        label: { fr: "📄 Pas client-centré", ca: "📄 No centrat en el client" }
    },
    { 
        value: { fr: "Pas de témoignages clients ni avis visibles", ca: "Sense testimonis de clients ni ressenyes visibles" },
        label: { fr: "⭐ Pas d'avis clients", ca: "⭐ Sense ressenyes" }
    },
    { 
        value: { fr: "Portfolio ou projets réalisés peu mis en valeur", ca: "Portafoli o projectes realitzats poc valorats" },
        label: { fr: "🖼️ Pas de portfolio", ca: "🖼️ Sense portafoli" }
    },
    { 
        value: { fr: "Design obsolète qui ne inspire pas confiance", ca: "Disseny obsolet que no inspira confiança" },
        label: { fr: "🕰️ Design vieillot", ca: "🕰️ Disseny vell" }
    },
    { 
        value: { fr: "Site non responsive (pas adapté mobile)", ca: "Lloc no responsiu (no adaptat a mòbil)" },
        label: { fr: "📱 Pas mobile", ca: "📱 No mòbil" }
    },
    { 
        value: { fr: "Formulaire de contact trop long ou complexe", ca: "Formulari de contacte massa llarg o complex" },
        label: { fr: "📝 Formulaire compliqué", ca: "📝 Formulari complicat" }
    },
    { 
        value: { fr: "Site lent à charger (perte de visiteurs)", ca: "Lloc lent a carregar (pèrdua de visitants)" },
        label: { fr: "🐌 Lenteur", ca: "🐌 Lentitud" }
    },
    { 
        value: { fr: "Manque de preuves sociales et crédibilité", ca: "Manca de proves socials i credibilitat" },
        label: { fr: "🏆 Pas de crédibilité", ca: "🏆 Sense credibilitat" }
    },
    { 
        value: { fr: "Pas de suivi des performances (analytics)", ca: "Sense seguiment del rendiment (analytics)" },
        label: { fr: "📊 Pas de tracking", ca: "📊 Sense seguiment" }
    }
];

const SOLUTIONS = [
    { 
        value: { fr: "Optimisation des CTA et parcours de conversion", ca: "Optimització dels CTAs i recorregut de conversió" },
        label: { fr: "🎯 CTA optimisés", ca: "🎯 CTAs optimitzats" }
    },
    { 
        value: { fr: "Formulaire de devis simplifié (3-4 champs max)", ca: "Formulari de pressupost simplificat (3-4 camps màx)" },
        label: { fr: "📝 Devis simplifié", ca: "📝 Pressupost simplificat" }
    },
    { 
        value: { fr: "SEO local + optimisation Google My Business", ca: "SEO local + optimització Google My Business" },
        label: { fr: "🔍 SEO local", ca: "🔍 SEO local" }
    },
    { 
        value: { fr: "Campagnes Google Ads ciblées pour générer des leads", ca: "Campanyes Google Ads orientades a generar leads" },
        label: { fr: "💰 Google Ads", ca: "💰 Google Ads" }
    },
    { 
        value: { fr: "Portfolio visuel avec projets avant/après", ca: "Portafoli visual amb projectes abans/després" },
        label: { fr: "📸 Portfolio", ca: "📸 Portafoli" }
    },
    { 
        value: { fr: "Système de témoignages et avis clients", ca: "Sistema de testimonis i ressenyes de clients" },
        label: { fr: "⭐ Avis clients", ca: "⭐ Ressenyes" }
    },
    { 
        value: { fr: "Refonte complète orientée conversion", ca: "Redisseny complet orientat a conversió" },
        label: { fr: "🎨 Refonte pro", ca: "🎨 Redisseny pro" }
    },
    { 
        value: { fr: "Chat en direct ou chatbot pour capturer leads", ca: "Xat en directe o chatbot per capturar leads" },
        label: { fr: "💬 Chat live", ca: "💬 Xat en directe" }
    },
    { 
        value: { fr: "Landing pages spécifiques par service", ca: "Landing pages específiques per servei" },
        label: { fr: "📄 Landing pages", ca: "📄 Landing pages" }
    },
    { 
        value: { fr: "Tracking et analytics pour optimiser conversions", ca: "Seguiment i analytics per optimitzar conversions" },
        label: { fr: "📊 Analytics", ca: "📊 Analytics" }
    },
    { 
        value: { fr: "Retargeting / Remarketing pour récupérer visiteurs", ca: "Retargeting / Remarketing per recuperar visitants" },
        label: { fr: "🔄 Retargeting", ca: "🔄 Retargeting" }
    },
    { 
        value: { fr: "Email marketing et automation pour nurturer leads", ca: "Email marketing i automatització per nodrir leads" },
        label: { fr: "📧 Email marketing", ca: "📧 Email marketing" }
    }
];

const INDUSTRY_TEMPLATES = {
    construction: {
        fr: {
            services: "Construction neuve, rénovation complète, agrandissement, gros œuvre",
            uniqueValue: "Entreprise établie avec expérience locale, équipe qualifiée",
            mainGoals: "Augmenter les devis de 40%, attirer projets importants"
        },
        ca: {
            services: "Construcció nova, reforma completa, ampliació, obra estructural",
            uniqueValue: "Empresa consolidada amb experiència local, equip qualificat",
            mainGoals: "Augmentar els pressupostos un 40%, atreure projectes importants"
        }
    },
    immobilier: {
        fr: {
            services: "Vente de biens, location, gestion locative, estimation",
            uniqueValue: "Connaissance approfondie du marché local, réseau étendu",
            mainGoals: "Générer plus de leads qualifiés, augmenter mandats exclusifs"
        },
        ca: {
            services: "Venda de béns, lloguer, gestió de lloguers, estimació",
            uniqueValue: "Coneixement profund del mercat local, xarxa extensa",
            mainGoals: "Generar més contactes qualificats, augmentar mandats exclusius"
        }
    },
    plomberie: {
        fr: {
            services: "Plomberie générale, installation sanitaire, dépannage d'urgence",
            uniqueValue: "Service d'urgence 24/7, intervention rapide",
            mainGoals: "Augmenter les appels d'urgence, développer la clientèle"
        },
        ca: {
            services: "Lampisteria general, instal·lació sanitària, reparació d'urgència",
            uniqueValue: "Servei d'urgència 24h/7d, intervenció ràpida",
            mainGoals: "Augmentar les trucades d'urgència, desenvolupar la clientela"
        }
    },
    electricite: {
        fr: {
            services: "Installation électrique, rénovation, mise aux normes, domotique",
            uniqueValue: "Certifications professionnelles, respect strict des normes",
            mainGoals: "Générer plus de devis, développer l'activité photovoltaïque"
        },
        ca: {
            services: "Instal·lació elèctrica, renovació, posada a normes, domòtica",
            uniqueValue: "Certificacions professionals, compliment estricte de les normes",
            mainGoals: "Generar més pressupostos, desenvolupar l'activitat fotovoltaica"
        }
    },
    menuiserie: {
        fr: {
            services: "Menuiserie sur mesure, fenêtres, portes, agencement intérieur",
            uniqueValue: "Fabrication artisanale locale, bois de qualité",
            mainGoals: "Valoriser le savoir-faire, attirer projets haut de gamme"
        },
        ca: {
            services: "Fusteria a mida, finestres, portes, ordenació interior",
            uniqueValue: "Fabricació artesanal local, fusta de qualitat",
            mainGoals: "Valoritzar el saber fer, atreure projectes d'alta gamma"
        }
    },
    peinture: {
        fr: {
            services: "Peinture intérieure et extérieure, ravalement de façade",
            uniqueValue: "Finitions soignées, techniques décoratives",
            mainGoals: "Augmenter les chantiers de ravalement, développer la décoration"
        },
        ca: {
            services: "Pintura interior i exterior, restauració de façanes",
            uniqueValue: "Acabats acurats, tècniques decoratives",
            mainGoals: "Augmentar les obres de restauració, desenvolupar la decoració"
        }
    },
    architecture: {
        fr: {
            services: "Conception architecturale, plans, maîtrise d'œuvre",
            uniqueValue: "Approche créative et personnalisée",
            mainGoals: "Attirer projets d'architecture contemporaine, valoriser portfolio"
        },
        ca: {
            services: "Disseny arquitectònic, plànols, direcció d'obra",
            uniqueValue: "Enfocament creatiu i personalitzat",
            mainGoals: "Atreure projectes d'arquitectura contemporània, valoritzar el portafoli"
        }
    },
    comptabilite: {
        fr: {
            services: "Comptabilité, bilan annuel, fiscalité, conseil en gestion, paie",
            uniqueValue: "Accompagnement personnalisé, disponibilité, conseil proactif",
            mainGoals: "Attirer de nouveaux clients TPE/PME, fidéliser par le digital"
        },
        ca: {
            services: "Comptabilitat, balanç anual, fiscalitat, assessoria en gestió, nòmines",
            uniqueValue: "Acompanyament personalitzat, disponibilitat, assessorament proactiu",
            mainGoals: "Atreure nous clients pimes/autònoms, fidelitzar pel digital"
        }
    },
    automobile: {
        fr: {
            services: "Vente de véhicules, reprise, financement, entretien, carrosserie",
            uniqueValue: "Stock varié, expertise technique, service après-vente réactif",
            mainGoals: "Générer plus de demandes d'essai et de devis, valoriser le stock en ligne"
        },
        ca: {
            services: "Venda de vehicles, bestreta, finançament, manteniment, carrosseria",
            uniqueValue: "Estoc variat, experiència tècnica, servei postvenda reactiu",
            mainGoals: "Generar més sol·licituds de prova i pressupost, valoritzar l'estoc en línia"
        }
    },
    sante: {
        fr: {
            services: "Consultations, soins, suivi patient, téléconsultation, prévention",
            uniqueValue: "Approche humaine, expertise médicale, prise en charge globale",
            mainGoals: "Faciliter la prise de rendez-vous, développer la patientèle"
        },
        ca: {
            services: "Consultes, cures, seguiment de pacients, teleconsulta, prevenció",
            uniqueValue: "Enfocament humà, experiència mèdica, atenció integral",
            mainGoals: "Facilitar la presa de cita, desenvolupar la clientela"
        }
    },
    alarme_securite: {
        fr: {
            services: "Installation alarme, vidéosurveillance, contrôle d'accès, télésurveillance, domotique sécurité",
            uniqueValue: "Expertise locale, certifications APSAD, intervention rapide, devis gratuit",
            mainGoals: "Générer plus de demandes de devis, capter les particuliers et professionnels locaux"
        },
        ca: {
            services: "Instal·lació d'alarma, videovigilància, control d'accés, televigilància, domòtica de seguretat",
            uniqueValue: "Experiència local, certificacions APSAD, intervenció ràpida, pressupost gratuït",
            mainGoals: "Generar més sol·licituds de pressupost, captar particulars i empreses locals"
        }
    },
    autre: {
        fr: {
            services: "Services professionnels adaptés au secteur",
            uniqueValue: "Expertise reconnue, qualité de service",
            mainGoals: "Développer la visibilité en ligne, générer plus de contacts"
        },
        ca: {
            services: "Serveis professionals adaptats al sector",
            uniqueValue: "Experiència reconeguda, qualitat de servei",
            mainGoals: "Desenvolupar la visibilitat en línia, generar més contactes"
        }
    }
};