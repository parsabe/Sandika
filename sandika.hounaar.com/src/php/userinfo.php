<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
require_once "connection.php";

header('Content-Type: text/html; charset=UTF-8');

function e($v)
{
    return htmlspecialchars((string) ($v ?? ''), ENT_QUOTES, 'UTF-8');
}
function has($v)
{
    return isset($v) && $v !== null && $v !== '';
}

function rankImg($r)
{
    $map = [
        'Rookie' => 'rookie.jpg',
        'Soldier' => 'soldier.jpg',
        'Captain' => 'captain.jpg',
        'Sergeant' => 'sergeant.jpg',
        'Lieutenant' => 'lieutenant.jpg',
        'Admiral' => 'admiral.jpg',
        'Bossman' => 'bossman.jpg',
    ];
    $file = $map[$r] ?? 'default.jpg';
    return '<img src="/src/pics/ranks/' . $file . '" class="img-fluid mb-1" width="20" height="20" alt="' . e($r) . '">';
}

$anon_id = $_POST['anon_id'] ?? '';
if ($anon_id === '') {
    http_response_code(400);
    echo '<div class="alert alert-danger">Missing user identifier.</div>';
    exit;
}



$q = $connection->prepare("SELECT * FROM users WHERE anon_id = ? LIMIT 1");
$q->bind_param('s', $anon_id);
$q->execute();
$res = $q->get_result();

if (!$res || $res->num_rows === 0) {
    http_response_code(404);
    echo '<div class="alert alert-warning">User not found.</div>';
    exit;
}

$user = $res->fetch_assoc();

// helpers for cleaner echo
$name = has($user['name']) ? e($user['name']) : 'Not Defined';
$username = has($user['username']) ? e($user['username']) : 'Not Defined';
$status = has($user['status']) ? e($user['status']) : 'Not Defined';
$bio = has($user['bio']) ? e($user['bio']) : 'Not Defined';
$location = has($user['location']) ? e($user['location']) : 'Not Defined';
$email = has($user['email']) ? e($user['email']) : '';
$website = has($user['website']) ? e($user['website']) : '';
$cp = has($user['CP']) ? e($user['CP']) : 'Not Defined';
$riddles_solved = has($user['riddles_solved']) ? e($user['riddles_solved']) : 'Not Defined';
$arkham_spirits = has($user['arkham_spirits']) ? e($user['arkham_spirits']) : 'Not Defined';
$rank = has($user['rank']) ? e($user['rank']) : 'Not Defined';
$joined_date = has($user['date']) ? e($user['date']) : 'Not Defined';
$verification = has($user['verification']) ? e($user['verification']) : 'Not Defined';
$birth = has($user['birth']) ? e($user['birth']) : 'Not Defined';
$github_verified = has($user['github_verified']) ? e($user['github_verified']) : 'Not Defined';
$twitter_account = has($user['twitter_account']) ? e($user['twitter_account']) : '';
$instagram_acc = has($user['instagram_account']) ? e($user['instagram_account']) : '';
$telegram_acc = has($user['telegram_account']) ? e($user['telegram_account']) : '';
$github_account = has($user['github_account']) ? e($user['github_account']) : '';
$btc_address = has($user['btc_address']) ? e($user['btc_address']) : 'Not Defined';
$eth_address = has($user['eth_address']) ? e($user['eth_address']) : 'Not Defined';

$date = $user['date'];
$new_date = new DateTime($date);
$formatted_date = $new_date->format('F Y');

?>
<div class="row animate__animated animate__fadeInUp">
    <div class="col-md-10">
        <div class="col mt-2">
            <h4>
                <?= $name ?>
                <?= ($user['verification'] ?? '') === 'Yes'
                    ? '<img src="/src/pics/ranks/verification.png" class="img-fluid mb-1" width="30" height="30" alt="Verified">'
                    : '' ?>
                <?= rankImg($user['rank'] ?? '') ?>
            </h4>
        </div>
        <div class="col ">
            <h6>@<?= $username ?></h6>
        </div>
    </div>
</div>

<div class="row mt-2 animate__animated animate__fadeInUp animate__delay-1s">
    <div class="col online">
        <h6>Status: <span class="status-online"><?= $status ?></span></h6>
    </div>
</div>

<table class="custom-table mt-3 animate__animated animate__fadeInUp animate__delay-2s">
    <tbody>
        <tr class="animate__animated animate__fadeInUp animate__delay-2s">
            <td>
                <h6>Bio <i class="fa-solid fa-info fa-fade" style="color: #dc8add;"></i></h6>
                <h5><?= $bio ?></h5>
            </td>
            <td>
                <h6>Location <i class="fas fa-location fa-spin" style="color: #57e389;"></i></h6>
                <h5><?= $location ?></h5>
            </td>
            <td>
                <h6>Email <i class="fa-regular fa-envelope fa-bounce" style="color: #e01b24;"></i></h6>
                <?php if ($email): ?>
                    <a href="mailto:<?= $email ?>">
                        <h5><?= $email ?></h5>
                    </a>
                <?php else: ?>
                    <h5>Not Defined</h5>
                <?php endif; ?>
            </td>
            <td>
                <h6>Website <i class="fa-solid fa-globe fa-beat" style="color: #99c1f1;"></i></h6>
                <?php if ($website): ?>
                    <h5><a href="https://<?= $website ?>" rel="noopener noreferrer"><?= $website ?></a></h5>
                <?php else: ?>
                    <h5>Not Defined</h5>
                <?php endif; ?>
            </td>
        </tr>

        <tr class="animate__animated animate__fadeInUp animate__delay-3s">
            <td>
                <h6>CPs <i class="fa-solid fa-trophy fa-spin fa-spin-reverse" style="color: #f8e45c;"></i></h6>
                <h5><?= $cp ?></h5>
            </td>
            <td>
                <h6>Riddles Solved <i class="fa-solid fa-question fa-beat" style="color: #26a269;"></i></h6>
                <h5><?= $riddles_solved ?> / 24</h5>
            </td>
            <td>
                <h6>Arkham Spirits Deciphered <i class="fa-solid fa-lock fa-beat-fade" style="color: #5dc9c4;"></i></h6>
                <h6><?= $arkham_spirits ?> / 24</h6>
            </td>
            <td>
                <h6>Rank <i class="fa-solid fa-award fa-fade" style="color: #e5a50a;"></i></h6>
                <h6><?= $rank ?></h6>
            </td>
        </tr>

        <tr class="animate__animated animate__fadeInUp animate__delay-4s">
            <td>
                <h6>Joined Date <i class="fa-solid fa-calendar fa-shake" style="color: #bf4040;"></i></h6>
                <h5><?= $formatted_date ?></h5>
            </td>
            <td>
                <h6>Verified <i class="fa-solid fa-badge-check fa-beat" style="color: #1250e2;"></i></h6>
                <h6><?= $verification ?></h6>
            </td>
            <td>
                <h6>BirthDay <i class="fas fa-birthday-cake fa-spin" style="color: #c061cb;"></i></h6>
                <h6><?= $birth ?></h6>
            </td>
            <td>
                <h6>Github Verified <i class="fa-brands fa-github fa-shake"></i></h6>
                <h6><?= $github_verified ?></h6>
            </td>
        </tr>

        <tr class="animate__animated animate__fadeInUp animate__delay-5s">
            <td>
                <h6>Twitter (𝕏) Account <i class="fa-brands fa-x-twitter fa-bounce" style="color: #b167ff;"></i><i
                        class="fa-brands fa-twitter fa-bounce" style="color: #3584e4;"></i></h6>
                <h6>
                    <?php if ($twitter_account): ?>
                        <a href="https://twitter.com/<?= $twitter_account ?>"
                            rel="noopener noreferrer">@<?= $twitter_account ?></a>
                    <?php else: ?>
                        Not Defined
                    <?php endif; ?>
                </h6>
            </td>
            <td>
                <h6>Instagram Account <i class="fa-brands fa-instagram fa-beat" style="color: #d11373;"></i></h6>
                <h6>
                    <?php if ($instagram_acc): ?>
                        <a href="https://instagram.com/<?= $instagram_acc ?>"
                            rel="noopener noreferrer">@<?= $instagram_acc ?></a>
                    <?php else: ?>
                        Not Defined
                    <?php endif; ?>
                </h6>
            </td>
            <td>
                <h6>Telegram Account <i class="fa-brands fa-telegram fa-shake" style="color: #1c71d8;"></i></h6>
                <h6>
                    <?php if ($telegram_acc): ?>
                        <a href="https://t.me/<?= $telegram_acc ?>" rel="noopener noreferrer">@<?= $telegram_acc ?></a>
                    <?php else: ?>
                        Not Defined
                    <?php endif; ?>
                </h6>
            </td>
            <td>
                <h6>Github Account <i class="fa-brands fa-github fa-flip" style="color: #e66100;"></i></h6>
                <h6>
                    <?php if ($github_account): ?>
                        <a href="https://github.com/<?= $github_account ?>"
                            rel="noopener noreferrer">@<?= $github_account ?></a>
                    <?php else: ?>
                        Not Defined
                    <?php endif; ?>
                </h6>
            </td>
        </tr>
    </tbody>
</table>

<div class="mt-3 animate__animated animate__fadeInUp animate__delay-5s">
    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#monetize_user">Monetize User</button>
</div>

<div class="modal fade" id="monetize_user" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-11">
                        <h3>Monetize </h3>
                    </div>
                    <div class="col-sm-1">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>

                <div>
                    BTC Address <i class="fab fa-btc fa-spin" style="color: #ff7800;"></i>:<h6><?= $btc_address ?></h6>
                </div>
                <div class="mt-2">
                    <h6>ETH Address <i class="fa-brands fa-ethereum fa-beat" style="color: #ffffff;"></i></h6>
                    <h6><?= $eth_address ?></h6>
                </div>

            </div>
        </div>
    </div>
</div>