<?php 


session_start();
include_once "/home/hounaarc/sandika.hounaar.com/src/php/connection.php";

$selector2 = $connection->prepare("SELECT * FROM users WHERE NOT anon_id = ?");
    $selector2->bind_param('s', $_SESSION['anon_id']);
    $selector2->execute();
    $result2 = $selector2->get_result();
    if($result2->num_rows>0){
        while($row2 = $result2->fetch_assoc()){
                    echo '       
                    
                    <div class="row all-users animate__animated animate__fadeInUp">
                    
                    <div class="col-md-10">
                        <div class="col">
                                <h5>'.$row2['username'].'
                                '.($row['verification'] === "Yes" ? '<img src="/src/pics/ranks/verification.png" class="img-fluid mb-1" width="30" height="30">' : '').'


                                ';
        
                                // Determine the rank and display the corresponding image
                            if ($row2['rank'] === "Rookie") {
                                echo '<img src="/src/pics/ranks/rookie.jpg" class="img-fluid mb-1" width="20" height="20">';
                            } elseif ($row2['rank'] === "Soldier") {
                                echo '<img src="/src/pics/ranks/soldier.jpg" class="img-fluid mb-1" width="20" height="20">';
                            } elseif ($row2['rank'] === "Captain") {
                                echo '<img src="/src/pics/ranks/captain.jpg" class="img-fluid mb-1" width="20" height="20">';
                            } elseif ($row2['rank'] === "Sergeant") {
                                echo '<img src="/src/pics/ranks/sergeant.jpg" class="img-fluid mb-1" width="20" height="20">';
                            } elseif ($row2['rank'] === "Lieutenant") {
                                echo '<img src="/src/pics/ranks/lieutenant.jpg" class="img-fluid mb-1" width="20" height="20">';
                            } elseif ($row2['rank'] === "Admiral") {
                                echo '<img src="/src/pics/ranks/admiral.jpg" class="img-fluid mb-1" width="20" height="20">';
                            } elseif ($row2['rank'] === "Bossman") {
                                echo '<img src="/src/pics/ranks/bossman.jpg" class="img-fluid mb-1" width="20" height="20">';
                            } else {
                                // Default image or handle other cases
                                echo '<img src="/src/pics/ranks/default.jpg" class="img-fluid mb-1" width="20" height="20">';
                            }
        
                            echo '
                                    
                                </h5>
                            </div>
                            <div class="col">
                            <h6>Status: <span class="'.($row2['status'] == 'Offline' ? 'status-offline' : 'status-online').'">'.$row2['status'].'</span></h6>                                        </div>
    
                    </div>
                </div>
    
                <hr/>';
        }
    } else {
        echo 'No users here yet';
    }
    
    
                    ?>