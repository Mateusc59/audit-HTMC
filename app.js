// APP.JS: Logique principale

let logoData = null;
let screenshotData = null;
let autoFillCaData = null;

// ─── SIDEBAR PIPEDRIVE ────────────────────────────────────────────────────────
const STAGES = {
    12: { name: 'Identifié',  color: '#6B7280' },
    2:  { name: 'Qualifié',   color: '#3B82F6' },
    3:  { name: 'Approché',   color: '#F59E0B' },
    4:  { name: 'RDV/Propal', color: '#10B981' },
    6:  { name: 'Poubelle',   color: '#EF4444' },
    10: { name: 'Non closé',  color: '#9CA3AF' },
    11: { name: 'FUP',        color: '#8B5CF6' },
    14: { name: 'ADS/SEO',    color: '#EC4899' }
};
// Stages visibles par défaut (Poubelle et Non closé masqués)
let activeStages = new Set([12, 2, 3, 4, 11, 14]);
let allProspects = [];
let prospectSearch = '';

function cleanProspectName(deal) {
    const title = deal.title || '';
    // Si le titre est une URL → utiliser le nom de la personne ou de l'org
    if (title.match(/^https?:\/\//)) {
        return deal.person || deal.org || title;
    }
    // Retirer les préfixes géographiques type "FR-", "TL-", "AND-", "CA-"
    return title.replace(/^[A-Z]{2,4}-\s*/, '').trim() || deal.person || deal.org || 'Sans nom';
}

async function loadProspects() {
    const list = document.getElementById('prospectList');
    list.innerHTML = '<div class="sidebar-loading">Chargement…</div>';
    try {
        const resp = await fetch('/api/pipedrive-prospects');
        if (!resp.ok) throw new Error('indisponible');
        const data = await resp.json();
        allProspects = data.prospects || [];
        document.getElementById('prospectCount').textContent = allProspects.length;
        buildStageFilters();
        renderProspects();
    } catch (err) {
        list.innerHTML = '<div class="sidebar-empty">⚠️ Ajouter<br>PIPEDRIVE_API_KEY<br>sur Vercel</div>';
    }
}

function buildStageFilters() {
    const container = document.getElementById('stageFilters');
    const counts = {};
    allProspects.forEach(p => { counts[p.stage_id] = (counts[p.stage_id] || 0) + 1; });

    container.innerHTML = Object.entries(STAGES)
        .filter(([id]) => counts[+id])
        .map(([id, s]) => `
            <button class="stage-pill ${activeStages.has(+id) ? 'active' : ''}"
                    data-stage="${id}"
                    style="--pill-color: ${s.color}">
                ${s.name} <span>${counts[+id]}</span>
            </button>`
        ).join('');

    container.querySelectorAll('.stage-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = +btn.dataset.stage;
            activeStages.has(id) ? activeStages.delete(id) : activeStages.add(id);
            btn.classList.toggle('active');
            renderProspects();
        });
    });
}

function renderProspects() {
    const list = document.getElementById('prospectList');
    const q = prospectSearch.toLowerCase();

    const filtered = allProspects.filter(p => {
        if (!activeStages.has(p.stage_id)) return false;
        if (q && !cleanProspectName(p).toLowerCase().includes(q)) return false;
        return true;
    });

    if (!filtered.length) {
        list.innerHTML = '<div class="sidebar-empty">Aucun prospect</div>';
        return;
    }

    list.innerHTML = filtered.map(p => {
        const name = cleanProspectName(p);
        const s = STAGES[p.stage_id] || { name: '?', color: '#888' };
        return `
            <div class="prospect-item" data-id="${p.id}">
                <span class="prospect-name">${name}</span>
                <span class="prospect-stage" style="background:${s.color}22;color:${s.color};border:1px solid ${s.color}44;">${s.name}</span>
            </div>`;
    }).join('');

    list.querySelectorAll('.prospect-item').forEach(el => {
        el.addEventListener('click', () => selectProspect(+el.dataset.id));
    });
}

async function selectProspect(id) {
    const p = allProspects.find(x => x.id === id);
    if (!p) return;

    // Sélection visuelle
    document.querySelectorAll('.prospect-item').forEach(el => el.classList.remove('selected'));
    document.querySelector(`.prospect-item[data-id="${id}"]`)?.classList.add('selected');

    // Remplir le nom immédiatement
    document.getElementById('companyName').value = cleanProspectName(p);

    // Récupérer les détails supplémentaires depuis Pipedrive
    try {
        const resp = await fetch(`/api/pipedrive-deal?id=${id}`);
        if (resp.ok) {
            const details = await resp.json();
            if (details.location) {
                document.getElementById('location').value = details.location;
            }
            if (details.website) {
                const websiteEl = document.getElementById('websiteUrl');
                if (websiteEl) websiteEl.value = details.website;
            }
        }
    } catch (err) {
        // Silencieux — les champs restent vides, l'utilisateur remplit manuellement
    }

    document.getElementById('companyName').focus();
}
// ─────────────────────────────────────────────────────────────────────────────

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeCheckboxes();
    initializeEventListeners();
    loadProspects();

    document.getElementById('prospectSearch').addEventListener('input', e => {
        prospectSearch = e.target.value;
        renderProspects();
    });
    document.getElementById('refreshProspects').addEventListener('click', loadProspects);
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
    const websiteUrl = document.getElementById('websiteUrl')?.value?.trim() || '';

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
            body: JSON.stringify({ companyName, industry, location, services, goals, uniqueValue, years, problems: problemsFR, solutions: solutionsFR, websiteUrl })
        });
        if (response.ok) {
            aiData = await response.json();
            console.log('✅ Contenu IA généré avec succès');
        } else {
            const errBody = await response.json().catch(() => ({}));
            console.warn('⚠️ API Claude erreur:', response.status, errBody);
        }
    } catch (err) {
        console.warn('⚠️ Génération IA indisponible, template standard utilisé:', err);
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