import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, phone, email, service, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Drishti Nasha Mukti <onboarding@resend.dev>', // Update this if you have a custom domain
            to: ['Drishtinashamuktikendra@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Inquiry from Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Interested In:</strong> ${service}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f4f4f4; border-radius: 5px;">
            <strong>Message:</strong><br/>
            ${message}
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
