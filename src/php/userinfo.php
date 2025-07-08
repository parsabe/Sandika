<?php

session_start();
include_once "/home/hounaarc/sandika.hounaar.com/src/php/connection.php";

if(isset($_SESSION['anon_id'])){
    $anon_id = $_SESSION['anon_id'];

    $main_select = $connection->prepare("SELECT * FROM users WHERE NOT anon_id = ?");
    $main_select->bind_param("s",$anon_id);
    $main_select->execute();
    $res = $main_select->get_result();
    if($res->num_rows>0){
        $userInfo = $res->fetch_assoc();

        // Return the user information as a JSON response (you can customize this part)
        echo json_encode($userInfo);
    } else {
        echo 'No user found';
    }
} else {
    echo 'Session Timed out';
}

?>