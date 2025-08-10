<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file inside your folder
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');


session_start();
include_once "connection.php";
if(isset($_SESSION['anon_id'])){
    $q = mysqli_real_escape_string($connection,$_GET['q']);
    if(isset($q)){
        $anon_id = $_SESSION['anon_id'];
        $logouter = $connection->query("UPDATE users SET status = 'Offline' WHERE anon_id ='{$anon_id}'");
        if($logouter){
            session_unset();
            session_destroy();
            header('location: https://sandika.hounaar.com');
        } 
    } else {
        header('Location: /portal');
    }

} else{
    header('location: https://sandika.hounaar.com');    
}


?>