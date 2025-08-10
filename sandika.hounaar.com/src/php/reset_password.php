<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file inside your folder
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');

session_start();
require_once "connection.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['token'] ?? '';
    $new_password = $_POST['new_password'] ?? '';
    $r_new_password = $_POST['r_new_password'] ?? '';

    if (!$token || !$new_password || !$r_new_password) {
        echo "Missing fields";
        exit;
    }

    if ($new_password !== $r_new_password) {
        echo "Passwords do not match";
        exit;
    }

    $stmt = $connection->prepare("SELECT user_id, expires_at FROM password_resets WHERE token = ?");
    $stmt->bind_param("s", $token);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows !== 1) {
        echo "Invalid or expired token";
        exit;
    }

    $row = $result->fetch_assoc();
    if (strtotime($row['expires_at']) < time()) {
        echo "Token expired";
        exit;
    }

    $hashed = password_hash($new_password, PASSWORD_BCRYPT);
    $user_id = $row['user_id'];

    $update = $connection->prepare("UPDATE users SET password=? WHERE id=?");
    $update->bind_param("si", $hashed, $user_id);

    if ($update->execute()) {
        $connection->query("DELETE FROM password_resets WHERE user_id=".(int)$user_id);
        echo "success";
    } else {
        echo "Failed to update";
    }
}
