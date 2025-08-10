<?php
session_start();
if(isset($_SESSION['anon_id'])){
    header("location: /portal/");

}


?>

<?php include_once "src/php/header.php";?>
    <title>Sandika</title>
</head>
<body>


<div class="container">
    <div class="row">
        <div class="col welcome animate__animated animate__fadeIn animate__delay-1s">
            WELCOME TO
        </div>
    </div>
    <img src="/src/pics/logo.jpg" width="250" height="250" class="img-fluid rounded-circle animate__animated animate__fadeIn animate__delay-2s" alt="sandika">

    <div class="row mt-4">
        <div class="col titr animate__animated animate__fadeIn animate__delay-3s">𝐒  𝐀  𝐍  𝐃  𝐈  𝐊  𝐀</div>
    </div>
    <div class="row">
        <div class="col enter mt-3">
            <a href="" class="animate__animated animate__fadeIn animate__delay-5s" data-bs-toggle="modal" data-bs-target="#login">enter</a>
        </div>
    </div>
</div>
  
<?php include_once "src/php/footer.php"; ?>

