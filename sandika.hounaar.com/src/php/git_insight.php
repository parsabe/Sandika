<?php 
ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file inside your folder
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');



include_once "connection.php";
$git = $connection->prepare("SELECT * FROM git");
$git->execute();
$git_res = $git->get_result();
if($git_res->num_rows>0){
    while($row4 = $git_res->fetch_assoc()){
        $git_date = $row4['git_date'];
        $new_git_date = new DateTime($git_date);
        $formatted_git_date = $new_git_date->format('F Y');
        echo '       
                    
        <div class="row all-stories animate__animated animate__fadeInUp">
        
        <div class="col-md-10">
            <div class="row">
                <div class="col-sm-1">
                    '.$row4['author_name'].'
                </div>
                <div class="col-md-4">
                    - ('.$formatted_git_date.')
                </div>
            </div>
            <div class="col">
                <h5>'.$row4['git_text'].'</h5>
            </div>
            <div class="col">
            <a href="'.$row4['git_link'].'">'.$row4['git_link'].'</a>
            </div>
    </div>
   <div class="mb-2"></div>

    <hr/>';
    }
} else {
    echo 'Nothing to show here. You can click on the Post Git Insight to post a Git Repo or Project. But before that,
    We recommend you to read the rules carefully. We do not accept any thing not following the rules.';
    
}



?>