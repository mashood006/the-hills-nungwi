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
 */

var TO_EMAIL = 'mashood@sourcingsquare.com';
var LOGO_URL = 'https://www.majestic.tz/images/logo-majestic.png';
var SITE_URL = 'https://www.majestic.tz/';

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

    MailApp.sendEmail({
      to: TO_EMAIL,
      subject: subject,
      htmlBody: buildHtml_(name, email, phone, interestLabel, message, when),
      name: 'Majestic',
      replyTo: email,
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
    ['Email', '<a href="mailto:' + safeEmail + '" style="color:#1a3a8f;text-decoration:underline;">' + safeEmail + '</a>'],
    ['Phone', '<a href="tel:' + safePhone + '" style="color:#1a3a8f;text-decoration:underline;">' + safePhone + '</a>'],
    ['I am a', safeInterest],
    ['Message', safeMessage],
  ];

  var rowsHtml = '';
  for (var i = 0; i < rows.length; i++) {
    var bg = i % 2 === 0 ? '#ffffff' : '#f7f8fb';
    rowsHtml +=
      '<tr>' +
      '<td style="padding:14px 16px;width:32%;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#334155;border-bottom:1px solid #e8ecf2;background:' + bg + ';">' + rows[i][0] + '</td>' +
      '<td style="padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;border-bottom:1px solid #e8ecf2;background:' + bg + ';">' + rows[i][1] + '</td>' +
      '</tr>';
  }

  return (
    '<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f4f4f6;">' +
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f6;padding:32px 12px;">' +
    '<tr><td align="center">' +
    '<img src="' + LOGO_URL + '" alt="Majestic" width="160" style="display:block;margin:0 auto 18px;max-width:160px;border:0;" />' +
    '<table role="presentation" width="560" cellspacing="0" cellpadding="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e5e7eb;border-radius:4px;overflow:hidden;">' +
    '<tr><td style="background:#0b1f5b;padding:22px 28px;text-align:left;">' +
    '<h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.35;color:#ffffff;font-weight:700;">New inquiry received</h1>' +
    '</td></tr>' +
    '<tr><td style="padding:24px 28px 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#334155;">' +
    'Someone just submitted your form on <a href="' + SITE_URL + '" style="color:#1a3a8f;">www.majestic.tz</a>. Here are the details:' +
    '</td></tr>' +
    '<tr><td style="padding:8px 28px 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#94a3b8;">' + when + '</td></tr>' +
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
    '<strong>— Majestic</strong><br>' +
    '<span style="color:#64748b;font-size:12px;">Leading real estate property developer in Zanzibar, Tanzania</span>' +
    '</td></tr>' +
    '</table>' +
    '<p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#94a3b8;">' +
    '<a href="' + SITE_URL + '" style="color:#64748b;text-decoration:none;">www.majestic.tz</a>' +
    '</p>' +
    '</td></tr></table></body></html>'
  );
}

function json_(obj, status) {
  var out = ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
  return out;
}
