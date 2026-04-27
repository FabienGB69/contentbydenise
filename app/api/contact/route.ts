import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // RESEND_API_KEY must be set as an environment variable on Vercel
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, brand, email, instagram, projectType, date, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Content by Denise <onboarding@resend.dev>',
      to: 'denise_fabiano@outlook.com',
      replyTo: email,
      subject: `New inquiry from ${name}${brand ? ` — ${brand}` : ''}`,
      text: [
        `Name: ${name}`,
        `Brand: ${brand || '—'}`,
        `Email: ${email}`,
        `Instagram / Website: ${instagram || '—'}`,
        `Project type: ${projectType || '—'}`,
        `Desired date: ${date || '—'}`,
        '',
        `Message:`,
        message,
      ].join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
