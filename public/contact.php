<?php
/**
 * Majestic inquiry form — branded HTML email (SendLayer-style card).
 * Prefer Google Apps Script endpoint for www (valid SSL + From: Majestic).
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$allowedOrigins = [
  'https://www.majestic.tz',
  'https://majestic.tz',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowedOrigins, true)) {
  header('Access-Control-Allow-Origin: ' . $origin);
  header('Vary: Origin');
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type, Accept');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
  $data = $_POST;
}

function field($data, $key) {
  return isset($data[$key]) ? trim((string) $data[$key]) : '';
}

function clean_header($v) {
  return str_replace(["\r", "\n", "%0a", "%0d"], '', $v);
}

$name = field($data, 'name');
$email = field($data, 'email');
$phone = field($data, 'phone');
$interest = field($data, 'interest') ?: field($data, 'I am a') ?: 'Not specified';
$message = field($data, 'message') ?: '—';
$honeypot = field($data, 'website');

if ($honeypot !== '') {
  echo json_encode(['ok' => true]);
  exit;
}

if ($name === '' || $email === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Invalid fields']);
  exit;
}

$interestLabels = [
  'investor' => 'Investor',
  'buyer' => 'Prospective buyer',
  'realtor' => 'Realtor',
  'press' => 'Press',
  'other' => 'Other',
];
$interestLabel = $interestLabels[$interest] ?? $interest;

$logo = 'https://www.majestic.tz/images/logo-majestic.png';
$site = 'https://www.majestic.tz/';
$to = 'mashood@sourcingsquare.com';
$subject = 'New inquiry — ' . $name . ' | Majestic';
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeInterest = htmlspecialchars($interestLabel, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$when = gmdate('D, d M Y · H:i') . ' UTC';

$rows = [
  ['Full name', $safeName],
  ['Email', '<a href="mailto:' . $safeEmail . '" style="color:#1a3a8f;text-decoration:underline;">' . $safeEmail . '</a>'],
  ['Phone', '<a href="tel:' . $safePhone . '" style="color:#1a3a8f;text-decoration:underline;">' . $safePhone . '</a>'],
  ['I am a', $safeInterest],
  ['Message', $safeMessage],
];

$rowsHtml = '';
foreach ($rows as $i => $row) {
  $bg = $i % 2 === 0 ? '#ffffff' : '#f7f8fb';
  $rowsHtml .= '<tr>'
    . '<td style="padding:14px 16px;width:32%;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#334155;border-bottom:1px solid #e8ecf2;background:' . $bg . ';">' . $row[0] . '</td>'
    . '<td style="padding:14px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;border-bottom:1px solid #e8ecf2;background:' . $bg . ';">' . $row[1] . '</td>'
    . '</tr>';
}

$html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{$subject}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f6;padding:32px 12px;">
    <tr>
      <td align="center">
        <img src="{$logo}" alt="Majestic" width="160" style="display:block;margin:0 auto 18px;max-width:160px;border:0;" />
        <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="max-width:560px;width:100%;background:#ffffff;border:1px solid #e5e7eb;border-radius:4px;overflow:hidden;">
          <tr>
            <td style="background:#0b1f5b;padding:22px 28px;">
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.35;color:#ffffff;font-weight:700;">New inquiry received</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#334155;">
              Someone just submitted your form on <a href="{$site}" style="color:#1a3a8f;">www.majestic.tz</a>. Here are the details:
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#94a3b8;">{$when}</td>
          </tr>
          <tr>
            <td style="padding:12px 28px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e8ecf2;border-radius:4px;overflow:hidden;">
                <tr>
                  <th align="left" style="padding:12px 16px;background:#0b1f5b;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;">Name</th>
                  <th align="left" style="padding:12px 16px;background:#0b1f5b;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;">Value</th>
                </tr>
                {$rowsHtml}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;text-align:center;">
              <a href="mailto:{$safeEmail}?subject=Re:%20Your%20inquiry%20to%20Majestic" style="display:inline-block;padding:14px 28px;background:#0b1f5b;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;border-radius:4px;">Reply to lead</a>
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0f172a;">
              <strong>— Majestic</strong><br />
              <span style="color:#64748b;font-size:12px;">Leading real estate property developer in Zanzibar, Tanzania</span>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#94a3b8;">
          <a href="{$site}" style="color:#64748b;text-decoration:none;">www.majestic.tz</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

$from = 'Majestic <sales@majestic.tz>';
$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/html; charset=UTF-8',
  'From: ' . $from,
  'Reply-To: ' . clean_header($name) . ' <' . clean_header($email) . '>',
  'X-Mailer: Majestic',
];

$ok = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $html, implode("\r\n", $headers));

if (!$ok) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Mail failed']);
  exit;
}

echo json_encode(['ok' => true]);
