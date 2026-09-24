import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      company,
      email,
      message,
      customer_type = 'Magánszemély',
      request_type = 'Új kamerarendszer',
      location = 'Székesfehérvár',
      consent,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Név és telefonszám megadása kötelező.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Az adatkezelési hozzájárulás szükséges.' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.SIROTECH_ADMIN_EMAIL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!adminEmail || !smtpHost || !smtpUser || !smtpPass) {
      // Return success in dev/demo environment if SMTP isn't configured, or log fallback
      console.log('Contact form payload received:', {
        name,
        phone,
        customer_type,
        request_type,
        location,
        company,
        email,
        message,
      });
      return NextResponse.json({ success: true, mode: 'demo' });
    }

    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true';

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `[KAMERA FEHÉRVÁR] ${request_type} | ${customer_type} | ${location}`;

    const adminHtml = `
      <h2>Új ajánlatkérés / megkeresés — Kamera Fehérvár</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;width:100%;max-width:600px;">
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;width:160px;">Feladat jellege:</td><td>${escapeHtml(request_type)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Ügyfél típusa:</td><td>${escapeHtml(customer_type)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Település:</td><td>${escapeHtml(location)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Név:</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Telefonszám:</td><td>${escapeHtml(phone)}</td></tr>
        ${company ? `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Cég:</td><td>${escapeHtml(company)}</td></tr>` : ''}
        ${email ? `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;">E-mail:</td><td>${escapeHtml(email)}</td></tr>` : ''}
        ${message ? `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top;">Üzenet:</td><td>${escapeHtml(message)}</td></tr>` : ''}
      </table>
    `;

    const adminText = `Új megkeresés — Kamera Fehérvár\n\nFeladat: ${request_type}\nÜgyfél: ${customer_type}\nTelepülés: ${location}\nNév: ${name}\nTelefonszám: ${phone}\n${company ? `Cég: ${company}\n` : ''}${email ? `E-mail: ${email}\n` : ''}${message ? `Üzenet: ${message}\n` : ''}`;

    await transporter.sendMail({
      from: `"Kamera Fehérvár" <${smtpUser}>`,
      to: adminEmail,
      subject,
      text: adminText,
      html: adminHtml,
    });

    if (email) {
      const clientHtml = `
        <div style="font-family:sans-serif;font-size:14px;color:#16223B;max-width:560px;">
          <h2 style="color:#1C3461;font-family:'Archivo',sans-serif;">Köszönjük megkeresését!</h2>
          <p>Megkaptuk az ajánlatkérését (<strong>${escapeHtml(request_type)}</strong> — ${escapeHtml(location)}). Munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott telefonszámon.</p>
          <hr style="border:none;border-top:1px solid #E5E7EB;margin:20px 0;"/>
          <p style="color:#6B7280;font-size:13px;">Kamera Fehérvár — SIROTECH Kft.<br/>+36 70 273 5532<br/>szia@kamerafehervar.hu</p>
        </div>
      `;
      const clientText = `Köszönjük megkeresését!\n\nMegkaptuk az ajánlatkérését (${request_type} — ${location}). Munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott telefonszámon.\n\nKamera Fehérvár — SIROTECH Kft.\n+36 70 273 5532\nszia@kamerafehervar.hu`;

      await transporter.sendMail({
        from: `"Kamera Fehérvár" <${smtpUser}>`,
        to: email,
        subject: 'Megkaptuk ajánlatkérését — Kamera Fehérvár',
        text: clientText,
        html: clientHtml,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Hiba történt a küldés során. Kérjük, próbálja újra, vagy hívjon minket telefonon.' },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
