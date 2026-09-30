import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const TASKS = [
  'Új kamerarendszer',
  'Meglévő rendszer bővítése',
  'Kamerarendszer javítása',
  'Karbantartás',
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      message,
      task = 'Új kamerarendszer',
      property = '',
      location = '',
      brand,
      camera_count,
      consent,
    } = body;

    if (!name || !phone || !message || !location || !property) {
      return NextResponse.json(
        { error: 'A kötelező mezők kitöltése szükséges (név, telefon, település, ingatlan, leírás).' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json({ error: 'Az adatkezelési hozzájárulás szükséges.' }, { status: 400 });
    }

    if (!TASKS.includes(task)) {
      return NextResponse.json({ error: 'Érvénytelen feladat típus.' }, { status: 400 });
    }

    const adminEmail = process.env.SIROTECH_ADMIN_EMAIL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!adminEmail || !smtpHost || !smtpUser || !smtpPass) {
      console.log('Contact form payload received:', {
        name,
        phone,
        task,
        property,
        location,
        brand,
        camera_count,
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
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `Kamera Fehérvár – ${task} – ${location} – ${name}`;

    const brandRow =
      brand != null && brand !== ''
        ? `<tr><td style="padding:8px 12px 8px 0;font-weight:600;width:180px;color:#647383;">Gyártó:</td><td style="padding:8px 0;color:#17202A;">${escapeHtml(String(brand))}</td></tr>`
        : '';
    const countRow =
      camera_count != null && camera_count !== ''
        ? `<tr><td style="padding:8px 12px 8px 0;font-weight:600;width:180px;color:#647383;">Kamerák száma:</td><td style="padding:8px 0;color:#17202A;">${escapeHtml(String(camera_count))}</td></tr>`
        : '';

    const adminHtml = `
      <div style="font-family:'Source Sans 3',Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0E2238;padding:20px 24px;">
          <h1 style="margin:0;color:#FFFFFF;font-size:18px;font-weight:700;">Kamera Fehérvár – megkeresés</h1>
        </div>
        <div style="border-top:3px solid #0068F0;padding:24px;background:#F5F8FB;">
          <table style="border-collapse:collapse;font-size:14px;width:100%;">
            <tr><td style="padding:8px 12px 8px 0;font-weight:600;width:180px;color:#647383;">Feladat:</td><td style="padding:8px 0;color:#17202A;">${escapeHtml(task)}</td></tr>
            <tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#647383;">Ingatlan:</td><td style="padding:8px 0;color:#17202A;">${escapeHtml(property)}</td></tr>
            <tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#647383;">Település:</td><td style="padding:8px 0;color:#17202A;">${escapeHtml(location)}</td></tr>
            ${brandRow}
            ${countRow}
            <tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#647383;">Név:</td><td style="padding:8px 0;color:#17202A;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#647383;">Telefonszám:</td><td style="padding:8px 0;color:#17202A;">${escapeHtml(phone)}</td></tr>
            ${email ? `<tr><td style="padding:8px 12px 8px 0;font-weight:600;color:#647383;">E-mail:</td><td style="padding:8px 0;color:#17202A;">${escapeHtml(email)}</td></tr>` : ''}
            <tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;color:#647383;">Leírás:</td><td style="padding:8px 0;color:#17202A;">${escapeHtml(message)}</td></tr>
          </table>
        </div>
      </div>
    `;

    const adminText = `Kamera Fehérvár – megkeresés\n\nFeladat: ${task}\nIngatlan: ${property}\nTelepülés: ${location}\n${brand ? `Gyártó: ${brand}\n` : ''}${camera_count ? `Kamerák: ${camera_count}\n` : ''}Név: ${name}\nTelefon: ${phone}\n${email ? `E-mail: ${email}\n` : ''}Leírás: ${message}\n`;

    await transporter.sendMail({
      from: `"Kamera Fehérvár" <${smtpUser}>`,
      to: adminEmail,
      subject,
      text: adminText,
      html: adminHtml,
    });

    if (email) {
      const confirmBody =
        'Köszönjük, hogy írt a Kamera Fehérvár oldalán. Az elküldött adatokat megkaptuk. A feladat részleteinek egyeztetéséhez a megadott elérhetőségen jelentkezünk. Sürgős esetben hívjon minket: +36 70 273 5532.';

      const clientHtml = `
        <div style="font-family:'Source Sans 3',Arial,sans-serif;font-size:14px;color:#17202A;max-width:560px;">
          <div style="background:#0E2238;padding:16px 20px;margin-bottom:0;">
            <strong style="color:#FFFFFF;">Kamera Fehérvár</strong>
          </div>
          <div style="border-top:3px solid #0068F0;padding:20px;background:#FFFFFF;">
            <p style="margin:0 0 12px;line-height:1.55;">${confirmBody}</p>
            <p style="margin:20px 0 0;color:#647383;font-size:13px;">SIROTECH Kft.<br/>+36 70 273 5532<br/>szia@kamerafehervar.hu</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Kamera Fehérvár" <${smtpUser}>`,
        to: email,
        subject: 'Megkaptuk a megkeresését – Kamera Fehérvár',
        text: confirmBody,
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
