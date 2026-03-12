// api/pipedrive-deal.js — Récupère les détails d'un deal + organisation

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    if (req.method === 'OPTIONS') return res.status(200).end();

    const apiKey = process.env.PIPEDRIVE_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'PIPEDRIVE_API_KEY manquant' });

    const dealId = req.query.id;
    if (!dealId) return res.status(400).json({ error: 'id manquant' });

    try {
        // Fetch deal details
        const dealResp = await fetch(`https://api.pipedrive.com/v1/deals/${dealId}?api_token=${apiKey}`);
        const dealData = await dealResp.json();
        const deal = dealData.data;
        if (!deal) return res.status(404).json({ error: 'Deal introuvable' });

        let location = '';
        let website = '';
        let email = '';
        let phone = '';

        // Fetch organisation details if available
        if (deal.org_id?.value) {
            const orgResp = await fetch(`https://api.pipedrive.com/v1/organizations/${deal.org_id.value}?api_token=${apiKey}`);
            const orgData = await orgResp.json();
            const org = orgData.data;
            if (org) {
                // City from address
                location = org.address_locality || org.address_sublocality || '';
                if (!location && org.address) {
                    // Try to extract city from full address string
                    const parts = org.address.split(',');
                    if (parts.length >= 2) location = parts[parts.length - 2].trim();
                }
            }
        }

        // Fetch person details if available
        if (deal.person_id?.value) {
            const personResp = await fetch(`https://api.pipedrive.com/v1/persons/${deal.person_id.value}?api_token=${apiKey}`);
            const personData = await personResp.json();
            const person = personData.data;
            if (person) {
                email = person.email?.[0]?.value || '';
                phone = person.phone?.[0]?.value || '';
                // Website sometimes stored on person custom fields
                if (!website && person.im?.[0]?.value) website = person.im[0].value;
            }
        }

        // Check for website in deal custom fields (common Pipedrive setup)
        const customFields = Object.entries(deal).filter(([k, v]) =>
            k.length === 40 && typeof v === 'string' && v.match(/^https?:\/\//)
        );
        if (customFields.length > 0) website = customFields[0][1];

        return res.status(200).json({ location, website, email, phone });
    } catch (err) {
        console.error('Pipedrive deal error:', err.message);
        return res.status(500).json({ error: err.message });
    }
};
