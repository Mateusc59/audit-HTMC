// TEMPLATES: Génération bilingue du HTML de l'audit

// Footer moderne — positionné en absolu en bas de chaque page
function footerHTML() {
    return `
    <div class="pdf-footer">
        <div class="pdf-footer-brand">
            <span class="pdf-footer-name">HTMC AGENCY</span>
            <span class="pdf-footer-tagline">Agence Digitale</span>
        </div>
        <div class="pdf-footer-contacts">
            <span>contact@htmcagency.com</span>
            <span>htmcagency.com</span>
            <span>+33 7 69 16 56 34</span>
        </div>
        <img src="logohtmc.png" class="pdf-footer-logo">
    </div>`;
}

function generateAuditHTML(data, lang = 'fr') {
    const isCa = lang === 'ca';
    const c = data.companyName;
    const loc = data.location || '';

    // ── Titre dynamique ──────────────────────────────────────────────────────
    const title = data.years
        ? (isCa
            ? `Teniu ${data.years} anys d'experiència a ${loc}, però el vostre lloc web reflecteix realment aquesta expertesa?`
            : `Vous avez ${data.years} ans d'expérience à ${loc}, mais votre site web reflète-t-il vraiment cette expertise ?`)
        : (isCa
            ? `La vostra empresa mereix un lloc web a l'alçada`
            : `Votre entreprise mérite un site web à la hauteur`);

    const expLabel = data.years
        ? (isCa ? `${data.years} anys d'experiència` : `${data.years} ans d'expérience`)
        : '';

    // ── Valeur unique personnalisée ──────────────────────────────────────────
    const uv = data.uniqueValue
        ? data.uniqueValue
        : (isCa ? `La vostra experiència i el vostre professionalisme` : `Votre expertise et votre professionnalisme`);

    // ── Logos ────────────────────────────────────────────────────────────────
    const logoTopHTML    = data.logo ? `<img src="${data.logo}" class="pdf-logo">` : '';
    const logoHeaderHTML = data.logo ? `<img src="${data.logo}" class="pdf-header-logo">` : '';

    // ── Problèmes & solutions (déjà dans la bonne langue) ───────────────────
    const problemsHTML  = data.problems.map(p  => `<li style="margin:6px 0;font-size:0.8rem;">❌ ${p}</li>`).join('');
    const solutionsHTML = data.solutions.map(s  => `<li style="margin:6px 0;font-size:0.8rem;">✅ ${s}</li>`).join('');

    // ── Panier moyen selon secteur ───────────────────────────────────────────
    const basket = {
        construction: '15 000€', architecture: '25 000€',
        immobilier: '8 000€',   menuiserie: '8 000€',
        electricite: '4 000€',  plomberie: '3 000€',
        peinture: '4 000€',     autre: '5 000€'
    }[data.industry] || '5 000€';

    // ── Screenshot ou liste de problèmes ────────────────────────────────────
    const problemsBlock = data.screenshot ? `
        <div style="background:linear-gradient(135deg,#FFF8E6 0%,#FFE8B3 100%);padding:18px;border-radius:12px;margin:15px 0;">
            <h3 style="font-size:1.1rem;font-weight:900;text-align:center;margin-bottom:12px;">
                ${isCa ? 'El vostre lloc web avui :' : 'Votre site web aujourd\'hui :'}
            </h3>
            <div style="display:grid;grid-template-columns:240px 1fr;gap:18px;align-items:start;">
                <img src="${data.screenshot}" style="width:100%;border:3px solid #1a1a1a;border-radius:8px;">
                <ul style="list-style:none;padding:0;">${problemsHTML}</ul>
            </div>
        </div>` : (data.problems.length > 0 ? `
        <div style="background:linear-gradient(135deg,#FFF8E6 0%,#FFE8B3 100%);padding:18px;border-radius:12px;margin:15px 0;">
            <h3 style="font-size:1rem;font-weight:800;margin-bottom:10px;">
                ${isCa ? `Problemes identificats al lloc de ${c} :` : `Problèmes identifiés sur le site de ${c} :`}
            </h3>
            <ul style="list-style:none;padding:0;columns:2;gap:12px;">${problemsHTML}</ul>
        </div>` : '');

    return `
<!-- ═══════════════════════════════════ PAGE 1 ═══════════════════════════════════ -->
<div class="pdf-page">
    ${logoTopHTML}

    <!-- En-tête -->
    <div class="pdf-header">
        <div class="pdf-header-side">HTMC AGENCY</div>
        ${logoHeaderHTML}
        <div>
            <h1 class="pdf-title">${title.toUpperCase()}</h1>
            <p style="font-size:0.95rem;margin-top:10px;opacity:0.9;">
                ${isCa ? 'Auditoria de la vostra empresa' : 'Audit de votre entreprise'}<br>
                <span class="pdf-company-name" style="font-size:1.2rem;font-weight:800;">${c}</span>
            </p>
        </div>
    </div>

    <!-- Intro personnalisée -->
    <div style="text-align:center;font-size:1.05rem;font-weight:900;margin:18px 0 14px;line-height:1.4;">
        ${isCa
            ? `Per transformar ${expLabel || 'la vostra experiència'} en més contractes,<br><span style="color:var(--accent);">${c}</span> ha de:`
            : `Pour transformer ${expLabel || 'votre expertise'} en plus de contrats,<br><span style="color:var(--accent);">${c}</span> doit :`}
    </div>

    <!-- Point 1 : Valeur réelle -->
    <div style="margin:12px 0;display:flex;gap:14px;align-items:flex-start;">
        <div style="background:linear-gradient(135deg,var(--accent) 0%,var(--accent-dark) 100%);border-radius:50%;width:46px;height:46px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0;">💬</div>
        <div>
            <h2 style="font-size:0.95rem;font-weight:800;margin-bottom:5px;">
                ${isCa ? 'Mostrar el valor real' : 'Montrer la valeur réelle'}
            </h2>
            <p style="font-size:0.8rem;line-height:1.5;">
                ${isCa
                    ? `Els visitants han d'entendre en 5 segons que <strong>${c}</strong> no és com les altres. <strong>${uv}</strong> han de ser evidents des de la primera vista. ${expLabel ? `Els vostres ${expLabel} ${loc ? 'a ' + loc : ''}` : 'La vostra trajectòria'} és un actiu clau que ha de destacar immediatament.`
                    : `Les visiteurs doivent comprendre en 5 secondes que <strong>${c}</strong> n'est pas comme les autres. <strong>${uv}</strong> doivent être évidents dès la première vue. ${expLabel ? `Vos ${expLabel} ${loc ? 'à ' + loc : ''}` : 'Votre parcours'} est un atout majeur qui doit transparaître immédiatement sur votre site.`}
            </p>
        </div>
    </div>

    <!-- Point 2 : Conversion -->
    <div style="margin:12px 0;display:flex;gap:14px;align-items:flex-start;">
        <div style="background:linear-gradient(135deg,var(--accent) 0%,var(--accent-dark) 100%);border-radius:50%;width:46px;height:46px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0;">👆</div>
        <div>
            <h2 style="font-size:0.95rem;font-weight:800;margin-bottom:5px;">
                ${isCa ? 'Convertir cada visita en venda concreta' : 'Convertir chaque visite en vente concrète'}
            </h2>
            <p style="font-size:0.8rem;line-height:1.5;">
                ${isCa
                    ? `Actualment, el vostre lloc perd <strong>70-80% dels visitants</strong> sense que actuïn. Els botons "Sol·licitar pressupost" no són prou visibles, el formulari és massa llarg, i no hi ha número de telèfon clicable en mòbil — perdeu desenes de clients potencials cada mes.<br><br>
                       <strong>La solució :</strong> Botons ultravisibles des del primer segon, formulari simplificat (3 camps : nom, telèfon, servei), número clicable. Els nostres clients passen de <strong>5-10 contactes/mes a 20-30 contactes/mes</strong>.`
                    : `Actuellement, votre site perd <strong>70-80% des visiteurs</strong> sans qu'ils agissent. Les boutons "Demander un devis" ne sont pas assez visibles, le formulaire est trop long, et il n'y a pas de numéro cliquable sur mobile — vous perdez des dizaines de clients chaque mois.<br><br>
                       <strong>La solution :</strong> Boutons ultra-visibles dès la première seconde, formulaire simplifié (3 champs : nom, téléphone, service), numéro cliquable. Nos clients passent de <strong>5-10 contacts/mois à 20-30 contacts/mois</strong>.`}
            </p>
        </div>
    </div>

    <!-- Point 3 : Portfolio -->
    <div style="margin:12px 0;display:flex;gap:14px;align-items:flex-start;">
        <div style="background:linear-gradient(135deg,var(--accent) 0%,var(--accent-dark) 100%);border-radius:50%;width:46px;height:46px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0;">🏆</div>
        <div>
            <h2 style="font-size:0.95rem;font-weight:800;margin-bottom:5px;">
                ${isCa ? 'Assegurar la confiança amb el portafoli' : 'Assurer la confiance avec le portfolio'}
            </h2>
            <p style="font-size:0.8rem;line-height:1.5;">
                ${isCa
                    ? `Els clients volen veure <strong>proves concretes</strong> : fotos de projectes reals abans/després, el vostre equip al treball. Un portafoli ben presentat tranquil·itza i converteix 3 vegades més que un lloc sense fotos.`
                    : `Les clients veulent voir des <strong>preuves concrètes</strong> : photos de projets réels avant/après, votre équipe au travail. Un portfolio bien présenté rassure et convertit 3x plus qu'un site sans photos.`}
            </p>
        </div>
    </div>

    <!-- Le site doit aussi (3 colonnes) -->
    <h3 style="font-size:1rem;font-weight:900;margin:18px 0 10px;">
        ${isCa ? `El lloc de ${c} també ha de :` : `Le site de ${c} doit aussi :`}
    </h3>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px;">
        <div style="display:flex;gap:8px;align-items:flex-start;">
            <div style="background:var(--accent);color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:0.85rem;">1</div>
            <div>
                <strong style="font-size:0.82rem;">${isCa ? 'Estar optimitzat mòbil' : 'Être optimisé mobile'}</strong>
                <p style="font-size:0.74rem;margin-top:2px;line-height:1.3;">${isCa ? '70% de les cerques es fan en mòbil. Sense adaptació, perdeu 7 clients de cada 10.' : '70% des recherches se font sur mobile. Sans adaptation, vous perdez 7 clients sur 10.'}</p>
            </div>
        </div>
        <div style="display:flex;gap:8px;align-items:flex-start;">
            <div style="background:var(--accent);color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:0.85rem;">2</div>
            <div>
                <strong style="font-size:0.82rem;">${isCa ? 'Estar optimitzat a Google' : 'Être optimisé sur Google'}</strong>
                <p style="font-size:0.74rem;margin-top:2px;line-height:1.3;">${isCa ? `Aparèixer primer per "${data.industry} ${loc}" quan els clients cerquen els vostres serveis.` : `Apparaître en premier sur "${data.industry} ${loc}" quand les clients recherchent vos services.`}</p>
            </div>
        </div>
        <div style="display:flex;gap:8px;align-items:flex-start;">
            <div style="background:var(--accent);color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:0.85rem;">3</div>
            <div>
                <strong style="font-size:0.82rem;">${isCa ? 'Respondre als clients' : 'Répondre aux clients'}</strong>
                <p style="font-size:0.74rem;margin-top:2px;line-height:1.3;">${isCa ? 'Disponibilitat, tràmits administratius, particulars/empreses, pressupost gratuït ?' : 'Disponibilité, démarches, particuliers/entreprises, devis gratuit ?'}</p>
            </div>
        </div>
    </div>

    <!-- Urgence + Chiffres -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px;">
        <div style="background:linear-gradient(135deg,#FFF8E6 0%,#FFE8B3 100%);padding:14px;border-radius:10px;">
            <h3 style="font-size:0.9rem;font-weight:800;margin-bottom:7px;text-align:center;">
                💡 ${isCa ? 'Per què és urgent?' : 'Pourquoi c\'est urgent ?'}
            </h3>
            <p style="font-size:0.76rem;line-height:1.4;">
                ${isCa
                    ? `Cada dia que passa, perdeu clients que van als vostres competidors. Un lloc optimitzat comença a generar resultats en 2-4 setmanes. El retorn d'inversió es mesura en mesos, no en anys.`
                    : `Chaque jour qui passe, vous perdez des clients qui vont chez vos concurrents. Un site optimisé commence à générer des résultats en 2-4 semaines. Le retour sur investissement se mesure en mois, pas en années.`}
            </p>
        </div>
        <div style="background:linear-gradient(135deg,#FFF8E6 0%,#FFE8B3 100%);padding:14px;border-left:4px solid var(--accent);border-radius:10px;">
            <h4 style="font-size:0.88rem;font-weight:800;margin-bottom:7px;">
                📊 ${isCa ? 'Xifres clau del sector :' : 'Chiffres clés du secteur :'}
            </h4>
            <ul style="list-style:none;padding:0;margin:0;">
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? '85% dels clients cerquen en línia' : '85% des clients cherchent en ligne'}</li>
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? '70% de les cerques es fan en mòbil' : '70% des recherches sur mobile'}</li>
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? 'Lloc lent = 40% menys de visitants' : 'Site lent = 40% de visiteurs perdus'}</li>
                <li style="font-size:0.74rem;margin:3px 0;">✓ ${isCa ? '90% llegeixen ressenyes abans de triar' : '90% lisent les avis avant de choisir'}</li>
            </ul>
        </div>
    </div>

    ${footerHTML()}
</div>

<!-- ═══════════════════════════════════ PAGE 2 ═══════════════════════════════════ -->
<div class="pdf-page">
    ${logoTopHTML}

    <h2 style="font-size:1.25rem;font-weight:900;margin-bottom:12px;text-align:center;">
        ${isCa ? `${c} i el seu lloc web avui :` : `${c} et son site web aujourd'hui :`}
    </h2>

    ${problemsBlock}

    <h2 style="font-size:1.15rem;font-weight:900;margin:18px 0 12px;text-align:center;">
        ${isCa ? `Si es compleixen aquests criteris, ${c} tindrà :` : `Si ces critères sont remplis, ${c} aura :`}
    </h2>

    <!-- 3 KPIs -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:12px 0;">
        <div style="background:linear-gradient(135deg,#FFF8E6 0%,#FFE8B3 100%);padding:14px;border-radius:10px;text-align:center;">
            <div style="font-size:1.8rem;margin-bottom:6px;">📈</div>
            <h4 style="font-size:0.82rem;font-weight:800;margin-bottom:6px;">${isCa ? '+40-80% de pressupostos' : '+40-80% de devis'}</h4>
            <p style="font-size:0.73rem;line-height:1.3;">${isCa ? 'Presència optimitzada = màquina de leads' : 'Présence optimisée = machine à leads'}</p>
        </div>
        <div style="background:linear-gradient(135deg,#FFF8E6 0%,#FFE8B3 100%);padding:14px;border-radius:10px;text-align:center;">
            <div style="font-size:1.8rem;margin-bottom:6px;">💰</div>
            <h4 style="font-size:0.82rem;font-weight:800;margin-bottom:6px;">${isCa ? 'Conversió 3-7%' : 'Conversion 3-7%'}</h4>
            <p style="font-size:0.73rem;line-height:1.3;">${isCa ? '30-70 visitants de 1000 contacten' : '30-70 visiteurs sur 1000 contactent'}</p>
        </div>
        <div style="background:linear-gradient(135deg,#FFF8E6 0%,#FFE8B3 100%);padding:14px;border-radius:10px;text-align:center;">
            <div style="font-size:1.8rem;margin-bottom:6px;">🎯</div>
            <h4 style="font-size:0.82rem;font-weight:800;margin-bottom:6px;">${isCa ? 'Contractes +50-100%' : 'Contrats +50-100%'}</h4>
            <p style="font-size:0.73rem;line-height:1.3;">${isCa ? `Projectes a ${basket}+` : `Projets à ${basket}+`}</p>
        </div>
    </div>

    <!-- Focus Conversion -->
    <div style="background:linear-gradient(135deg,#FFF3E0 0%,#FFE0B2 100%);padding:14px;border-radius:12px;margin:12px 0;border-left:4px solid var(--accent);">
        <h3 style="font-size:0.95rem;font-weight:800;margin-bottom:8px;color:var(--accent);">
            💰 ${isCa ? 'Focus Conversió : Transformar visitants en clients que paguen' : 'Focus Conversion : Transformer visiteurs en clients payants'}
        </h3>
        <p style="font-size:0.78rem;line-height:1.5;margin-bottom:6px;">
            <strong>${isCa ? 'Problema :' : 'Problème :'}</strong>
            ${isCa
                ? ` De 1000 visitants, només 5-10 us contacten (0,5-1%). Els 990+ altres marxen = <strong>99% de pèrdua</strong>.`
                : ` Sur 1000 visiteurs, seulement 5-10 vous contactent (0,5-1%). Les 990+ autres partent = <strong>99% de perte</strong>.`}
        </p>
        <p style="font-size:0.78rem;line-height:1.5;margin-bottom:6px;">
            <strong>${isCa ? 'Objectiu :' : 'Objectif :'}</strong>
            ${isCa
                ? ` Passar a 30-70 contactes de 1000 (3-7%). Com ? CTAs visibles, formulari 3 camps, botó mòbil clicable, testimonis amb fotos.`
                : ` Passer à 30-70 contacts sur 1000 (3-7%). Comment ? CTA visibles, formulaire 3 champs, bouton mobile cliquable, témoignages photos.`}
        </p>
        <p style="font-size:0.78rem;line-height:1.5;">
            <strong>ROI :</strong>
            ${isCa
                ? ` 500 visitants/mes amb 5% = 25 contactes. Si 20% tanquen = <strong>5 clients/mes en lloc d'1</strong>. Panier ${basket} = <strong>+60k€ a +200k€ CA anual</strong>.`
                : ` 500 visiteurs/mois avec 5% = 25 contacts. Si 20% closent = <strong>5 clients/mois au lieu de 1</strong>. Panier ${basket} = <strong>+60k€ à +200k€ CA annuel</strong>.`}
        </p>
    </div>

    <!-- Solutions -->
    <h2 style="font-size:1.05rem;font-weight:900;margin:14px 0 10px;">
        ${isCa ? 'Solucions proposades :' : 'Solutions proposées :'}
    </h2>
    <div style="columns:2;gap:16px;margin-bottom:12px;">
        <ul style="list-style:none;padding:0;">${solutionsHTML}</ul>
    </div>

    <!-- Timeline -->
    <div style="background:linear-gradient(135deg,#f8f8f8 0%,#ececec 100%);padding:14px;border-radius:10px;margin:12px 0;">
        <h4 style="font-size:0.9rem;font-weight:800;margin-bottom:8px;text-align:center;">
            🚀 ${isCa ? 'El que canvia des d\'ara' : 'Ce qui change dès maintenant'}
        </h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
            <div style="font-size:0.74rem;"><strong>${isCa ? '✓ Setmana 1-2 :' : '✓ Semaine 1-2 :'}</strong> ${isCa ? 'Auditoria completa + estratègia' : 'Audit complet + stratégie définie'}</div>
            <div style="font-size:0.74rem;"><strong>${isCa ? '✓ Setmana 3-4 :' : '✓ Semaine 3-4 :'}</strong> ${isCa ? 'Primers resultats mesurables' : 'Premiers résultats mesurables'}</div>
            <div style="font-size:0.74rem;"><strong>${isCa ? '✓ Mes 2-3 :' : '✓ Mois 2-3 :'}</strong> ${isCa ? 'Duplicació dels contactes qualificats' : 'Doublement des contacts qualifiés'}</div>
            <div style="font-size:0.74rem;"><strong>${isCa ? '✓ Mes 4-6 :' : '✓ Mois 4-6 :'}</strong> ${isCa ? 'ROI positiu i creixement continu' : 'ROI positif et croissance continue'}</div>
        </div>
    </div>

    <!-- CTA -->
    <div style="background:linear-gradient(135deg,var(--accent) 0%,var(--accent-dark) 100%);color:white;padding:14px;border-radius:12px;text-align:center;margin-top:12px;">
        <h3 style="font-size:1rem;font-weight:800;margin-bottom:6px;">
            ${isCa ? 'Pròxima etapa' : 'Prochaine étape'}
        </h3>
        <p style="font-size:0.88rem;margin:5px 0;">
            ${isCa ? '15 minuts per presentar-vos-ho ?' : '15 minutes pour vous le présenter ?'}
        </p>
        <p style="font-size:0.78rem;margin-top:5px;font-weight:600;">
            ${isCa ? 'GRATUÏT • SENSE COMPROMÍS' : 'GRATUIT • SANS ENGAGEMENT'}
        </p>
    </div>

    ${footerHTML()}
</div>`;
}
