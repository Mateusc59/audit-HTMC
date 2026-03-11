// PDF EXPORT — html2canvas + jsPDF
// Capture chaque .pdf-page comme une image haute résolution
// → rendu pixel-perfect, identique à la preview, exactement A4

async function exportToPDF() {
    const btn = document.getElementById('exportPdfBtn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '⏳ Génération...';
    btn.disabled = true;

    // Petit délai pour que le bouton se rafraîchisse visuellement
    await new Promise(r => setTimeout(r, 50));

    try {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const pages = document.querySelectorAll('.pdf-page');

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];

            // Capturer la page exactement comme elle apparaît à l'écran
            const canvas = await html2canvas(page, {
                scale: 2,               // ×2 pour qualité haute résolution
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                logging: false,
                width: page.offsetWidth,
                height: page.offsetHeight,
                windowWidth: page.offsetWidth
            });

            const imgData = canvas.toDataURL('image/jpeg', 0.93);

            // Chaque page = exactement 210mm × 297mm (A4)
            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
        }

        // Nom du fichier basé sur le nom de l'entreprise
        const company = document.getElementById('companyName')?.value || 'audit';
        const filename = `audit-${company.toLowerCase().replace(/\s+/g, '-')}.pdf`;
        pdf.save(filename);

    } catch (err) {
        console.error('Erreur export PDF:', err);
        alert('Erreur lors de la génération PDF. Rechargez la page et réessayez.');
    } finally {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
    }
}
