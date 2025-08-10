<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file inside your folder
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');


session_start();
include_once "connection.php";

if (isset($_SESSION['anon_id'])) {

    $anon_id = $_SESSION['anon_id'];
    $git = mysqli_real_escape_string($connection, $_POST['git']);
    $git_link = mysqli_real_escape_string($connection, $_POST['git_link']);
    $date = date("Y-m-d H:i:s");

    $expiration_date = date('Y-m-d', strtotime($date . ' + 1 week'));
    $user_info = $connection->prepare("SELECT * FROM users WHERE anon_id = ?");
    $user_info->bind_param("s", $anon_id);
    $user_info->execute();
    $user_info_result = $user_info->get_result();

    if ($user_info_result->num_rows > 0) {
        $row = $user_info_result->fetch_assoc();
        $name = $row['name'];
        $github_account = $row['github_account'];
        $github_verified = $row['github_verified'];

        if ($github_account === null) {
            echo 'You need to update your GitHub account first';
        } else {

            $parsedURL = parse_url($git_link);
            if ($parsedURL && isset($parsedURL['host']) && $parsedURL['host'] === 'github.com') {

                $path = trim($parsedURL['path'], '/');
                $parts = explode('/', $path);
                $usernameFromURL = $parts[0];

                $insert_statement = $connection->prepare("INSERT INTO git VALUES (?,?,?,?,?,?)");
                $insert_statement->bind_param("ssssss", $anon_id, $name, $git, $git_link, $date,$expiration_date);
                $exe = $insert_statement->execute();
                if ($usernameFromURL === $github_account) {
                    if ($exe) {
                        $plus_15 = $row['CP'] + 15;
                        $update_statement = $connection->prepare("UPDATE users SET CP = ? WHERE anon_id = ?");
                        $update_statement->bind_param("ss", $plus_15, $anon_id);
                        if ($update_statement->execute()) {
                            echo 'Success. 15 CP added';
                        } else {
                            echo 'Something went wrong adding the 15 CPs';
                        }
                    } else {
                        echo 'There was a problem posting the Git insight';
                    }
                } else {
                    $insert_statement->execute();
                    $plus_5 = $row['CP'] + 5;
                    $update_statement = $connection->prepare("UPDATE users SET CP = ? WHERE anon_id = ?");
                    $update_statement->bind_param("ss", $plus_5, $anon_id);
                    if ($update_statement->execute()) {
                        echo 'Success. 5 CP added';
                    } else {
                        echo 'Something went wrong adding the 5 CPs';
                    }
                }
            } else {
                echo 'Please enter a valid GitHub link';
            }
        }
    } else {
        echo 'User info crashed. Reloading now...';
    }

    $validation = $connection->prepare("DELETE FROM git WHERE expiration_date <= ?");
    $validation->bind_param("s",$date);
    $executer = $validation->execute();

} else {
    echo 'Session hijacked. Try again later...';
}

?>
