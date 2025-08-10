<?php
// 0) Ensure session cookie works with SameSite=None
session_set_cookie_params([
  'lifetime' => 0,
  'path'     => '/',
  'domain'   => '',     // or your domain
  'secure'   => true,
  'httponly' => true,
  'samesite' => 'None'
]);
session_start();

// error logging
ini_set('display_errors', 1);
error_reporting(E_ALL);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__.'/arkham_error.log');

// 1) figure out anon_id (session first, then cookie)
$anon = $_SESSION['anon_id'] 
      ?? ($_COOKIE['login_cookie'] ?? null);
if (empty($anon) || $anon === '0') {
    exit('Session crashed. Reloading now');
}

// 2) grab the user’s answer
if (empty($_POST['answer'])) {
    exit('The answer is not correct');
}
$answer = trim($_POST['answer']);

// 3) connect
require_once __DIR__.'/connection.php';

// 4) look up spirit by exact maintxt
$stmt = $connection->prepare(
    "SELECT * FROM arkham_spirits WHERE maintxt = ?"
);
$stmt->bind_param("s", $answer);
$stmt->execute();
$res = $stmt->get_result();
if ($res->num_rows === 0) {
    exit('The answer is not correct');
}
$spirit = $res->fetch_assoc();
$stmt->close();

// 5) check already solved
$stmt = $connection->prepare(
    "SELECT 1 FROM arkham_status 
       WHERE solver_id = ? 
       AND status     = 'Solved'"
);
$stmt->bind_param("s", $anon);
$stmt->execute();
if ($stmt->get_result()->num_rows > 0) {
    exit('You have already solved this Arkham Spirit');
}
$stmt->close();

// 6) record + award 20 CP in a transaction
$connection->begin_transaction();
try {
    // insert status
    $ins = $connection->prepare("
      INSERT INTO arkham_status 
        (solver_id, subject, status) 
      VALUES (?,?,'Solved')
    ");
    $ins->bind_param("ss", $anon, $answer);
    $ins->execute();
    $ins->close();

    // update user CP & count
    $up = $connection->prepare("
      UPDATE users
         SET CP = CP + 20,
             arkham_spirits = arkham_spirits + 1
       WHERE anon_id = ?
    ");
    $up->bind_param("s", $anon);
    $up->execute();
    $up->close();

    $connection->commit();
    echo 'Success';
} catch (Exception $e) {
    $connection->rollback();
    // if you want separate messages, you could inspect $e->getMessage()
    exit('Something went wrong updating the Arkham Deciphered status');
}
