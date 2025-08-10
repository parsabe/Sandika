<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file inside your folder
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');





include_once "connection.php";

$selector = $connection->prepare("SELECT * FROM users WHERE anon_id = ?");
$selector->bind_param('s', $_SESSION['anon_id']);
$selector->execute();
$result = $selector->get_result();
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){

        $date = $row['date'];
        $new_date = new DateTime($date);
        $formatted_date = $new_date->format('F Y');

        include_once "verification.php";
        
        include_once "userInfo_echo.php";

        
    

    }}
?>