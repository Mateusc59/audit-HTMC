// PDF DOWNLOAD: Envoie le HTML à Python pour génération PDF

async function downloadPDF(lang) {
    // Récupérer les données du formulaire
    const data = window.currentAuditData;
    
    if (!data) {
        alert('Générez d\'abord l\'audit !');
        return;
    }
    
    // Show loading
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.innerHTML = '<div class="spinner"></div><p>Génération du PDF...</p>';
    loadingDiv.style.display = 'block';
    document.body.appendChild(loadingDiv);
    
    try {
        // Envoyer à Python
        const response = await fetch('/generate-pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                language: lang
            })
        });
        
        if (!response.ok) {
            throw new Error('Erreur génération PDF');
        }
        
        // Télécharger le PDF
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Audit_${data.companyName}_${lang.toUpperCase()}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        alert('✅ PDF téléchargé avec succès !');
        
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Erreur lors de la génération du PDF');
    } finally {
        loadingDiv.remove();
    }
}