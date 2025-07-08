document.addEventListener('DOMContentLoaded', function () {
    // Get all user containers
    var userContainers = document.querySelectorAll('.all-users');

    

    // Add click event listener to each user container
    userContainers.forEach(function (container) {
        container.addEventListener('click', function () {
            // Hide all sections
            hideAllSections();

            // Fetch user information
            var anonId = container.dataset.anonId; // Assuming you have data-anon-id attribute

            // Send an AJAX request to fetch user information
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Display the user information
                    var userInfo = JSON.parse(xhr.responseText);
                    displayUserInfo(userInfo);
                }
            };
            xhr.open('POST', '/src/php/userinfo.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('anon_id=' + anonId);
        });
    });




    // Function to hide all sections
    function hideAllSections() {
        document.getElementById("none").style.display = "none";
        document.getElementById("profile").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("rules").style.display = "none";
    }

    // Function to display user information
    function displayUserInfo(userInfo) {
        // Customize this part based on your HTML structure
        var userHtml = `
            <div class="row animate__animated animate__fadeInUp">
                <div class="col-md-10">
                    <div class="col mt-2">
                        <h4>${userInfo.name !== null ? userInfo.name : 'Not Defined'}
                            ${userInfo.verification === "Yes" ? '<img src="/src/pics/ranks/verification.png" class="img-fluid mb-1" width="30" height="30">' : ''}
                            `;

        // Determine the rank and display the corresponding image
        if (userInfo.rank === "Rookie") {
            userHtml += '<img src="/src/pics/ranks/rookie.jpg" class="img-fluid mb-1" width="20" height="20">';
        } else if (userInfo.rank === "Soldier") {
            userHtml += '<img src="/src/pics/ranks/soldier.jpg" class="img-fluid mb-1" width="20" height="20">';
        } else if (userInfo.rank === "Captain") {
            userHtml += '<img src="/src/pics/ranks/captain.jpg" class="img-fluid mb-1" width="20" height="20">';
        } else if (userInfo.rank === "Sergeant") {
            userHtml += '<img src="/src/pics/ranks/sergeant.jpg" class="img-fluid mb-1" width="20" height="20">';
        } else if (userInfo.rank === "Lieutenant") {
            userHtml += '<img src="/src/pics/ranks/lieutenant.jpg" class="img-fluid mb-1" width="20" height="20">';
        } else if (userInfo.rank === "Admiral") {
            userHtml += '<img src="/src/pics/ranks/admiral.jpg" class="img-fluid mb-1" width="20" height="20">';
        } else if (userInfo.rank === "Bossman") {
            userHtml += '<img src="/src/pics/ranks/bossman.jpg" class="img-fluid mb-1" width="20" height="20">';
        } else {
            // Default image or handle other cases
            userHtml += '<img src="/src/pics/ranks/default.jpg" class="img-fluid mb-1" width="20" height="20">';
        }

        userHtml += `
        </h4>
    </div>
    <div class="col ">
        <h6>@${userInfo.username !== null ? userInfo.username : 'Not Defined'}</h6>
    </div>
</div>
</div>
<div class="row mt-2 animate__animated animate__fadeInUp animate__delay-1s">
<div class="col online">
    <h6>Status: <span class="status-online">${userInfo.status !== null ? userInfo.status : 'Not Defined'}</span></h6>
    </div>
</div>
<table class="custom-table mt-3 animate__animated animate__fadeInUp animate__delay-2s">
<tbody>
    <tr class="animate__animated animate__fadeInUp animate__delay-2s">
        <td><h6>Bio <i class="fa-solid fa-info fa-fade" style="color: #dc8add;"></i></h6><h5>${userInfo.bio !== null ? userInfo.bio : 'Not Defined'}</h5></td>
        <td><h6>Location <i class="fas fa-location fa-spin" style="color: #57e389;"></i></h6><h5>${userInfo.location !== null ? userInfo.location : 'Not Defined'}</h5></td>
        <td><h6>Email <i class="fa-regular fa-envelope fa-bounce" style="color: #e01b24;"></i></h6>${userInfo.email !== null ? `<a href="mailto:${userInfo.email}"><h5>${userInfo.email}</h5></a>` : '<h5>Not Defined</h5>'}</td>
        <td><h6>Website <i class="fa-solid fa-globe fa-beat" style="color: #99c1f1;"></i></h6>${userInfo.website !== null ? `<h5><a href="https://${userInfo.website}">${userInfo.website}</a></h5>` : '<h5>Not Defined</h5>'}</td>
    </tr>
    <tr class="animate__animated animate__fadeInUp animate__delay-3s">
        <td><h6>CPs <i class="fa-solid fa-trophy fa-spin fa-spin-reverse" style="color: #f8e45c;"></i></h6><h5>${userInfo.CP !== null ? userInfo.CP : 'Not Defined'}</h5></td>
        <td><h6>Riddles Solved <i class="fa-solid fa-question fa-beat" style="color: #26a269;"></i></h6><h5>${userInfo.riddles_solved !== null ? userInfo.riddles_solved : 'Not Defined'} / 24</h5></td>
        <td><h6>Arkham Spirits Deciphered <i class="fa-solid fa-lock fa-beat-fade" style="color: #5dc9c4;"></i></h6><h6>${userInfo.arkham_spirits !== null ? userInfo.arkham_spirits : 'Not Defined'} / 24</h6></td>
        <td><h6>Rank <i class="fa-solid fa-award fa-fade" style="color: #e5a50a;"></i></h6><h6>${userInfo.rank !== null ? userInfo.rank : 'Not Defined'}</h6></td>
    </tr>
    <tr class="animate__animated animate__fadeInUp animate__delay-4s">
        <td><h6>Joined Date <i class="fa-solid fa-calendar fa-shake" style="color: #bf4040;"></i></h6><h5>${userInfo.joined_date !== null ? userInfo.joined_date : 'Not Defined'}</h5></td>
        <td><h6>Verified <i class="fa-solid fa-badge-check fa-beat" style="color: #1250e2;"></i></h6><h6>${userInfo.verification !== null ? userInfo.verification : 'Not Defined'}</h6></td>
        <td><h6>BirthDay <i class="fas fa-birthday-cake fa-spin" style="color: #c061cb;"></i></h6><h6>${userInfo.birth !== null ? userInfo.birth : 'Not Defined'}</h6></td>
        <td><h6>Github Verified <i class="fa-brands fa-github fa-shake"></i></h6><h6>${userInfo.github_verified !== null ? userInfo.github_verified : 'Not Defined'}</h6></td>
    </tr>
    <tr class="animate__animated animate__fadeInUp animate__delay-5s">
        <td><h6>Twitter (𝕏) Account <i class="fa-brands fa-x-twitter fa-bounce" style="color: #b167ff;"></i><i class="fa-brands fa-twitter fa-bounce" style="color: #3584e4;"></i></h6><h6>${userInfo.twitter_account !== null ? `<a href="https://twitter.com/${userInfo.twitter_account}">@${userInfo.twitter_account}</a>` : 'Not Defined'}</h6></td>
        <td><h6>Instagram Account <i class="fa-brands fa-instagram fa-beat" style="color: #d11373;"></i></h6><h6>${userInfo.instagram_account !== null ? `<a href="https://instagram.com/${userInfo.instagram_account}">@${userInfo.instagram_account}</a>` : 'Not Defined'}</h6></td>
        <td><h6>Telegram Account <i class="fa-brands fa-telegram fa-shake" style="color: #1c71d8;"></i></h6><h6>${userInfo.telegram_account !== null ? `<a href="https://t.me/${userInfo.telegram_account}">@${userInfo.telegram_account}</a>` : 'Not Defined'}</h6></td>
        <td><h6>Github Account <i class="fa-brands fa-github fa-flip" style="color: #e66100;"></i></h6><h6>${userInfo.github_account !== null ? `<a href="https://github.com/${userInfo.github_account}">@${userInfo.github_account}</a>` : 'Not Defined'}</h6></td>
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
            BTC Address <i class="fab fa-btc fa-spin" style="color: #ff7800;"></i>:<h6>${userInfo.btc_address !== null ? userInfo.btc_address : 'Not Defined'}</h6>
        </div>
        <div class="mt-2">
            <h6>ETH Address <i class="fa-brands fa-ethereum fa-beat" style="color: #ffffff;"></i></h6><h6>${userInfo.eth_address !== null ? userInfo.eth_address : 'Not Defined'}</h6>
        </div>
        
      </div>
    </div>
  </div>
</div>













`;

        // Insert the generated HTML into the user-info-section
        document.getElementById("user-info-section").innerHTML = userHtml;

        // Show the user-info-section
        document.getElementById("user-info-section").style.display = "block";
    }




});
