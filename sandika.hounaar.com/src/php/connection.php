<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database credentials from your IONOS panel
$host = "db5018220276.hosting-data.io";
$user = "dbu93837";
$password = "SabaParsa99";  // Keep the backslash if needed, otherwise just use the actual password
$database = "dbs14433613";    // Double-check this is correct (not visible in the screenshot, adjust if needed)

// Establish connection
$connection = new mysqli($host, $user, $password, $database);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

?>