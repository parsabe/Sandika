<?php

$query = $_POST['rot'];

if(isset($query)){
    echo str_rot13($query);
} else {
    echo 'Converting txt failed';
}


?>