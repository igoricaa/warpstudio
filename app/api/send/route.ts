import { EmailTemplate } from '@/components/email-template';
import { rateLimit } from '@/utils/rate-limit';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export async function POST(req: any) {
  try {
    limiter.check(req, 3);

    const { name, email, message } = await req.json();

    if (!name || !email || !message || !email.includes('@')) {
      return Response.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Kontakt forma <contact@warpstudio.rs>',
      to: ['lazar@warpstudio.rs', 'stanisavljevic.igor4@gmail.com'],
      subject: 'Kontakt forma',
      // replyTo: email,
      react: EmailTemplate(name, email, message),
    });

    return Response.json({ success: true, data });
  } catch (error: any) {
    if (error.statusCode && error.statusCode === 429) {
      return Response.json({ error: 'Too many requests' }, { status: 429 });
    }
    return Response.json({ error });
  }
}
