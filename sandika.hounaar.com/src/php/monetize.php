<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');

session_start();
include_once "connection.php";

if (!isset($_SESSION['anon_id'])) {
    exit('User not found');
}

$anon_id = $_SESSION['anon_id'];

// Check required fields
if (!isset($_POST['btc'], $_POST['eth'])) {
    exit('There was a problem updating your monetize info');
}

$btc = trim($_POST['btc']);
$eth = trim($_POST['eth']);

// Validate BTC and ETH addresses
$btcValid = preg_match('/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/', $btc);
$ethValid = preg_match('/^0x[a-fA-F0-9]{40}$/', $eth); // Standard ETH format

if (!$btcValid && !$ethValid) {
    exit('The BTC or ETH address is not valid');
}

// Check if user exists
$stmt = $connection->prepare("SELECT 1 FROM users WHERE anon_id = ?");
$stmt->bind_param("s", $anon_id);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    $stmt->close();
    exit('User not found');
}
$stmt->close();

// Update user info
$update = $connection->prepare("
    UPDATE users 
    SET btc_address = ?, eth_address = ?
    WHERE anon_id = ?
");
$update->bind_param("sss", $btc, $eth, $anon_id);

if ($update->execute()) {
    echo 'success';
} else {
    echo 'There was a problem updating your monetize info';
}

$update->close();
