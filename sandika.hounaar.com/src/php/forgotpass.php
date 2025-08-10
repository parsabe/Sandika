<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file inside your folder
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');


require_once "connection.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "Invalid request";
    exit;
}

$email = trim($_POST['fpass_email'] ?? '');

if (empty($email)) {
    echo "Username not found."; // JS expects this as error
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Username not found."; // Fake error to avoid enumeration
    exit;
}

try {
    $stmt = $connection->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if (!$row = $result->fetch_assoc()) {
        echo "Username not found.";
        exit;
    }

    // Generate token
    $token = bin2hex(random_bytes(32));
    $expiry = date("Y-m-d H:i:s", time() + 3600);

    // Store or update token
    $insert = $connection->prepare("
        INSERT INTO password_resets (user_id, token, expires_at) 
        VALUES (?, ?, ?)
        ON DUPLICATE KEY UPDATE token=VALUES(token), expires_at=VALUES(expires_at)
    ");
    $insert->bind_param("iss", $row['id'], $token, $expiry);
    $insert->execute();

$resetLink = "https://sandika.hounaar.com/reset_password.php?token=$token";

$message = '
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #fff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        .logo {
            width: 150px;
            margin: 20px auto;
        }
        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 30px;
            background-color: #007bff;
            color: white !important;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .footer-logo {
            width: 120px;
            margin: 20px auto;
        }
        hr {
            margin: 30px 0;
            border: none;
            border-top: 1px solid #ddd;
        }
        .footer-text {
            font-size: 13px;
            color: #777;
        }
        .social-icons img {
            width: 24px;
            margin: 0 5px;
        }
        .links a {
            margin: 0 8px;
            text-decoration: none;
            color: #007bff;
            font-size: 13px;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://sandika.hounaar.com/src/pics/logo.jpg" alt="Sandika Logo" class="logo">

        <h2>Password Reset Request</h2>
        <p>We received a request to reset your password. Click the button below to reset it.</p>
        
        <a href="'.$resetLink.'" class="button">Reset Password</a>

        <hr>

        <p class="footer-text">
            If you did not request this password reset, you can safely ignore this email.<br>
            Your Sandika account remains secure.
        </p>

        <img src="https://sandika.hounaar.com/src/pics/logo.jpg" alt="Sandika Logo" class="footer-logo">

        <div class="links">
            <a href="#">Help & Contact</a> | 
            <a href="#">Security</a> | 
            <a href="#">Apps</a>
        </div>

        <p class="footer-text" style="margin-top:15px;">
            Sandika is committed to preventing fraudulent emails. Emails from Sandika will always contain your full name.<br>
            Learn to identify <a href="#">phishing</a> attempts.<br><br>
            Please do not reply to this email. To get in touch, visit Sandika Support.<br>
            Not sure why you received this email? <a href="#">Learn more</a><br><br>
            Sandika Social Media Inc., Berlin, Germany. Users are advised to read the 
            <a href="#">terms and conditions</a> carefully.
        </p>
    </div>
</body>
</html>
';


    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: no-reply@sandika.hounaar.com";

    @mail($email, $subject, $message, $headers);

    echo "success";
} catch (Exception $e) {
    echo "Something went wrong"; // JS will trigger generic toast
}
?>
