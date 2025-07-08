<?php

session_start();
include_once "/home/hounaarc/sandika.hounaar.com/src/php/connection.php";
if(isset($_SESSION['anon_id'])){
    $q = mysqli_real_escape_string($connection,$_GET['q']);
    if(isset($q)){
        $anon_id = $_SESSION['anon_id'];
        $logouter = $connection->query("UPDATE users SET status = 'Offline' WHERE anon_id ='{$anon_id}'");
        if($logouter){
            session_unset();
            session_destroy();
            header('location: /');
        } 
    } else {
        header('Location: /portal');
    }

} else{
    header('location: /');    
}


?>