export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, phone, email, q1, q2, q3, q4, q5, night_match } = req.body;

    if (!phone) {
        return res.status(400).json({ error: 'Phone is required' });
    }

    const response = await fetch(
        `${process.env.SUPABASE_URL}/rest/v1/waitlist`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.SUPABASE_SERVICE_KEY,
                'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
                'Prefer': 'return=minimal',
            },
            body: JSON.stringify({
                name,
                phone,
                email,
                q1_timing:   q1,
                q2_dj:       q2,
                q3_social:   q3,
                q4_kills:    q4,
                q5_group:    q5,
                night_match,
            }),
        }
    );

    if (!response.ok) {
        const err = await response.text();
        return res.status(500).json({ error: err });
    }

    return res.status(200).json({ success: true });
}
