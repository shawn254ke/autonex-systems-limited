import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Send confirmation email to the user
    const { data, error } = await resend.emails.send({
      from: 'AutoNex Systems <noreply@www.autonexsystemsltd.com>',
      to: [email],
      subject: "We've received your message - AutoNex Systems",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="display: inline-flex; align-items: center; gap: 15px;">
              <img src="https://www.autonexsystemsltd.com/images/logo1.png" alt="AutoNex Logo" style="height: 50px; width: auto;" />
              <h1 style="color: white; margin: 0; display: inline;">AutoNex Systems Limited</h1>
            </div>

          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #333;">Hi ${name},</h2>
            
            <p style="font-size: 16px; color: #555; line-height: 1.6;">
              Thank you for contacting <strong>AutoNex Systems Limited</strong>.
            </p>

            <p style="font-size: 16px; color: #555; line-height: 1.6;">
              We've received your message and our team will get back to you within <strong>24 hours</strong>.
            </p>

            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #ff6b35;">Your Message</h3>
              ${company ? `<p style="margin: 5px 0;"><strong>Company:</strong> ${company}</p>` : ''}
              <p style="margin: 10px 0; padding: 15px; background-color: white; border-radius: 5px; color: #555;">
                ${message}
              </p>
            </div>

            <p style="font-size: 16px; color: #555; line-height: 1.6;">
              If you have any urgent inquiries, feel free to call us directly at 
              <a href="tel:+254205405400" style="color: #ff6b35; text-decoration: none;">+254 (0)20 5405400</a>.
            </p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="font-size: 16px; color: #333;">
                Best regards,<br/>
                <strong>The AutoNex Team</strong>
              </p>
            </div>
          </div>

          <div style="background-color: #333; padding: 20px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 5px 0;">
              AutoNex Systems Limited
            </p>
            <p style="color: #999; font-size: 12px; margin: 5px 0;">
              Industry 4.0 • IIoT Solutions • Smart Automation
            </p>
            <p style="color: #999; font-size: 12px; margin: 5px 0;">
              <a href="https://www.autonexsystemsltd.com" style="color: #ff6b35; text-decoration: none;">
                www.autonexsystemsltd.com
              </a>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
