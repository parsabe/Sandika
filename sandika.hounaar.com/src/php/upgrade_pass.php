<?php 

ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file inside your folder
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');

session_start();
include_once "connection.php";

if(isset($_POST['upgrade_pass']) && isset($_POST['r_upgrade_pass'])){

    $upgrade_pass = $_POST['upgrade_pass'];
    $r_upgrade_pass = $_POST['r_upgrade_pass'];

    $passwordRegex = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/";
    if(!preg_match($passwordRegex, $upgrade_pass)){
        echo "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&)";
    } else {
        if($upgrade_pass === $r_upgrade_pass){
            $stmt = $connection->prepare("SELECT * FROM users WHERE anon_id =?");
            $stmt->bind_param("s", $_SESSION['anon_id']);
            $stmt->execute();
            $result = $stmt->get_result();
            if($result->num_rows>0){
                while($row = $result->fetch_assoc()){
                    $hash = password_hash($upgrade_pass, PASSWORD_BCRYPT);
                    $updator = $connection->prepare("UPDATE users SET password =? WHERE anon_id =?");
                    $updator->bind_param("ss", $hash, $row['anon_id']);
                    $exe = $updator->execute();
                    if($exe){
                        echo 'success';
                    }
                    else{
                        echo 'Something is blocking the servers from updating password';
                    }
                }
            } else{
                echo 'No user found :(. refrshing now';
            }

        } else{
            echo 'The passwords must be matched';
        }

}
}


?>