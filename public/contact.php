<?php
/**
 * Majestic inquiry form — branded HTML email (no FormSubmit).
 * Hosted on cPanel; called from www.majestic.tz via CORS.
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

// Always use production assets so logo loads in email clients
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
  ['Email', '<a href="mailto:' . $safeEmail . '" style="color:#1a1a1a;text-decoration:underline;">' . $safeEmail . '</a>'],
  ['Phone', $safePhone],
  ['I am a', $safeInterest],
  ['Message', $safeMessage],
];

$rowsHtml = '';
foreach ($rows as $i => $row) {
  $bg = $i % 2 === 0 ? '#faf8f4' : '#ffffff';
  $rowsHtml .= '<tr>'
    . '<td style="padding:14px 18px;width:34%;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#9a7b4f;vertical-align:top;border-bottom:1px solid #ebe4d8;background:' . $bg . ';">' . $row[0] . '</td>'
    . '<td style="padding:14px 18px;font-family:Georgia,\'Times New Roman\',serif;font-size:16px;line-height:1.5;color:#1a1a1a;vertical-align:top;border-bottom:1px solid #ebe4d8;background:' . $bg . ';">' . $row[1] . '</td>'
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
<body style="margin:0;padding:0;background:#e8e2d6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#e8e2d6;padding:36px 14px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:2px;overflow:hidden;box-shadow:0 8px 28px rgba(26,26,26,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:#0a0a0a;padding:30px 36px;text-align:center;border-bottom:2px solid #c4a574;">
              <img src="{$logo}" alt="Majestic" width="190" style="display:inline-block;max-width:190px;height:auto;border:0;" />
            </td>
          </tr>
          <!-- Intro -->
          <tr>
            <td style="padding:32px 36px 10px;text-align:center;background:#ffffff;">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#9a7b4f;">Website inquiry</p>
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:normal;line-height:1.25;color:#1a1a1a;">New lead received</h1>
              <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b7280;">{$when}</p>
            </td>
          </tr>
          <!-- Form layout -->
          <tr>
            <td style="padding:22px 28px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #ebe4d8;border-radius:2px;overflow:hidden;">
                <tr>
                  <td colspan="2" style="padding:12px 18px;background:#1a1a1a;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#c4a574;">
                    Inquiry details
                  </td>
                </tr>
                {$rowsHtml}
              </table>
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td style="padding:28px 36px 34px;text-align:center;">
              <a href="mailto:{$safeEmail}?subject=Re:%20Your%20inquiry%20to%20Majestic" style="display:inline-block;padding:14px 26px;background:#1a1a1a;color:#f5ebe0;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;">Reply to this lead</a>
            </td>
          </tr>
          <!-- Footer — Majestic only -->
          <tr>
            <td style="background:#0a0a0a;padding:22px 36px;text-align:center;">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#c4a574;">
                <a href="{$site}" style="color:#c4a574;text-decoration:none;">www.majestic.tz</a>
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8a8f98;line-height:1.5;">
                Leading real estate property developer in Zanzibar, Tanzania
              </p>
            </td>
          </tr>
        </table>
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
