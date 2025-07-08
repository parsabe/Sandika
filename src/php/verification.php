<?php

if ($row['CP'] >= 50 && $row['verification'] !== 'Yes') {
    $verification = 'Yes';
    $verified_updator = $connection->prepare("UPDATE users SET verification = ? WHERE anon_id = ?");
    $verified_updator->bind_param("ss", $verification, $_SESSION['anon_id']);
    $ver_exe = $verified_updator->execute();
} else {
    if ($row['CP'] <= 20 && $row['rank'] !== 'Rookie') {
        $rookie_title = "Rookie";
        $rookie = $connection->prepare("UPDATE users SET rank =? WHERE anon_id =?");
        $rookie->bind_param("ss", $rookie_title, $_SESSION['anon_id']);
        $rookie->execute();
    } elseif ($row['CP'] > 20 && $row['CP'] <= 50 && $row['rank'] !== 'Soldier') {
        $soldier_title = "Soldier";
        $soldier = $connection->prepare("UPDATE users SET rank =? WHERE anon_id =?");
        $soldier->bind_param("ss", $soldier_title, $_SESSION['anon_id']);
        $soldier->execute();
    } elseif ($row['CP'] > 50 && $row['CP'] <= 100 && $row['rank'] !== 'Captain') {
        $captain_title = "Captain";
        $captain = $connection->prepare("UPDATE users SET rank =? WHERE anon_id =?");
        $captain->bind_param("ss", $captain_title, $_SESSION['anon_id']);
        $captain->execute();
    } elseif ($row['CP'] > 100 && $row['CP'] <= 150 && $row['rank'] !== 'Sergent') {
        $sergeant_title = "Sergent";
        $sergeant = $connection->prepare("UPDATE users SET rank =? WHERE anon_id =?");
        $sergeant->bind_param("ss", $sergeant_title, $_SESSION['anon_id']);
        $sergeant->execute();
    } elseif ($row['CP'] > 150 && $row['CP'] <= 400 && $row['rank'] !== 'Lieutenant') {
        $lieutenant_title = "Lieutenant";
        $lieutenant = $connection->prepare("UPDATE users SET rank =? WHERE anon_id =?");
        $lieutenant->bind_param("ss", $lieutenant_title, $_SESSION['anon_id']);
        $lieutenant->execute();
    } elseif ($row['CP'] > 400 && $row['CP'] <= 1000 && $row['rank'] !== 'Admiral') {
        $admiral_title = "Admiral";
        $admiral = $connection->prepare("UPDATE users SET rank =? WHERE anon_id =?");
        $admiral->bind_param("ss", $admiral_title, $_SESSION['anon_id']);
        $admiral->execute();
    } elseif ($row['CP'] > 1000 && $row['rank'] !== 'Bossman') {
        $bossman_title = "Bossman";
        $bossman = $connection->prepare("UPDATE users SET rank =? WHERE anon_id =?");
        $bossman->bind_param("ss", $bossman_title, $_SESSION['anon_id']);
        $bossman->execute();
    }
}

if ($row['username'] === $row['github_account'] && $row['github_verified'] !== 'Yes') {
    $github_verified = 'Yes';
    $github_verified_updator = $connection->prepare("UPDATE users SET github_verified = ? WHERE anon_id = ?");
    $github_verified_updator->bind_param("ss", $github_verified, $_SESSION['anon_id']);
    $github_ver_exe = $github_verified_updator->execute();
}


?>