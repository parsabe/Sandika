<?php

session_start();

include_once __DIR__ . "/connection.php";

// If user is NOT logged in → redirect to login
if (!isset($_SESSION['anon_id'])) {
    header("Location: https://sandika.hounaar.com/");
    exit;
}

// --- User is logged in ---
// Mark user as online
$anon_id = $_SESSION['anon_id'];
$updator = $connection->prepare("UPDATE `users` SET status = 'Online' WHERE `id` = ?");
$updator->bind_param("s", $anon_id);
$updator->execute();

?>