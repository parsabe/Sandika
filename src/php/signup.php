<?php
session_start();
include_once "/home/hounaarc/sandika.hounaar.com/src/php/connection.php";

if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['r_password'])) {
    $username = mysqli_real_escape_string($connection,$_POST['username']);
    $password = mysqli_real_escape_string($connection,$_POST['password']);
    $r_password = mysqli_real_escape_string($connection,$_POST['r_password']);
    $date = date('Y-m-d H:i:s');


    $passwordRegex = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/";
    if(!preg_match($passwordRegex, $password)){
        echo "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&)";
    } else {
        if ($password === $r_password) {
            $stmt = $connection->prepare("SELECT * FROM users WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $result = $stmt->get_result();
    
            if ($result->num_rows == 1) {
                echo 'Account already exists';
            } else {
                $anon_id = rand(time(), 1000000000);
                $hash = password_hash($password, PASSWORD_BCRYPT);
                $status = 'Online';
                $rank = 'Rookie';
    
                // Insert data using prepared statements
                $insertStmt = $connection->prepare("INSERT INTO users (anon_id, username, password, status, rank, date) 
                                                    VALUES (?, ?, ?, ?, ?, ?)");
                $insertStmt->bind_param("ssssss", $anon_id, $username, $hash, $status, $rank, $date);
                
                if ($insertStmt->execute()) {
                    // Check if the insert was successful
                    $signupCheckerStmt = $connection->prepare("SELECT * FROM users WHERE anon_id = ?");
                    $signupCheckerStmt->bind_param("s", $anon_id);
                    $signupCheckerStmt->execute();
                    $signupResult = $signupCheckerStmt->get_result();
    
                    if ($signupResult->num_rows > 0) {
                        while ($row = $signupResult->fetch_assoc()) {
                            $_SESSION['anon_id'] = $row['anon_id'];
                            setcookie('signup_cookie', $row['anon_id'], time() + 60 * 60 * 24 * 365 * 100); // 100 years
                            echo 'success';
                        }
                    } else {
                        echo 'Something went wrong in registration';
                    }
                } else {
                    echo 'Something is blocking the servers from registering';
                }
            }
        } else {
            echo 'Passwords do not match';
        }

    }
   
}
?>
