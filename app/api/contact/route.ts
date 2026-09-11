import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, company, email, message, consent } = body;

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
      return NextResponse.json(
        { error: 'A szolgáltatás jelenleg nem elérhető. Kérjük, hívjon minket telefonon.' },
        { status: 500 }
      );
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

    const adminHtml = `
      <h2>Új visszahívás-kérelem — Kamera Fehérvár</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Név:</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Telefonszám:</td><td>${escapeHtml(phone)}</td></tr>
        ${company ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Cég:</td><td>${escapeHtml(company)}</td></tr>` : ''}
        ${email ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">E-mail:</td><td>${escapeHtml(email)}</td></tr>` : ''}
        ${message ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top;">Üzenet:</td><td>${escapeHtml(message)}</td></tr>` : ''}
      </table>
    `;

    const adminText = `Új visszahívás-kérelem — Kamera Fehérvár\n\nNév: ${name}\nTelefonszám: ${phone}\n${company ? `Cég: ${company}\n` : ''}${email ? `E-mail: ${email}\n` : ''}${message ? `Üzenet: ${message}\n` : ''}`;

    await transporter.sendMail({
      from: `"Kamera Fehérvár" <${smtpUser}>`,
      to: adminEmail,
      subject: 'Új visszahívás-kérelem — Kamera Fehérvár',
      text: adminText,
      html: adminHtml,
    });

    if (email) {
      const clientHtml = `
        <div style="font-family:sans-serif;font-size:14px;color:#16223B;max-width:560px;">
          <h2 style="color:#1C3461;font-family:'Archivo',sans-serif;">Köszönjük, hogy írott nekünk!</h2>
          <p>Megkaptuk a visszahívás-kérését. A megadott telefonszámon hamarosan felvesszük Önnel a kapcsolatot.</p>
          <p style="color:#6B7280;font-size:13px;">Kamera Fehérvár — SIROTECH Kft.<br/>+36 70 273 5532<br/>szia@kamerafehervar.hu</p>
        </div>
      `;
      const clientText = `Köszönjük, hogy írt nekünk!\n\nMegkaptuk a visszahívás-kérését. A megadott telefonszámon hamarosan felvesszük Önnel a kapcsolatot.\n\nKamera Fehérvár — SIROTECH Kft.\n+36 70 273 5532\nszia@kamerafehervar.hu`;

      await transporter.sendMail({
        from: `"Kamera Fehérvár" <${smtpUser}>`,
        to: email,
        subject: 'Megkaptuk a kérését — Kamera Fehérvár',
        text: clientText,
        html: clientHtml,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
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
