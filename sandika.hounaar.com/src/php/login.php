<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Log errors to a file
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');
// IMPORTANT: set session cookie scope BEFORE session_start()

session_start();
include_once "connection.php";

if (isset($_POST['login_username']) && isset($_POST['login_password'])) {
    $username = mysqli_real_escape_string($connection, $_POST['login_username']);
    $password = $_POST['login_password']; // Don't escape the password

    $stmt = $connection->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            $status = 'Online';
            $updator = $connection->prepare("UPDATE users SET status = ? WHERE anon_id = ?");
            $updator->bind_param("ss", $status, $row['anon_id']);

            if ($updator->execute()) {
                $_SESSION['anon_id'] = $row['anon_id'];

                // after successful login or signup (where $anon_id is your 16‑char hex)
                setcookie(
                    'login_cookie',
                    $row['anon_id'],
                    [
                        'expires' => time() + 60 * 60 * 24 * 365 * 100,    // 100 years
                        'path' => '/',
                        'domain' => 'sandika.hounaar.com',        // your exact host
                        'secure' => true,                         // HTTPS only
                        'httponly' => true,
                        'samesite' => 'None'
                    ]
                );




                echo 'success';
            } else {
                echo 'An error occurred during login.';
            }
        } else {
            echo 'Invalid username or password.';
        }
    } else {
        echo 'Username or password is not correct.';
    }
}