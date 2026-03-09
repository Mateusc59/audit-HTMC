// PDF DOWNLOAD via API - PDF PARFAIT comme la preview !

async function downloadPDFviaAPI(lang) {
    const pdfContent = document.getElementById('pdfContent');
    
    if (!pdfContent || !pdfContent.innerHTML) {
        alert('Générez d\'abord l\'audit !');
        return;
    }
    
    const companyName = window.currentAuditData?.companyName || 'Audit';
    
    // Translate if Catalan
    let htmlContent = pdfContent.innerHTML;
    if (lang === 'ca') {
        htmlContent = translateHTMLforAPI(htmlContent);
    }
    
    // Show loading
    const loadingDiv = document.createElement('div');
    loadingDiv.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); z-index: 10000; text-align: center;';
    loadingDiv.innerHTML = `
        <div style="width: 50px; height: 50px; border: 4px solid #f3f3f3; border-top: 4px solid #D4A574; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
        <p style="font-size: 1.1rem; font-weight: 600;">Génération du PDF parfait...</p>
        <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">Cela peut prendre 5-10 secondes</p>
    `;
    document.body.appendChild(loadingDiv);
    
    const style = document.createElement('style');
    style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
    document.head.appendChild(style);
    
    try {
        const response = await fetch('/generate-pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                htmlContent: htmlContent,
                language: lang,
                companyName: companyName
            })
        });
        
        if (!response.ok) {
            throw new Error('Erreur génération PDF');
        }
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Audit_${companyName.replace(' ', '_')}_${lang.toUpperCase()}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        // Success
        const successDiv = document.createElement('div');
        successDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%); color: white; padding: 20px 30px; border-radius: 10px; box-shadow: 0 4px 20px rgba(76,175,80,0.4); z-index: 10001; font-weight: 600; font-size: 1.1rem;';
        successDiv.textContent = '✅ PDF parfait téléchargé !';
        document.body.appendChild(successDiv);
        setTimeout(() => successDiv.remove(), 3000);
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Erreur lors de la génération du PDF: ' + error.message);
    } finally {
        loadingDiv.remove();
        style.remove();
    }
}

function translateHTMLforAPI(html) {
    const translations = {
        'VOTRE ENTREPRISE MÉRITE UN SITE WEB À LA HAUTEUR': 'LA VOSTRA EMPRESA MEREIX UN LLOC WEB A L\'ALÇADA',
        'Votre site web aujourd\'hui :': 'El vostre lloc web avui:',
        'Entreprise établie avec expérience locale, équipe qualifiée': 'Empresa establerta amb experiència local, equip qualificat',
        'Auditoria de votre entreprise': 'Auditoria de la vostra empresa',
        'Pour transformer': 'Per transformar',
        'votre expertise': 'la vostra experiència',
        'ans d\'expérience': 'anys d\'experiència',
        'en plus de contrats': 'en més contractes',
        'doit :': 'ha de:',
        'doit aussi :': 'també ha de:',
        'Vous avez': 'Teniu',
        'années d\'expérience à': 'anys d\'experiència a',
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
    
    for (const [fr, ca] of Object.entries(translations).sort((a, b) => b[0].length - a[0].length)) {
        html = html.replace(new RegExp(fr, 'g'), ca);
    }
    
    return html;
}

// Keep old function for backward compatibility but use API version
function downloadPDF(lang) {
    downloadPDFviaAPI(lang);
}