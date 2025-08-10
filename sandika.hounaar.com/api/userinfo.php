<?php
// /src/php/userinfo.php

// JSON-only output; no HTML errors
ini_set('display_errors', 0);
ini_set('html_errors', 0);
error_reporting(E_ALL);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');

// Turn PHP warnings/notices into exceptions so we can JSON them
set_error_handler(function ($severity, $message, $file, $line) {
    if (!(error_reporting() & $severity)) return;
    throw new ErrorException($message, 0, $severity, $file, $line);
});
set_exception_handler(function ($e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Server error', 'detail' => $e->getMessage()]);
    exit;
});

// Catch any stray output from includes
ob_start();

// Sessions
session_set_cookie_params([
  'path' => '/',
  'secure' => true,
  'httponly' => true,
  'samesite' => 'Lax'
]);
session_start();

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/../src/php/connection.php';
// Make mysqli throw (no HTML warnings)
if (function_exists('mysqli_report')) {
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
}

// Allow a quick GET health check (optional)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(['ok' => true, 'hint' => 'POST anon_id to this endpoint']);
    exit;
}

// Require POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Input
$anon_id = $_POST['anon_id'] ?? null;
if (!$anon_id) {
    http_response_code(400);
    echo json_encode(['error' => 'anon_id is required']);
    exit;
}


// Helper: pick first existing column value
function pick_first(array $row, array $candidates) {
    foreach ($candidates as $c) {
        if (array_key_exists($c, $row) && $row[$c] !== null && $row[$c] !== '') {
            return $row[$c];
        }
    }
    return null;
}

// Use SELECT * to avoid reserved-word issues and missing columns
$sql = "SELECT * FROM `users` WHERE `anon_id` = ? LIMIT 1";
$stmt = $connection->prepare($sql);
$stmt->bind_param('s', $anon_id);
$stmt->execute();
$res = $stmt->get_result();

if ($res && $res->num_rows === 1) {
    $row = $res->fetch_assoc();

    // Map to the keys your JS expects, with fallbacks
    $payload = [
        'name'              => $row['name']              ?? null,
        'verification'      => $row['verification']      ?? null,
        'rank'              => $row['rank']              ?? null,
        'username'          => $row['username']          ?? null,
        'status'            => $row['status']            ?? null,
        'bio'               => $row['bio']               ?? null,
        'location'          => $row['location']          ?? null,
        'email'             => $row['email']             ?? null,
        'website'           => $row['website']           ?? null,
        'CP'                => $row['CP']                ?? ($row['cp'] ?? null),
        'riddles_solved'    => $row['riddles_solved']    ?? ($row['riddles'] ?? null),
        'arkham_spirits'    => $row['arkham_spirits']    ?? ($row['arkham'] ?? null),

        // Common date column alternatives
        'joined_date'       => pick_first($row, ['joined_date','created_at','createdAt','reg_date','register_date','registered_at','join_date']),
        'birth'             => $row['birth']             ?? ($row['birthday'] ?? null),

        'github_verified'   => $row['github_verified']   ?? null,

        'twitter_account'   => $row['twitter_account']   ?? ($row['twitter'] ?? null),
        'instagram_account' => $row['instagram_account'] ?? ($row['instagram'] ?? null),
        'telegram_account'  => $row['telegram_account']  ?? ($row['telegram'] ?? null),
        'github_account'    => $row['github_account']    ?? ($row['github'] ?? null),

        'btc_address'       => $row['btc_address']       ?? ($row['btc'] ?? null),
        'eth_address'       => $row['eth_address']       ?? ($row['eth'] ?? null),
    ];

    // Ensure no stray output leaked
    $stray = ob_get_clean();
    if ($stray !== '') {
        error_log("Stray output in userinfo.php: " . substr($stray, 0, 500));
        http_response_code(500);
        echo json_encode(['error' => 'Server output error']);
        exit;
    }

    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
} else {
    ob_end_clean();
    http_response_code(404);
    echo json_encode(['error' => 'User not found']);
}
