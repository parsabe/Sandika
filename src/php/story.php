<?php

session_start();
include_once "/home/hounaarc/sandika.hounaar.com/src/php/connection.php";
if(isset($_SESSION['anon_id'])){
    $anon_id = $_SESSION['anon_id'];
    $storyinput = mysqli_real_escape_string($connection,$_POST['post_story']);
    $date = date("Y-m-d H:i:s");
    $expiration_date = date('Y-m-d', strtotime($post_date . ' + 1 week'));

    $userInfo = $connection->prepare("SELECT * FROM users WHERE anon_id = ?");
    $userInfo->bind_param('s',$anon_id);
    $userInfo->execute();
    $res = $userInfo->get_result();
    if($res->num_rows>0){
        while($row = $res->fetch_assoc()) {
            $name = $row['name'];

            $post_story = $connection->prepare("INSERT INTO story VALUES (?,?,?,?,?)");
            $post_story->bind_param("sssss",$anon_id,$name,$storyinput,$date,$expiration_date);
            $exe = $post_story->execute();
            if($exe){
                echo 'success';
            } else {
                echo 'Something is blocking the server from posting your story';
            }
        }
    } else {
        echo 'User crashed, reload the webpage';
    }


    $validation = $connection->prepare("DELETE FROM story WHERE expiration_date <= ?");
    $validation->bind_param("s",$date);
    $executer = $validation->execute();


} else {
    echo 'Session Crashed. Reloading now';
}









?>