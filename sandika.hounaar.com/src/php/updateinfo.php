<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file inside your folder
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');

session_start();
include_once "connection.php";

// Function to validate a website link using regex
function validateWebsite($website) {
    // Define the regex pattern for a basic URL
    $pattern = "/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9-]*)*$/";

    // Use preg_match to test the website against the pattern
    return preg_match($pattern, $website);
}

if (isset($_SESSION['anon_id'])) {
    $anon_id = $_SESSION['anon_id'];

    // Create an array to store the columns to be updated
    $updateData = array();

    // List of fields that the user can update
    $fields = ['name', 'username', 'email', 'bio', 'website', 'location', 'birth', 'twitter_account', 'instagram_account', 'telegram_account', 'github_account'];

    foreach ($fields as $field) {
        if (isset($_POST['update_' . $field])) {
            $value = mysqli_real_escape_string($connection, $_POST['update_' . $field]);

            if ($field == 'website' && !validateWebsite($value)) {
                echo 'Invalid website URL';
                exit();
            }

            if ($value !== '') {
                // Include the column in the update query only if it's not empty
                $updateData[$field] = $value;
            }
        }
    }

    // Build the SET part of the SQL query
    $setClauses = array();
    foreach ($updateData as $column => $value) {
        $setClauses[] = "$column = '$value'";
    }

    if (!empty($setClauses)) {
        $setClause = implode(', ', $setClauses);

        // Build the UPDATE query
        $updateQuery = "UPDATE users SET $setClause WHERE anon_id = ?";

        // Prepare and execute the statemen
        $stmt = $connection->prepare($updateQuery);
        $stmt->bind_param("s", $anon_id);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            echo 'success';
        } else {
            echo 'There was a problem updating your info';
        }

        $stmt->close();
    } else {
        echo 'No fields to update';
    }
} else {
    echo 'Session timed out. Reload the page';
}
?>
