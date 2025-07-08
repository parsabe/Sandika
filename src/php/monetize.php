<?php

session_start();
include_once "/home/hounaarc/sandika.hounaar.com/src/php/connection.php";

if (isset($_SESSION['anon_id'])) {
    $anon_id = $_SESSION['anon_id'];

    // Create an array to store the columns to be updated
    $updateData = array();

    if (isset($_POST['btc']) && isset($_POST['eth']) && isset($_POST['usdt'])) {

        $btc = mysqli_real_escape_string($connection, $_POST['btc']);
        $eth = mysqli_real_escape_string($connection, $_POST['eth']);

        if (preg_match('/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/', $btc) ||
            preg_match('/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/', $eth)) {

            $selector = $connection->prepare("SELECT * FROM users WHERE anon_id = ?");
            $selector->bind_param("s", $anon_id);
            $selector->execute();
            $res = $selector->get_result();

            if ($res->num_rows > 0) {
                while ($row = $res->fetch_assoc()) {
                    // Include the column in the update query only if it's not empty
                    $updateData['btc_address'] = $btc;
                    $updateData['eth_address'] = $eth;
                    $updateData['usdt_address'] = $usdt;

                    // Build the SET part of the SQL query
                    $setClauses = array();
                    foreach ($updateData as $column => $value) {
                        $setClauses[] = "$column = '$value'";
                    }

                    if (!empty($setClauses)) {
                        $setClause = implode(', ', $setClauses);

                        // Build the UPDATE query
                        $updateQuery = "UPDATE users SET $setClause WHERE anon_id = ?";

                        // Prepare and execute the statement
                        $stmt = $connection->prepare($updateQuery);
                        $stmt->bind_param("s", $anon_id);
                        $exe = $stmt->execute();

                        if ($exe) {
                            echo 'success';
                        } else {
                            echo 'There was a problem updating your monetize info';
                        }

                        $stmt->close();
                    }
                }
            } else {
                echo 'User not found';
            }
        } else {
            echo 'The BTC or ETH address is not valid';
        }
    }
}
?>
