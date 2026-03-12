// api/pipedrive-prospects.js — Récupère tous les prospects Pipedrive (pipeline 1)

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    if (req.method === 'OPTIONS') return res.status(200).end();

    const apiKey = process.env.PIPEDRIVE_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'PIPEDRIVE_API_KEY manquant' });

    try {
        let allDeals = [];
        let start = 0;
        let hasMore = true;

        while (hasMore && start <= 500) {
            const url = `https://api.pipedrive.com/v1/deals?api_token=${apiKey}&pipeline_id=1&status=open&limit=100&start=${start}`;
            const resp = await fetch(url);
            const data = await resp.json();
            allDeals = allDeals.concat(data.data || []);
            hasMore = data.additional_data?.pagination?.more_items_in_collection ?? false;
            start += 100;
        }

        const prospects = allDeals
            .filter(d => d.stage_id !== 7 && d.stage_id !== 8 && d.stage_id !== 9) // exclure tâches
            .map(d => ({
                id: d.id,
                title: d.title || '',
                org: d.org_name || '',
                person: d.person_name || '',
                stage_id: d.stage_id,
                add_time: d.add_time
            }));

        return res.status(200).json({ prospects });
    } catch (err) {
        console.error('Pipedrive error:', err.message);
        return res.status(500).json({ error: err.message });
    }
};
