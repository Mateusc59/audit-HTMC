// TEMPLATES: Génération du HTML de l'audit

function generateAuditHTML(data) {
    const expText = data.years ? `${data.years} ans d'expérience` : '';
    const title = data.years 
        ? `Vous avez ${data.years} ans d'expérience à ${data.location}, mais votre site web reflète-t-il vraiment cette expertise ?`
        : `Votre entreprise mérite un site web à la hauteur`;

    const logoTopHTML = data.logo ? `<img src="${data.logo}" class="pdf-logo">` : '';
    const logoHeaderHTML = data.logo ? `<img src="${data.logo}" class="pdf-header-logo">` : '';
    
    const problemsHTML = data.problems.map(p => `<li style="margin: 10px 0;">❌ ${p}</li>`).join('');
    const solutionsHTML = data.solutions.map(s => `<li style="margin: 10px 0;">✅ ${s}</li>`).join('');

    const screenshotSection = data.screenshot ? `
        <div style="background: linear-gradient(135deg, #FFF8E6 0%, #FFE8B3 100%); padding: 30px; border-radius: 12px; margin: 30px 0;">
            <h2 style="font-size: 1.5rem; font-weight: 900; text-align: center; margin-bottom: 25px;">
                Votre site web aujourd'hui :
            </h2>
            <div style="display: grid; grid-template-columns: 300px 1fr; gap: 30px;">
                <img src="${data.screenshot}" style="width: 100%; border: 3px solid #1a1a1a; border-radius: 8px;">
                <ul style="list-style: none; padding: 0;">
                    ${problemsHTML}
                </ul>
            </div>
        </div>
    ` : '';

    return `
        <div class="pdf-page">
            ${logoTopHTML}
            <div class="pdf-header">
                <div class="pdf-header-side">HTMC AGENCY</div>
                ${logoHeaderHTML}
                <div>
                    <h1 class="pdf-title">${title.toUpperCase()}</h1>
                    <p style="font-size: 1.2rem; margin-top: 15px;">
                        Auditoria de votre entreprise<br>
                        <span class="pdf-company-name">${data.companyName}</span>
                    </p>
                </div>
            </div>

            <div style="text-align: center; font-size: 1.3rem; font-weight: 900; margin: 25px 0 20px;">
                Pour transformer ${expText || 'votre expertise'} en plus de contrats,<br>
                <span style="color: var(--accent);">${data.companyName}</span> doit :
            </div>

            <div style="margin: 20px 0; display: flex; gap: 18px; align-items: flex-start;">
                <div style="background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%); border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; flex-shrink: 0;">💬</div>
                <div>
                    <h2 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 8px;">Montrer la valeur réelle</h2>
                    <p style="font-size: 0.85rem; line-height: 1.5;">
                        Les visiteurs doivent comprendre en 5 secondes que ${data.companyName} n'est pas comme les autres. 
                        ${data.uniqueValue || 'Votre expertise et votre professionnalisme'} doivent être évidents dès la première vue. 
                        Vos ${data.years ? data.years + ' ans d\'expérience' : 'années d\'expérience'} ${data.location ? 'à ' + data.location : ''} 
                        sont un atout majeur qui doit transparaître immédiatement sur votre site.
                    </p>
                </div>
            </div>

            <div style="margin: 20px 0; display: flex; gap: 18px; align-items: flex-start;">
                <div style="background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%); border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; flex-shrink: 0;">👆</div>
                <div>
                    <h2 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 8px;">Convertir chaque visite en vente concrète</h2>
                    <p style="font-size: 0.85rem; line-height: 1.5;">
                        Actuellement, votre site perd <strong>70-80% des visiteurs</strong> sans qu'ils agissent. 
                        Pourquoi ? Parce que les boutons "Demander un devis" ne sont pas assez visibles, le formulaire est trop long, 
                        et il n'y a pas de numéro de téléphone cliquable sur mobile. Résultat : vous perdez des dizaines de clients potentiels chaque mois.
                        <br><br>
                        <strong>La solution :</strong> Boutons ultra-visibles dès la première seconde, formulaire simplifié (3 champs : nom, téléphone, service), 
                        numéro cliquable. Nos clients passent de <strong>5-10 contacts/mois à 20-30 contacts/mois</strong>. 
                        Imaginez : <strong>doubler ou tripler vos demandes de devis</strong> sans augmenter votre budget marketing !
                    </p>
                </div>
            </div>

            <div style="margin: 20px 0; display: flex; gap: 18px; align-items: flex-start;">
                <div style="background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%); border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; flex-shrink: 0;">🏆</div>
                <div>
                    <h2 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 8px;">Assurer la confiance avec le portfolio</h2>
                    <p style="font-size: 0.85rem; line-height: 1.5;">
                        Les clients veulent voir des <strong>preuves concrètes</strong> : photos de projets réels avant/après, 
                        votre équipement, vos installations, votre équipe au travail. Un portfolio bien présenté rassure 
                        et convertit 3x plus qu'un site sans photos.
                    </p>
                </div>
            </div>

            <h3 style="font-size: 1.15rem; font-weight: 900; margin: 30px 0 15px;">Le site de ${data.companyName} doit aussi :</h3>
            
            <div style="margin: 12px 0; display: flex; gap: 12px;">
                <div style="background: var(--accent); color: white; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; flex-shrink: 0; font-size: 1.1rem;">1</div>
                <div>
                    <strong style="font-size: 0.95rem;">Être optimisé mobile</strong>
                    <p style="font-size: 0.8rem; margin-top: 4px; line-height: 1.4;">70% des recherches se font sur mobile. Si votre site n'est pas adapté, vous perdez 7 clients sur 10 avant même qu'ils vous contactent.</p>
                </div>
            </div>

            <div style="margin: 12px 0; display: flex; gap: 12px;">
                <div style="background: var(--accent); color: white; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; flex-shrink: 0; font-size: 1.1rem;">2</div>
                <div>
                    <strong style="font-size: 0.95rem;">Être optimisé Google</strong>
                    <p style="font-size: 0.8rem; margin-top: 4px; line-height: 1.4;">Apparaître en premier sur "${data.industry.toLowerCase()} ${data.location || 'votre région'}" quand les clients recherchent vos services.</p>
                </div>
            </div>

            <div style="margin: 12px 0; display: flex; gap: 12px;">
                <div style="background: var(--accent); color: white; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; flex-shrink: 0; font-size: 1.1rem;">3</div>
                <div>
                    <strong style="font-size: 0.95rem;">Être bien élaboré</strong>
                    <p style="font-size: 0.8rem; margin-top: 4px; line-height: 1.4;">Répondre aux questions clés : Disponibilité ? Démarches administratives ? Particuliers et entreprises ? Devis gratuit ?</p>
                </div>
            </div>
        </div>

        <div class="pdf-page">
            ${logoTopHTML}
            
            <h2 style="font-size: 1.4rem; font-weight: 900; margin-bottom: 25px; text-align: center;">
                ${data.companyName} et son site web aujourd'hui :
            </h2>

            ${screenshotSection}

            <h2 style="font-size: 1.3rem; font-weight: 900; margin: 30px 0 20px; text-align: center;">
                Si ces critères sont remplis, ${data.companyName} aura :
            </h2>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 25px 0;">
                <div style="background: linear-gradient(135deg, #FFF8E6 0%, #FFE8B3 100%); padding: 18px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 10px;">📈</div>
                    <h4 style="font-size: 0.9rem; font-weight: 800; margin-bottom: 10px;">+40-80% de devis</h4>
                    <p style="font-size: 0.8rem; line-height: 1.4;">Présence optimisée = machine à leads</p>
                </div>
                <div style="background: linear-gradient(135deg, #FFF8E6 0%, #FFE8B3 100%); padding: 18px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 10px;">💰</div>
                    <h4 style="font-size: 0.9rem; font-weight: 800; margin-bottom: 10px;">Conversion 3-7%</h4>
                    <p style="font-size: 0.8rem; line-height: 1.4;">30-70 visiteurs sur 1000 contactent</p>
                </div>
                <div style="background: linear-gradient(135deg, #FFF8E6 0%, #FFE8B3 100%); padding: 18px; border-radius: 10px; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 10px;">🎯</div>
                    <h4 style="font-size: 0.9rem; font-weight: 800; margin-bottom: 10px;">Contrats +50-100%</h4>
                    <p style="font-size: 0.8rem; line-height: 1.4;">Projets 15k€, 30k€, 50k€+</p>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%); padding: 20px; border-radius: 12px; margin: 25px 0; border-left: 4px solid var(--accent);">
                <h3 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 12px; color: var(--accent);">
                    💰 Focus Conversion : Transformer visiteurs en clients payants
                </h3>
                <p style="font-size: 0.85rem; line-height: 1.6; margin-bottom: 10px;">
                    <strong>Problème :</strong> Sur 1000 visiteurs, seulement 5-10 vous contactent (0,5-1%). 
                    Les 990+ autres partent = <strong>99% de perte</strong>.
                </p>
                <p style="font-size: 0.85rem; line-height: 1.6; margin-bottom: 10px;">
                    <strong>Objectif :</strong> Passer à 30-70 contacts sur 1000 (3-7%). Comment ? CTA visibles, 
                    formulaire 3 champs, bouton mobile cliquable, chat live, témoignages photos.
                </p>
                <p style="font-size: 0.85rem; line-height: 1.6;">
                    <strong>ROI :</strong> 500 visiteurs/mois avec 5% = 25 contacts. Si 20% closent = <strong>5 clients/mois 
                    au lieu de 1</strong>. Panier ${data.industry === 'construction' ? '15 000€' : '5 000€'} = 
                    <strong>+60k€ à +200k€ CA annuel</strong>.
                </p>
            </div>

            <h2 style="font-size: 1.3rem; font-weight: 900; margin: 30px 0 18px;">Solutions proposées :</h2>
            <ul style="list-style: none; padding: 0; margin-bottom: 30px;">
                ${solutionsHTML}
            </ul>

            <div style="background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%); color: white; padding: 28px; border-radius: 12px; text-align: center; margin-top: 30px;">
                <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 15px;">Prochaine étape</h3>
                <p style="font-size: 1rem; margin: 10px 0;">15 minutes pour vous le présenter ?</p>
                <p style="font-size: 0.9rem; margin-top: 12px; font-weight: 600;">GRATUIT • SANS ENGAGEMENT</p>
            </div>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 3px solid var(--accent); text-align: center; font-size: 0.85rem;">
                <p style="font-weight: 700; font-size: 1rem; margin-bottom: 5px;">HTMC AGENCY</p>
                <p>contact@htmcagency.com | +33 7 69 16 56 34</p>
            </div>
        </div>
    `;
}