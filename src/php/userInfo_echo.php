<?php
 echo ' 
        
        
 <div class="row animate__animated animate__fadeInUp">
 <div class="col-md-10">
     <div class="col mt-2">
         <h4>' . ($row['name'] !== null ? $row['name'] : 'Not Defined') . '

                 '.($row['verification'] === "Yes" ? '<img src="/src/pics/ranks/verification.png" class="img-fluid mb-1" width="30" height="30">' : '').'


                 ';

                 // Determine the rank and display the corresponding image
             if ($row['rank'] === "Rookie") {
                 echo '<img src="/src/pics/ranks/rookie.jpg" class="img-fluid mb-1" width="20" height="20">';
             } elseif ($row['rank'] === "Soldier") {
                 echo '<img src="/src/pics/ranks/soldier.jpg" class="img-fluid mb-1" width="20" height="20">';
             } elseif ($row['rank'] === "Captain") {
                 echo '<img src="/src/pics/ranks/captain.jpg" class="img-fluid mb-1" width="20" height="20">';
             } elseif ($row['rank'] === "Sergent") {
                 echo '<img src="/src/pics/ranks/sergent.jpg" class="img-fluid mb-1" width="20" height="20">';
             } elseif ($row['rank'] === "Lieutenant") {
                 echo '<img src="/src/pics/ranks/lieutenant.png" class="img-fluid mb-1" width="20" height="20">';
             } elseif ($row['rank'] === "Admiral") {
                 echo '<img src="/src/pics/ranks/admiral.jpg" class="img-fluid mb-1" width="20" height="20">';
             } elseif ($row['rank'] === "Bossman") {
                 echo '<img src="/src/pics/ranks/bossman.jpg" class="img-fluid mb-1" width="20" height="20">';
             } else {
                 // Default image or handle other cases
                 echo '<img src="/src/pics/ranks/default.jpg" class="img-fluid mb-1" width="20" height="20">';
             }

             

             echo '


                 </h4>
     </div>
     <div class="col ">
         <h6>@' . ($row['username'] !== null ? $row['username'] : 'Not Defined') . '</h6>
     </div>
 </div>
</div>
<div class="row mt-2 animate__animated animate__fadeInUp animate__delay-1s">
 <div class="col online">
     <h6>Status: <span class="status-online">' . ($row['status'] !== null ? $row['status'] : 'Not Defined') . '</span></h6>
 </div>
</div>
<div class="table-responsive">
<table class="custom-table mt-3 animate__animated animate__fadeInUp animate__delay-2s">
 <tbody>
     <tr class="animate__animated animate__fadeInUp animate__delay-2s">
         <td><h6>Bio <i class="fa-solid fa-info fa-fade" style="color: #dc8add;"></i></h6><h5>' . ($row['bio'] !== null ? $row['bio'] : 'Not Defined') . '</h5></td>
         <td><h6>Location <i class="fas fa-location fa-spin" style="color: #57e389;"></i></h6><h5>' . ($row['location'] !== null ? $row['location'] : 'Not Defined') . ' </h5></td>
         <td><h6>Email <i class="fa-regular fa-envelope fa-bounce" style="color: #e01b24;"></i></h6>' . ($row['email'] !== null ? '<a href="mailto:' . $row['email'] . '"><h5>' . $row['email'] . '</h5></a>' : '<h5>Not Defined</h5>') . '</td>
         <td><h6>Website <i class="fa-solid fa-globe fa-beat" style="color: #99c1f1;"></i></h6>' . ($row['website'] !== null ? '<h5><a href="https://' . $row['website'] . '">' . $row['website'] . '</a></h5>' : '<h5>Not Defined</h5>') . '</td>
     </tr>
     <tr class="animate__animated animate__fadeInUp animate__delay-3s">
         <td><h6>CPs <i class="fa-solid fa-trophy fa-spin fa-spin-reverse" style="color: #f8e45c;"></i></h6><h5>' . ($row['CP'] !== null ? $row['CP'] : 'Not Defined') . '</h5></td>
         <td><h6>Riddles Solved <i class="fa-solid fa-question fa-beat" style="color: #26a269;"></i></h6><h5>' . ($row['riddles_solved'] !== null ? $row['riddles_solved'] : 'Not Defined') . ' / 24</h5></td>
         <td><h6>Arkham Spirits Deciphered <i class="fa-solid fa-lock fa-beat-fade" style="color: #5dc9c4;"></i></h6><h6>' . ($row['arkham_spirits'] !== null ? $row['arkham_spirits'] : 'Not Defined') . '/ 24</h6></td>
         <td><h6>Rank <i class="fa-solid fa-award fa-fade" style="color: #e5a50a;"></i></h6><h6>' . ($row['rank'] !== null ? $row['rank'] : 'Not Defined') . '</h6></td>
     </tr>
     <tr class="animate__animated animate__fadeInUp animate__delay-4s">
         <td><h6>Joined Date <i class="fa-solid fa-calendar fa-shake" style="color: #bf4040;"></i></h6><h5>'.$formatted_date.'</h5></td>
         <td><h6>Verified <i class="fa-solid fa-badge-check fa-beat" style="color: #1250e2;"></i></h6><h6>' . ($row['verification'] !== null ? $row['verification'] : 'Not Defined') . '</h6></td>
         <td><h6>BirthDay <i class="fas fa-birthday-cake fa-spin" style="color: #c061cb;"></i></h6><h6>' . ($row['birth'] !== null ? $row['birth'] : 'Not Defined') . '</h6></td>
         <td><h6>Github Verified <i class="fa-brands fa-github fa-shake"></i></h6><h6>' . ($row['github_verified'] !== null ? $row['github_verified'] : 'Not Defined') . '</h6></td>
     </tr>
     <tr class="animate__animated animate__fadeInUp animate__delay-5s">
         <td><h6>Twitter Account <i class="fa-brands fa-x-twitter fa-bounce" style="color: #b167ff;"></i><i class="fa-brands fa-twitter fa-bounce" style="color: #3584e4;"></i></h6><h6>' . ($row['twitter_account'] !== null ? '<a href="https://twitter.com/' . $row['twitter_account'] . '">@' . $row['twitter_account'] . '</a>' : 'Not Defined') . '</h6></td>
         <td><h6>Instagram Account <i class="fa-brands fa-instagram fa-beat" style="color: #d11373;"></i></h6><h6>' . ($row['instagram_account'] !== null ? '<a href="https://instagram.com/' . $row['instagram_account'] . '">@' . $row['instagram_account'] . '</a>' : 'Not Defined') . '</h6></td>
         <td><h6>Telegram Account <i class="fa-brands fa-telegram fa-shake" style="color: #1c71d8;"></i></h6><h6>' . ($row['telegram_account'] !== null ? '<a href="https://t.me/' . $row['telegram_account'] . '">@' . $row['telegram_account'] . '</a>' : 'Not Defined') . '</h6></td>
         <td><h6>Github Account <i class="fa-brands fa-github fa-flip" style="color: #e66100;"></i></h6><h6>' . ($row['github_account'] !== null ? '<a href="https://github.com/' . $row['github_account'] . '">@' . $row['github_account'] . '</a>' : 'Not Defined') . '</h6></td>
     </tr>
 </tbody>
</table>
</div>
<div class="animate__animated animate__fadeInUp animate__delay-5s">
 <button class="btn mt-3 btn-info" data-bs-toggle="modal" data-bs-target="#update">Update Account Info <i class="bi bi-info-circle"></i></button>
 <button class="btn mt-3 btn-warning" data-bs-toggle="modal" data-bs-target="#monetize">Monetization $</button>
 <button class="btn mt-3 btn-light" data-bs-toggle="modal" data-bs-target="#change_password">Change Password</button>
 <a class="btn mt-3 btn-danger" href="/src/php/logout.php?q=' .$row['anon_id']. '">Logout <i class="bi bi-box-arrow-right"></i></a>
</div>

';







?>