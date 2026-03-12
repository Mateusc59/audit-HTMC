// APP.JS: Logique principale

let logoData = null;
let screenshotData = null;
let autoFillCaData = null; // stocke les valeurs CA de l'auto-fill

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeCheckboxes();
    initializeEventListeners();
});

function initializeCheckboxes() {
    // Problèmes
    const problemsContainer = document.getElementById('problemsCheckboxes');
    PROBLEMS.forEach((problem, index) => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" class="problem-checkbox" value="${problem.value.fr}" data-value-ca="${problem.value.ca}" id="problem-${index}">
            <span>${problem.label.fr}</span>
        `;
        problemsContainer.appendChild(label);
    });

    // Solutions
    const solutionsContainer = document.getElementById('solutionsCheckboxes');
    SOLUTIONS.forEach((solution, index) => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" class="solution-checkbox" value="${solution.value.fr}" data-value-ca="${solution.value.ca}" id="solution-${index}">
            <span>${solution.label.fr}</span>
        `;
        solutionsContainer.appendChild(label);
    });
}

function initializeEventListeners() {
    // Auto-fill
    document.getElementById('autoFillBtn').addEventListener('click', autoFill);

    // Logo upload
    document.getElementById('logoUpload').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => { logoData = e.target.result; };
            reader.readAsDataURL(file);
        }
    });

    // Screenshot upload
    document.getElementById('screenshotUpload').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                screenshotData = e.target.result;
                document.getElementById('screenshotPreview').innerHTML = 
                    `<img src="${screenshotData}" style="width: 300px; border: 2px solid var(--border); border-radius: 8px;">`;
            };
            reader.readAsDataURL(file);
        }
    });

    // Generate button
    document.getElementById('generateBtn').addEventListener('click', generateAudit);

    // New audit button
    document.getElementById('newAuditBtn').addEventListener('click', resetForm);
}

function autoFill() {
    const industry = document.getElementById('industry').value;
    if (!industry) {
        alert('Sélectionnez d\'abord un secteur');
        return;
    }

    const template = INDUSTRY_TEMPLATES[industry] || INDUSTRY_TEMPLATES['autre'];
    const fr = template.fr;
    document.getElementById('services').value = fr.services;
    document.getElementById('uniqueValue').value = fr.uniqueValue;
    document.getElementById('mainGoals').value = fr.mainGoals;

    // Stocker les équivalents CA pour la génération bilingue
    autoFillCaData = template.ca;

    // Cocher quelques problèmes par défaut
    document.querySelectorAll('.problem-checkbox')[0].checked = true;
    document.querySelectorAll('.problem-checkbox')[1].checked = true;
    document.querySelectorAll('.problem-checkbox')[3].checked = true;

    // Cocher quelques solutions par défaut
    document.querySelectorAll('.solution-checkbox')[0].checked = true;
    document.querySelectorAll('.solution-checkbox')[2].checked = true;
    document.querySelectorAll('.solution-checkbox')[4].checked = true;

    const btn = document.getElementById('autoFillBtn');
    btn.textContent = '✅ Rempli !';
    setTimeout(() => { btn.textContent = '🤖 Auto-remplir'; }, 2000);
}

async function generateAudit() {
    // Récupérer les données
    const companyName = document.getElementById('companyName').value.trim();
    const industry = document.getElementById('industry').value;
    const location = document.getElementById('location').value.trim();
    const services = document.getElementById('services').value.trim();
    const goals = document.getElementById('mainGoals').value.trim();
    const years = document.getElementById('yearsExperience').value;
    const uniqueValue = document.getElementById('uniqueValue').value;

    // Problèmes & solutions en FR et CA
    const checkedProblems  = Array.from(document.querySelectorAll('.problem-checkbox:checked'));
    const checkedSolutions = Array.from(document.querySelectorAll('.solution-checkbox:checked'));

    const problemsFR  = checkedProblems.map(c => c.value);
    const problemsCA  = checkedProblems.map(c => c.dataset.valueCa);
    const solutionsFR = checkedSolutions.map(c => c.value);
    const solutionsCA = checkedSolutions.map(c => c.dataset.valueCa);

    // Validation
    if (!companyName || !industry || !location || !services || !goals) {
        alert('Remplissez tous les champs obligatoires (*)');
        return;
    }
    if (problemsFR.length === 0) {
        alert('Sélectionnez au moins un problème');
        return;
    }

    // Show loading
    const loadingEl = document.getElementById('loading');
    const loadingText = loadingEl.querySelector('p');
    loadingEl.classList.add('active');
    document.getElementById('generateBtn').disabled = true;

    // Appel Claude pour contenu personnalisé
    let aiData = null;
    try {
        loadingText.textContent = 'Claude analyse votre projet…';
        const response = await fetch('/api/generate-audit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ companyName, industry, location, services, goals, uniqueValue, years, problems: problemsFR, solutions: solutionsFR })
        });
        if (response.ok) {
            aiData = await response.json();
        }
    } catch (err) {
        console.warn('Génération IA indisponible, template standard utilisé:', err);
    }

    loadingText.textContent = 'Mise en page de l\'audit…';

    const baseData = { companyName, industry, location, services, goals, years, uniqueValue, logo: logoData, screenshot: screenshotData };

    // Pour la version CA, utiliser les valeurs CA de l'auto-fill si disponibles
    const caOverrides = autoFillCaData ? {
        services: autoFillCaData.services,
        uniqueValue: autoFillCaData.uniqueValue
    } : {};

    // Générer les deux versions directement dans la bonne langue
    const htmlFR = generateAuditHTML({ ...baseData, problems: problemsFR,  solutions: solutionsFR,  aiContent: aiData?.fr }, 'fr');
    const htmlCA = generateAuditHTML({ ...baseData, ...caOverrides, problems: problemsCA, solutions: solutionsCA, aiContent: aiData?.ca }, 'ca');

    document.getElementById('pdfContent').innerHTML = `
        <div id="pdfContentFR">${htmlFR}</div>
        <div id="pdfContentCA">${htmlCA}</div>
    `;

    loadingEl.classList.remove('active');
    loadingText.textContent = 'Génération en cours…';
    document.getElementById('result').classList.add('active');
    document.getElementById('generateBtn').disabled = false;
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

function resetForm() {
    if (confirm('Créer un nouvel audit ?')) {
        document.querySelectorAll('input, textarea, select').forEach(el => {
            if (el.type !== 'checkbox') el.value = '';
        });
        document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
        logoData = null;
        screenshotData = null;
        autoFillCaData = null;
        document.getElementById('screenshotPreview').innerHTML = '';
        document.getElementById('result').classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}