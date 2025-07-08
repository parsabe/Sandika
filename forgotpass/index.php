<?php
session_start();
include_once "/opt/lampp/src/php/connection.php";



?>
<?php include_once "/opt/lampp/src/php/header.php"; ?>
<?php 

$anon_id = $_SESSION['anon_id'];
$query = $connection->prepare("SELECT * FROM users WHERE anon_id =?")
->bind_param("s", $anon_id)->execute();
$result = $query->get_result();
if($result->num_rows>0){
    while($row = $result->fetch_assoc()) {


?>

<div class="container">
    <form action="" class="form-group form">
        <h4>You Username</h4>
        <input type="text" name="username" class="form control" 
        placeholder="<?php echo $row['username']; }} ?>" readonly><br/>

        <input type="password" name="new_password" required class="form-control" placeholder="Enter New password"><br/>

        <input type="password" name="r_new_password" required class="form-control" placeholder="Reapeat New password"><br/>

        <button class="btn submit btn-outline-primary">Update Password</button>


    </form>
</div>


<?php
 $anon_id = $_SESSION['anon_id'];
 $new_password = mysqli_real_escape_string($connection, $_POST['new_password']);
 $r_new_password = mysqli_real_escape_string($connection, $_POST['r_new_password']);

 if($new_password === $r_new_password){


   $hasher = password_hash($new_password, PASSWORD_BCRYPT);

   $updator = $connection->prepare("UPDATE users SET password =? WHERE anon_id =?");
   $updator->bind_param("ss", $hasher, $anon_id);
   $updator->execute();
   $result = $updator->get_result();
   if($result){
       echo '<script>alert("Password Updated")</script>';
   } else{
       echo '<script>alert("Something went wrong")</script>';
   }

 } else {
   echo '<script>alert("Passwords do not match")</script>';
 }
?>










<?php include_once "/opt/lampp/src/php/footer.php";?>