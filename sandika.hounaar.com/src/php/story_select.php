<?php 
ini_set('display_errors', 1);
error_reporting(E_ALL);

// also log to a file inside your folder
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_error.log');

include_once __DIR__ . "/connection.php";

$select_story = $connection->prepare("SELECT * FROM story ");
$select_story->execute();
$story_res = $select_story->get_result();
if($story_res->num_rows>0){
    while($row3 = $story_res->fetch_assoc()){
        $post_date = $row['post_date'];
        $new_post_date = new DateTime($post_date);
        $formatted_post_date = $new_post_date->format('F Y');
        echo '       
                    
        <div class="row all-stories animate__animated animate__fadeInUp">
        
        <div class="col-md-10">
            <div class="row">
                <div class="col-sm-1">
                    '.$row3['author_name'].'
                </div>
                <div class="col-md-4">
                    - ('.$formatted_post_date.')
                </div>
            </div>
            <div class="col">
                <h4>'.$row3['story_text'].'</h4>
            </div>
    </div>

    <hr/>';
    }
} else {
    echo 'Nothing to show here. Click on the Post Stories from the menubar to post a story';
}



?>