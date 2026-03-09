// DONNÉES: Problèmes et Solutions

const PROBLEMS = [
    { value: "Site qui ne génère presque aucun lead ni devis", label: "📉 Pas de leads/devis" },
    { value: "Taux de conversion très faible (visiteurs qui ne deviennent pas clients)", label: "💔 Conversion faible" },
    { value: "Boutons d'appel à l'action (CTA) peu visibles ou absents", label: "🎯 CTA invisibles" },
    { value: "Pas trouvable sur Google (SEO local faible)", label: "🔍 Invisible Google" },
    { value: "Pas de Google My Business ou mal optimisé", label: "📍 Pas de GMB" },
    { value: "Contenu centré sur l'entreprise, pas sur les besoins clients", label: "📄 Pas client-centré" },
    { value: "Pas de témoignages clients ni avis visibles", label: "⭐ Pas d'avis clients" },
    { value: "Portfolio ou projets réalisés peu mis en valeur", label: "🖼️ Pas de portfolio" },
    { value: "Design obsolète qui ne inspire pas confiance", label: "🕰️ Design vieillot" },
    { value: "Site non responsive (pas adapté mobile)", label: "📱 Pas mobile" },
    { value: "Formulaire de contact trop long ou complexe", label: "📝 Formulaire compliqué" },
    { value: "Site lent à charger (perte de visiteurs)", label: "🐌 Lenteur" },
    { value: "Manque de preuves sociales et crédibilité", label: "🏆 Pas de crédibilité" },
    { value: "Pas de suivi des performances (analytics)", label: "📊 Pas de tracking" }
];

const SOLUTIONS = [
    { value: "Optimisation des CTA et parcours de conversion", label: "🎯 CTA optimisés" },
    { value: "Formulaire de devis simplifié (3-4 champs max)", label: "📝 Devis simplifié" },
    { value: "SEO local + optimisation Google My Business", label: "🔍 SEO local" },
    { value: "Campagnes Google Ads ciblées pour générer des leads", label: "💰 Google Ads" },
    { value: "Portfolio visuel avec projets avant/après", label: "📸 Portfolio" },
    { value: "Système de témoignages et avis clients", label: "⭐ Avis clients" },
    { value: "Refonte complète orientée conversion", label: "🎨 Refonte pro" },
    { value: "Chat en direct ou chatbot pour capturer leads", label: "💬 Chat live" },
    { value: "Landing pages spécifiques par service", label: "📄 Landing pages" },
    { value: "Tracking et analytics pour optimiser conversions", label: "📊 Analytics" },
    { value: "Retargeting / Remarketing pour récupérer visiteurs", label: "🔄 Retargeting" },
    { value: "Email marketing et automation pour nurturer leads", label: "📧 Email marketing" }
];

const INDUSTRY_TEMPLATES = {
    construction: {
        services: "Construction neuve, rénovation complète, agrandissement, gros œuvre",
        uniqueValue: "Entreprise établie avec expérience locale, équipe qualifiée",
        mainGoals: "Augmenter les devis de 40%, attirer projets importants"
    },
    immobilier: {
        services: "Vente de biens, location, gestion locative, estimation",
        uniqueValue: "Connaissance approfondie du marché local, réseau étendu",
        mainGoals: "Générer plus de leads qualifiés, augmenter mandats exclusifs"
    },
    plomberie: {
        services: "Plomberie générale, installation sanitaire, dépannage d'urgence",
        uniqueValue: "Service d'urgence 24/7, intervention rapide",
        mainGoals: "Augmenter les appels d'urgence, développer la clientèle"
    },
    electricite: {
        services: "Installation électrique, rénovation, mise aux normes, domotique",
        uniqueValue: "Certifications professionnelles, respect strict des normes",
        mainGoals: "Générer plus de devis, développer l'activité photovoltaïque"
    },
    menuiserie: {
        services: "Menuiserie sur mesure, fenêtres, portes, agencement intérieur",
        uniqueValue: "Fabrication artisanale locale, bois de qualité",
        mainGoals: "Valoriser le savoir-faire, attirer projets haut de gamme"
    },
    peinture: {
        services: "Peinture intérieure et extérieure, ravalement de façade",
        uniqueValue: "Finitions soignées, techniques décoratives",
        mainGoals: "Augmenter les chantiers de ravalement, développer la décoration"
    },
    architecture: {
        services: "Conception architecturale, plans, maîtrise d'œuvre",
        uniqueValue: "Approche créative et personnalisée",
        mainGoals: "Attirer projets d'architecture contemporaine, valoriser portfolio"
    },
    autre: {
        services: "Services professionnels adaptés au secteur",
        uniqueValue: "Expertise reconnue, qualité de service",
        mainGoals: "Développer la visibilité en ligne, générer plus de contacts"
    }
};