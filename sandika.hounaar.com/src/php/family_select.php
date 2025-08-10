<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

include_once "connection.php";

$selector2 = $connection->prepare("SELECT * FROM users WHERE NOT anon_id = ?");
$selector2->bind_param('s', $_SESSION['anon_id']);
$selector2->execute();
$result2 = $selector2->get_result();

if ($result2->num_rows > 0) {
    while ($row2 = $result2->fetch_assoc()) {
        // IMPORTANT: data-anon-id here
        echo '
        <div class="row all-users animate__animated animate__fadeInUp" data-anon-id="'.htmlspecialchars($row2['anon_id']).'">
            <div class="col-md-10">
                <div class="col">
                    <h5>'.htmlspecialchars($row2['username']).'
                        '.($row2['verification'] === "Yes" ? '<img src="/src/pics/ranks/verification.png" class="img-fluid mb-1" width="30" height="30" alt="Verified">' : '');
                        if ($row2['rank'] === "Rookie") {
                            echo '<img src="/src/pics/ranks/rookie.jpg" class="img-fluid mb-1" width="20" height="20" alt="Rookie">';
                        } elseif ($row2['rank'] === "Soldier") {
                            echo '<img src="/src/pics/ranks/soldier.jpg" class="img-fluid mb-1" width="20" height="20" alt="Soldier">';
                        } elseif ($row2['rank'] === "Captain") {
                            echo '<img src="/src/pics/ranks/captain.jpg" class="img-fluid mb-1" width="20" height="20" alt="Captain">';
                        } elseif ($row2['rank'] === "Sergeant") {
                            echo '<img src="/src/pics/ranks/sergeant.jpg" class="img-fluid mb-1" width="20" height="20" alt="Sergeant">';
                        } elseif ($row2['rank'] === "Lieutenant") {
                            echo '<img src="/src/pics/ranks/lieutenant.jpg" class="img-fluid mb-1" width="20" height="20" alt="Lieutenant">';
                        } elseif ($row2['rank'] === "Admiral") {
                            echo '<img src="/src/pics/ranks/admiral.jpg" class="img-fluid mb-1" width="20" height="20" alt="Admiral">';
                        } elseif ($row2['rank'] === "Bossman") {
                            echo '<img src="/src/pics/ranks/bossman.jpg" class="img-fluid mb-1" width="20" height="20" alt="Bossman">';
                        } else {
                            echo '<img src="/src/pics/ranks/default.jpg" class="img-fluid mb-1" width="20" height="20" alt="Rank">';
                        }
        echo '      </h5>
                </div>
                <div class="col">
                    <h6>Status: <span class="'.($row2['status'] == 'Offline' ? 'status-offline' : 'status-online').'">'.htmlspecialchars($row2['status']).'</span></h6>
                </div>
            </div>
        </div>
        <hr/>';
    }
} else {
    echo 'No users here yet';
}
