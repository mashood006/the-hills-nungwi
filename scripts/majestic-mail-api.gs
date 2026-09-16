/**
 * Majestic inquiry mail API — Google Apps Script
 *
 * Setup (2–3 min):
 * 1. https://script.google.com → New project
 * 2. Paste this file, Save
 * 3. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL
 * 5. Put it in project `.env` as:
 *    VITE_INQUIRY_MAIL_URL=https://script.google.com/macros/s/XXXX/exec
 * 6. Restart `npm run dev` / redeploy www
 *
 * After editing: Deploy → Manage deployments → Edit (pencil) →
 * Version: New version → Deploy
 */

var TO_EMAIL = 'mashood@sourcingsquare.com';
var SITE_URL = 'https://www.majestic.tz/';
/** Dark navy wordmark (inline) — readable on white email backgrounds */
var LOGO_B64 = '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';

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: 'Majestic inquiry mail' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    // Honeypot
    if (data.website) {
      return json_({ ok: true });
    }

    var name = String(data.name || '').trim();
    var email = String(data.email || '').trim();
    var phone = String(data.phone || '').trim();
    var interest = String(data.interest || data['I am a'] || 'Not specified').trim();
    var message = String(data.message || '—').trim();

    if (!name || !email || !phone) {
      return json_({ ok: false, error: 'Invalid fields' }, 422);
    }

    var interestMap = {
      investor: 'Investor',
      buyer: 'Prospective buyer',
      realtor: 'Realtor',
      press: 'Press',
      other: 'Other',
    };
    var interestLabel = interestMap[interest] || interest;
    var subject = 'New inquiry — ' + name + ' | Majestic';
    var when = Utilities.formatDate(new Date(), 'GMT', "EEE, dd MMM yyyy · HH:mm") + ' UTC';
    var logoBlob = Utilities.newBlob(
      Utilities.base64Decode(LOGO_B64),
      'image/png',
      'logo-majestic-dark.png'
    );

    MailApp.sendEmail({
      to: TO_EMAIL,
      subject: subject,
      htmlBody: buildHtml_(name, email, phone, interestLabel, message, when),
      name: 'Majestic',
      replyTo: email,
      inlineImages: { majesticLogo: logoBlob },
    });

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) }, 500);
  }
}

function doOptions() {
  return json_({ ok: true });
}

function buildHtml_(name, email, phone, interest, message, when) {
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  var safeName = esc(name);
  var safeEmail = esc(email);
  var safePhone = esc(phone);
  var safeInterest = esc(interest);
  var safeMessage = esc(message).replace(/\n/g, '<br>');

  var rows = [
    ['Full name', safeName],
    ['Email', '<a href="mailto:' + safeEmail + '" style="color:#0b1f5b;text-decoration:underline;">' + safeEmail + '</a>'],
    ['Phone', '<a href="tel:' + safePhone + '" style="color:#0b1f5b;text-decoration:underline;">' + safePhone + '</a>'],
    ['I am a', safeInterest],
    ['Message', safeMessage],
  ];

  var rowsHtml = '';
  for (var i = 0; i < rows.length; i++) {
    var bg = i % 2 === 0 ? '#ffffff' : '#f7f8fb';
    rowsHtml +=
      '<tr>' +
      '<td style="padding:14px 16px;width:32%;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#1e293b;border-bottom:1px solid #e8ecf2;background:' + bg + ';">' + rows[i][0] + '</td>' +
      '<td style="padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;border-bottom:1px solid #e8ecf2;background:' + bg + ';">' + rows[i][1] + '</td>' +
      '</tr>';
  }

  return (
    '<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f4f4f6;">' +
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f6;padding:32px 12px;">' +
    '<tr><td align="center">' +
    '<img src="cid:majesticLogo" alt="Majestic" width="160" style="display:block;margin:0 auto 18px;max-width:160px;border:0;" />' +
    '<table role="presentation" width="560" cellspacing="0" cellpadding="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e5e7eb;border-radius:4px;overflow:hidden;">' +
    '<tr><td style="background:#0b1f5b;padding:22px 28px;text-align:left;">' +
    '<h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.35;color:#ffffff;font-weight:700;">New inquiry received</h1>' +
    '</td></tr>' +
    '<tr><td style="padding:24px 28px 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1e293b;">' +
    'Someone just submitted your form on <a href="' + SITE_URL + '" style="color:#0b1f5b;font-weight:700;">www.majestic.tz</a>. Here are the details:' +
    '</td></tr>' +
    '<tr><td style="padding:8px 28px 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#64748b;">' + when + '</td></tr>' +
    '<tr><td style="padding:12px 28px 8px;">' +
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e8ecf2;border-radius:4px;overflow:hidden;">' +
    '<tr>' +
    '<th align="left" style="padding:12px 16px;background:#0b1f5b;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;">Name</th>' +
    '<th align="left" style="padding:12px 16px;background:#0b1f5b;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;">Value</th>' +
    '</tr>' +
    rowsHtml +
    '</table></td></tr>' +
    '<tr><td style="padding:28px;text-align:center;">' +
    '<a href="mailto:' + safeEmail + '?subject=Re:%20Your%20inquiry%20to%20Majestic" style="display:inline-block;padding:14px 28px;background:#0b1f5b;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;border-radius:4px;">Reply to lead</a>' +
    '</td></tr>' +
    '<tr><td style="padding:0 28px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;">' +
    '<strong style="color:#0b1f5b;">— Majestic</strong><br>' +
    '<span style="color:#475569;font-size:12px;">Leading real estate property developer in Zanzibar, Tanzania</span>' +
    '</td></tr>' +
    '</table>' +
    '<p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#64748b;">' +
    '<a href="' + SITE_URL + '" style="color:#334155;text-decoration:none;font-weight:600;">www.majestic.tz</a>' +
    '</p>' +
    '</td></tr></table></body></html>'
  );
}

function json_(obj, status) {
  var out = ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
  return out;
}
