import { Resend } from 'resend';

const resend = new Resend('re_3MVnwguv_57GAsi8hYqTVt5e4g8Mey5GR');

export default async function handler(req, res) {
    const { body } = req;
    const { email, subject, message } = body;
    if (req.method === 'POST') {
        try {
            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: ['medaminemebarki@gmail.com'],
                subject: subject,
                react: <>
                    <p>from : {email}</p>
                    <p>message : {message}</p>
                </>,
            });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
