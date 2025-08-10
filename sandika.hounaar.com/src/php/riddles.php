<?php
// 1) Ensure session cookie is configured for SameSite=None; Secure
session_set_cookie_params([
  'lifetime' => 0,
  'path'     => '/',
  'domain'   => '',     // or your domain
  'secure'   => true,
  'httponly' => true,
  'samesite' => 'None'
]);
session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');

// DEBUG: dump what cookies & session we actually received
error_log(">> COOKIE: " . print_r($_COOKIE, true));
error_log(">> SESSION: " . print_r($_SESSION, true));


// … session_start() and debug/config above …

// pick a real anon_id: ignore empty or literal "0"
if (!empty($_SESSION['anon_id']) && $_SESSION['anon_id'] !== '0') {
    $anon_id = $_SESSION['anon_id'];
}
elseif (!empty($_COOKIE['login_cookie']) && $_COOKIE['login_cookie'] !== '0') {
    $anon_id = $_COOKIE['login_cookie'];
}
else {
    exit('Session time out');
}







require_once __DIR__ . '/connection.php';
if (!$connection) {
    exit('Something is blocking the server for solving the Riddles');
}

// 2) Grab anon_id from session OR from your login_cookie
$anon_id = $_SESSION['anon_id'] 
         ?? ($_COOKIE['login_cookie'] ?? null);

if (empty($anon_id)) {
    exit('Session time out');
}

// 3) Validate input
if (empty($_POST['riddle_id']) || empty($_POST['answer'])) {
    exit('No answer submitted');
}
$riddle_id   = (int) $_POST['riddle_id'];
$user_answer = trim($_POST['answer']);

// 4) Fetch user CP & solved count
$stmt = $connection->prepare("SELECT CP, riddles_solved FROM users WHERE anon_id = ?");
$stmt->bind_param("s", $anon_id);
$stmt->execute();
$user_data = $stmt->get_result()->fetch_assoc();
if (!$user_data) {
    exit('Session crashed. Reloading now');
}

// 5) Already solved?
$stmt = $connection->prepare("
  SELECT 1 FROM riddles_status 
   WHERE solver_id = ? AND riddle_id = ? AND status = 'Solved'
");
$stmt->bind_param("si", $anon_id, $riddle_id);
$stmt->execute();
if ($stmt->get_result()->num_rows > 0) {
    exit('You have already solved this riddle');
}

// 6) Fetch correct answer
$stmt = $connection->prepare("SELECT answer FROM riddles WHERE id = ?");
$stmt->bind_param("i", $riddle_id);
$stmt->execute();
$row = $stmt->get_result()->fetch_assoc();
if (!$row) {
    exit('Riddle not found');
}
$correct = trim($row['answer']);

// 7) Validate answer
if (strcasecmp($user_answer, $correct) !== 0) {
    exit('The answer is not correct');
}

// 8) Everything’s good: insert + update in a transaction
$connection->begin_transaction();
try {
    // record solve
    $ins = $connection->prepare("
      INSERT INTO riddles_status (solver_id, riddle_id, subject, status) 
      VALUES (?,?,?, 'Solved')
    ");
    $ins->bind_param("sis", $anon_id, $riddle_id, $user_answer);
    $ins->execute();

    // add CP + increment solved count
    $newCP    = $user_data['CP'] + 15;
    $newCount = $user_data['riddles_solved'] + 1;
    $up = $connection->prepare("
      UPDATE users 
         SET CP = ?, riddles_solved = ? 
       WHERE anon_id = ?
    ");
    $up->bind_param("iis", $newCP, $newCount, $anon_id);
    $up->execute();

    $connection->commit();
    echo 'Success';
} catch (Exception $e) {
    $connection->rollback();
    exit('Something went wrong updating the Riddles status');
}
