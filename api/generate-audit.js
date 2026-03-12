// api/generate-audit.js — Vercel Serverless Function
// Génère un contenu d'audit ultra-personnalisé via Claude

const Anthropic = require('@anthropic-ai/sdk');

module.exports = async function handler(req, res) {
    // CORS pour dev local
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const {
        companyName, industry, location, services,
        goals, uniqueValue, years, problems, solutions
    } = req.body;

    if (!companyName || !industry) {
        return res.status(400).json({ error: 'Données manquantes' });
    }

    try {
        const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

        const prompt = `Tu es un expert en marketing digital et acquisition client pour PME locales. Génère un contenu d'audit web ultra-personnalisé pour cette entreprise.

DONNÉES ENTREPRISE :
- Nom : ${companyName}
- Secteur : ${industry}
- Ville : ${location || 'non précisée'}
- Expérience : ${years ? years + ' ans' : 'non précisé'}
- Services : ${services || 'non précisés'}
- Valeur unique : ${uniqueValue || 'non précisée'}
- Objectifs : ${goals || 'non précisés'}
- Problèmes identifiés : ${(problems || []).join(', ') || 'aucun'}
- Solutions envisagées : ${(solutions || []).join(', ') || 'aucune'}

CONSIGNES :
- Cite le nom "${companyName}" et la ville "${location || 'leur ville'}" dans les textes
- Réfère-toi directement aux services et problèmes mentionnés
- Les points doivent être actionnables et spécifiques, pas génériques
- Chaque corps de point : 55-75 mots maximum
- Intro : 35-45 mots, percutante, commence par une observation sur ${companyName}

Génère UNIQUEMENT ce JSON (sans markdown, sans explication) :
{
  "fr": {
    "intro": "...",
    "p1t": "...",
    "p1b": "...",
    "p2t": "...",
    "p2b": "...",
    "p3t": "...",
    "p3b": "...",
    "ops": ["...", "...", "...", "..."]
  },
  "ca": {
    "intro": "...",
    "p1t": "...",
    "p1b": "...",
    "p2t": "...",
    "p2b": "...",
    "p3t": "...",
    "p3b": "...",
    "ops": ["...", "...", "...", "..."]
  }
}`;

        const response = await client.messages.create({
            model: 'claude-opus-4-6',
            max_tokens: 2500,
            messages: [{ role: 'user', content: prompt }]
        });

        const text = response.content[0].text.trim();
        const aiData = JSON.parse(text);

        return res.status(200).json(aiData);
    } catch (err) {
        console.error('Erreur génération IA:', err.message);
        return res.status(500).json({ error: 'Génération IA indisponible' });
    }
};
