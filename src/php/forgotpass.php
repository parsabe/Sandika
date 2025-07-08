<?php
session_start();
include_once "/home/hounaarc/sandika.hounaar.com/src/php/connection.php";

if (isset($_POST['forgot_username'])) {
    $username = mysqli_real_escape_string($connection,$_POST['forgot_username']);
    $date = date('Y-m-d H:i:s');


    $stmt = $connection->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    if($result->num_rows>0){
        while($row = $result->fetch_assoc()) {
            $_SESSION['anon_id'] = $row['anon_id'];
            echo 'success';
        }
    } else{
        echo 'Username not found.';
    }

}

?>