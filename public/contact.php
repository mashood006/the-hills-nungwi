<?php
/**
 * Majestic inquiry form handler — branded HTML email to mashood@sourcingsquare.com
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
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
  $v = isset($data[$key]) ? trim((string) $data[$key]) : '';
  return $v;
}

function clean_header($v) {
  return str_replace(["\r", "\n", "%0a", "%0d"], '', $v);
}

$name = field($data, 'name');
$email = field($data, 'email');
$phone = field($data, 'phone');
$interest = field($data, 'interest') ?: 'Not specified';
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

$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'www.majestic.tz';
$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'https';
$base = $scheme . '://' . $host;
$logo = $base . '/images/logo-majestic.png';
$site = $base . '/';

$to = 'mashood@sourcingsquare.com';
$subject = 'New inquiry — Majestic / The Hills';
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeInterest = htmlspecialchars($interestLabel, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$when = date('d M Y · H:i') . ' UTC';

$html = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{$subject}</title>
</head>
<body style="margin:0;padding:0;background:#0b1220;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0b1220;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="max-width:560px;width:100%;background:#111827;border:1px solid #243044;border-radius:4px;overflow:hidden;">
          <tr>
            <td style="background:#0a0a0a;padding:28px 32px;border-bottom:1px solid #c4a574;text-align:center;">
              <img src="{$logo}" alt="Majestic" width="200" style="display:inline-block;max-width:200px;height:auto;border:0;" />
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 8px;text-align:center;">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#c4a574;">New website inquiry</p>
              <h1 style="margin:0;font-size:26px;font-weight:normal;line-height:1.25;color:#f5ebe0;">Lead from majestic.tz</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 24px;text-align:center;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#9aa3b2;">{$when}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0b1220;border:1px solid #243044;border-radius:4px;">
                <tr>
                  <td style="padding:18px 20px;border-bottom:1px solid #243044;">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#c4a574;">Full name</p>
                    <p style="margin:0;font-size:17px;color:#f5ebe0;">{$safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 20px;border-bottom:1px solid #243044;">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#c4a574;">Email</p>
                    <p style="margin:0;font-size:17px;"><a href="mailto:{$safeEmail}" style="color:#f5ebe0;text-decoration:underline;">{$safeEmail}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 20px;border-bottom:1px solid #243044;">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#c4a574;">Phone</p>
                    <p style="margin:0;font-size:17px;color:#f5ebe0;">{$safePhone}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 20px;border-bottom:1px solid #243044;">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#c4a574;">I am a</p>
                    <p style="margin:0;font-size:17px;color:#f5ebe0;">{$safeInterest}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 20px;">
                    <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#c4a574;">Message</p>
                    <p style="margin:0;font-size:16px;line-height:1.55;color:#f5ebe0;">{$safeMessage}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;text-align:center;">
              <a href="mailto:{$safeEmail}?subject=Re:%20Your%20inquiry%20to%20Majestic" style="display:inline-block;padding:14px 28px;border:1px solid #c4a574;color:#c4a574;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;">Reply to lead</a>
            </td>
          </tr>
          <tr>
            <td style="background:#0a0a0a;padding:18px 32px;border-top:1px solid #243044;text-align:center;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6b7280;">
                <a href="{$site}" style="color:#c4a574;text-decoration:none;">www.majestic.tz</a>
                &nbsp;·&nbsp; Leading real estate developer in Zanzibar
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
  'X-Mailer: Majestic-ContactForm',
];

$ok = @mail($to, $subject, $html, implode("\r\n", $headers));

if (!$ok) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Mail failed']);
  exit;
}

echo json_encode(['ok' => true]);
