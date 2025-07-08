<?php


session_start();
include_once "/home/hounaarc/sandika.hounaar.com/src/php/connection.php";

$selector = $connection->prepare("SELECT * FROM users WHERE anon_id = ?");
$selector->bind_param('s', $_SESSION['anon_id']);
$selector->execute();
$result = $selector->get_result();
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){

        $date = $row['date'];
        $new_date = new DateTime($date);
        $formatted_date = $new_date->format('F Y');

        include_once "/home/hounaarc/sandika.hounaar.com/src/php/verification.php";
        
        include_once "/home/hounaarc/sandika.hounaar.com/src/php/userInfo_echo.php";

        
    

    }}
?>