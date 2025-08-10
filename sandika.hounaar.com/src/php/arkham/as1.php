<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/../php_error.log');

session_start();
include_once __DIR__ . "/../connection.php";

// 0️⃣ Session check
if (!isset($_SESSION['anon_id'])) {
    echo "Session crashed . Reloading now";
    exit;
}
$anon_id = $_SESSION['anon_id'];
$raw     = $_POST['as1'] ?? '';
$input   = trim(mysqli_real_escape_string($connection, $raw));
$solved  = 'Solved';

// 1️⃣ Validate answer against canonical text (case‑insensitive)
$ans = $connection->prepare("
    SELECT maintxt
      FROM arkham_spirits
     WHERE LOWER(TRIM(maintxt)) = LOWER(TRIM(?))
");
$ans->bind_param('s', $input);
$ans->execute();
$ans->bind_result($canonical);
if (! $ans->fetch()) {
    // no match → wrong answer
    echo "The answer is not correct";
    exit;
}
$ans->close();

// 2️⃣ Try to insert only if not already solved
$ins = $connection->prepare("
    INSERT INTO arkham_status (solver_id, subject, status)
    SELECT ?, ?, ?
      FROM DUAL
     WHERE NOT EXISTS (
         SELECT 1
           FROM arkham_status
          WHERE solver_id = ?
            AND subject   = ?
            AND status    = ?
     )
");
$ins->bind_param(
    'ssssss',
    $anon_id,   // 1
    $canonical, // 2
    $solved,    // 3
    $anon_id,   // 4 = same
    $canonical, // 5 = same
    $solved     // 6 = same
);
$ins->execute();

// if no row was inserted, it was already present
if ($ins->affected_rows === 0) {
    echo "You have already solved this Arkham Spirit";
    exit;
}
$ins->close();

// 3️⃣ Load current CP + counter
$user = $connection->prepare("
    SELECT CP, arkham_spirits
      FROM users
     WHERE anon_id = ?
");
$user->bind_param('s', $anon_id);
$user->execute();
$user->bind_result($cp, $count);
if (! $user->fetch()) {
    echo "Sesstion time out";
    exit;
}
$user->close();

// 4️⃣ Update CP and solved‐counter
$new_cp    = $cp + 20;
$new_count = $count + 1;

$upd = $connection->prepare("
    UPDATE users
       SET CP             = ?,
           arkham_spirits = ?
     WHERE anon_id        = ?
");
$upd->bind_param('iis', $new_cp, $new_count, $anon_id);
if (! $upd->execute()) {
    echo "Something went wrong updating the Arkham Deciphered status";
    exit;
}
$upd->close();

// 5️⃣ All done!
echo "Success";
