// APP.JS: Logique principale

let logoData = null;
let screenshotData = null;

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
    document.getElementById('services').value = template.services;
    document.getElementById('uniqueValue').value = template.uniqueValue;
    document.getElementById('mainGoals').value = template.mainGoals;

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

function generateAudit() {
    // Récupérer les données
    const companyName = document.getElementById('companyName').value.trim();
    const industry = document.getElementById('industry').value;
    const location = document.getElementById('location').value.trim();
    const services = document.getElementById('services').value.trim();
    const goals = document.getElementById('mainGoals').value.trim();
    const years = document.getElementById('yearsExperience').value;
    const uniqueValue = document.getElementById('uniqueValue').value;

    const problems = Array.from(document.querySelectorAll('.problem-checkbox:checked')).map(c => c.value);
    const solutions = Array.from(document.querySelectorAll('.solution-checkbox:checked')).map(c => c.value);

    // Validation
    if (!companyName || !industry || !location || !services || !goals) {
        alert('Remplissez tous les champs obligatoires (*)');
        return;
    }

    if (problems.length === 0) {
        alert('Sélectionnez au moins un problème');
        return;
    }

    // Show loading
    document.getElementById('loading').classList.add('active');
    document.getElementById('generateBtn').disabled = true;

    // Generate after short delay
    setTimeout(() => {
        const data = {
            companyName,
            industry,
            location,
            services,
            goals,
            years,
            uniqueValue,
            problems,
            solutions,
            logo: logoData,
            screenshot: screenshotData
        };

        // Générer version FR
        const htmlFR = generateAuditHTML(data);
        
        // Générer version CA (traduite)
        const htmlCA = generateAuditHTML(data);
        
        // Créer les deux containers
        const pdfContentContainer = document.getElementById('pdfContent');
        pdfContentContainer.innerHTML = `
            <div class="pdf-version-container">
                <h2 style="text-align: center; font-size: 1.5rem; font-weight: 900; margin: 30px 0 20px; color: var(--primary);">
                    📄 VERSION FRANÇAISE
                </h2>
                <div id="pdfContentFR">${htmlFR}</div>
            </div>
            
            <div class="pdf-version-container" style="margin-top: 80px;">
                <h2 style="text-align: center; font-size: 1.5rem; font-weight: 900; margin: 30px 0 20px; color: var(--primary);">
                    📄 VERSIÓ CATALANA
                </h2>
                <div id="pdfContentCA">${htmlCA}</div>
            </div>
        `;
        
        // Traduire la version CA
        const caContainer = document.getElementById('pdfContentCA');
        translateTextNodes(caContainer);

        document.getElementById('loading').classList.remove('active');
        document.getElementById('result').classList.add('active');
        document.getElementById('generateBtn').disabled = false;

        // Scroll to result
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

function resetForm() {
    if (confirm('Créer un nouvel audit ?')) {
        document.querySelectorAll('input, textarea, select').forEach(el => {
            if (el.type !== 'checkbox') el.value = '';
        });
        document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
        logoData = null;
        screenshotData = null;
        document.getElementById('screenshotPreview').innerHTML = '';
        document.getElementById('result').classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}