// PDF DOWNLOAD: Envoie le HTML complet à Python pour génération PDF

async function downloadPDF(lang) {
    // Récupérer le HTML de la preview
    const pdfContent = document.getElementById('pdfContent');
    
    if (!pdfContent || !pdfContent.innerHTML) {
        alert('Générez d\'abord l\'audit !');
        return;
    }
    
    // Get company name for filename
    const companyName = window.currentAuditData?.companyName || 'Audit';
    
    // Show loading
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); z-index: 10000; text-align: center;';
    loadingDiv.innerHTML = `
        <div style="width: 50px; height: 50px; border: 4px solid #f3f3f3; border-top: 4px solid #D4A574; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
        <p style="font-size: 1.1rem; font-weight: 600;">Génération du PDF...</p>
        <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">Cela peut prendre quelques secondes</p>
    `;
    document.body.appendChild(loadingDiv);
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
    document.head.appendChild(style);
    
    try {
        // Envoyer le HTML à Python
        const response = await fetch('/generate-pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                htmlContent: pdfContent.innerHTML,
                language: lang,
                companyName: companyName
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Erreur génération PDF');
        }
        
        // Télécharger le PDF
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Audit_${companyName.replace(' ', '_')}_${lang.toUpperCase()}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        // Success message
        const successDiv = document.createElement('div');
        successDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%); color: white; padding: 20px 30px; border-radius: 10px; box-shadow: 0 4px 20px rgba(76,175,80,0.4); z-index: 10001; font-weight: 600; font-size: 1.1rem;';
        successDiv.textContent = '✅ PDF téléchargé avec succès !';
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