<?php

session_start();
include_once "/opt/lampp/htdocs/src/php/connection.php";

if(isset($_SESSION['anon_id'])){

    $anon_id = $_SESSION['anon_id'];
    $riddle_id = 6;
    $user_answer = mysqli_real_escape_string($connection,$_POST['riddle6']);

    $user_info = $connection->prepare("SELECT * FROM users WHERE anon_id = ?");
    $user_info->bind_param("s",$anon_id);
    $user_info->execute();
    $res = $user_info->get_result();
    if($res->num_rows>0){
        while($row = $res->fetch_assoc()){

            $cps = $row['CP'] + 15;
            $solver_counter = $row['riddles_solved'] + 1;


            $answer = $connection->prepare("SELECT answer FROM Riddles WHERE id = ?");
            $answer->bind_param('s',$riddle_id);
            $answer->execute();
            $res2 = $answer->get_result();
            if($res2->num_rows>0){
                 $solved = 'Solved';
                 $solving_checker = $connection->prepare("SELECT * FROM riddles_status
                                WHERE solver_id = ? AND riddle_id = ? AND subject = ? AND status = ?");
                 $solving_checker->bind_param('ssss',$anon_id,$riddle_id,$user_answer,$solved);
                 $solving_checker->execute();
                 $res3 =  $solving_checker->get_result();
                 if($res3->num_rows == 1){
                    echo 'You have already solved this riddle';
                 } else{   
                    $insertion = $connection->prepare("INSERT INTO riddles_status VALUES (?,?,?,?)");
                    $insertion->bind_param("ssss",$anon_id,$riddle_id,$user_answer,$solved);
                    $insert_exe = $insertion->execute();        
                        if($insert_exe){
                            $cp_updator = $connection->prepare("UPDATE users SET CP = ? WHERE anon_id = ?");
                            $cp_updator->bind_param("ss",$cps,$anon_id);
                            $update_exe = $cp_updator->execute();
                            if($update_exe){
                                $count_riddles_solved_updator = $connection->prepare("UPDATE users SET riddles_solved = ? WHERE anon_id = ?");
                                $count_riddles_solved_updator->bind_param("ss",$solver_counter,$anon_id);
                                $count_riddles_solved_updator_exe = $count_riddles_solved_updator->execute();
                                if($count_riddles_solved_updator_exe){
                                    echo 'Success';
                                } else{
                                    echo 'Something went wrong updating the Riddles status';
                                }
                            } else {
                                    echo 'Something went wrong givin you the CPs. You need to contact the administrator';    
                            }
                        } else {
                            echo 'Something is blocking the server for solving the Riddles';   
                        }
                        
                    }
                } else {
                    echo 'The answer is not correct';
                }
            }

        } else{
            echo 'Sesstion time out';
        }
    } else {
        echo 'Session crashed . Reloading now';
    }



?>
