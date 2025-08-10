<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
ini_set('log_errors',   1);
ini_set('error_log',    __DIR__ . '/php_error.log');
// IMPORTANT: set session cookie scope BEFORE session_start()

session_start();
require_once "connection.php";

if (!isset($_POST['signup_username'], $_POST['signup_email'], $_POST['signup_password'])) {
    echo 'Missing required fields';
    exit;
}

$username = trim($_POST['signup_username']);
$email    = trim($_POST['signup_email']);
$password = trim($_POST['signup_password']);
$date     = date('Y-m-d H:i:s');

// 1. Validate password strength
$passwordRegex = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/";
if (!preg_match($passwordRegex, $password)) {
    echo "Password must be at least 8 characters long, contain uppercase, lowercase, digit, and a special character.";
    exit;
}

// 2a. Check if username exists
$stmt = $connection->prepare("SELECT 1 FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
if ($stmt->get_result()->num_rows > 0) {
    echo 'Username already exists';
    exit;
}

// 2b. Check if email exists
$stmt = $connection->prepare("SELECT 1 FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
if ($stmt->get_result()->num_rows > 0) {
    echo 'Email already in use';
    exit;
}

// 3. Create new user
$anon_id = bin2hex(random_bytes(8));    // 16‑char hex
$hash    = password_hash($password, PASSWORD_BCRYPT);
$status  = 'Online';
$rank    = 'Rookie';

$insert = $connection->prepare("
    INSERT INTO users (anon_id, username, email, password, `status`, `rank`, date)
    VALUES (?, ?, ?, ?, ?, ?, ?)
");
$insert->bind_param("sssssss", $anon_id, $username, $email, $hash, $status, $rank, $date);

if ($insert->execute()) {
    // Log them in immediately
    $_SESSION['anon_id'] = $anon_id;
    setcookie('login_cookie', $anon_id, [
        'expires'  => time() + 60*60*24*365*100,
        'path'     => '/',
        'secure'   => true,
        'httponly' => true,
        'samesite' => 'None'
    ]);
    echo 'success';
} else {
    echo 'Something is blocking the servers from registering';
}
