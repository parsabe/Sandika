<?php

session_start();
include_once "/opt/lampp/htdocs/src/php/connection.php";

if(isset($_SESSION['anon_id'])){

    $anon_id = $_SESSION['anon_id'];
    $as_id = 3;
    $user_answer = mysqli_real_escape_string($connection,$_POST['as3']);

    $user_info = $connection->prepare("SELECT * FROM users WHERE anon_id = ?");
    $user_info->bind_param("s",$anon_id);
    $user_info->execute();
    $res = $user_info->get_result();
    if($res->num_rows>0){
        while($row = $res->fetch_assoc()){

            $cps = $row['CP'] + 20;
            $solver_counter = $row['arkham_spirits'] + 1;


            $answer = $connection->prepare("SELECT maintxt FROM arkham_spirits WHERE id = ?");
            $answer->bind_param('s',$as_id);
            $answer->execute();
            $res2 = $answer->get_result();
            if($res2->num_rows>0){
                 $solved = 'Solved';
                 $solving_checker = $connection->prepare("SELECT * FROM arkham_status
                                WHERE solver_id = ? AND arkham_id = ? AND subject = ? AND status = ?");
                 $solving_checker->bind_param('ssss',$anon_id,$as_id,$user_answer,$solved);
                 $solving_checker->execute();
                 $res3 =  $solving_checker->get_result();
                 if($res3->num_rows == 1){
                    echo 'You have already solved this Arkham Spirit';
                 } else{   
                    $insertion = $connection->prepare("INSERT INTO arkham_status VALUES (?,?,?,?)");
                    $insertion->bind_param("ssss",$anon_id,$as_id,$user_answer,$solved);
                    $insert_exe = $insertion->execute();        
                        if($insert_exe){
                            $cp_updator = $connection->prepare("UPDATE users SET CP = ? WHERE anon_id = ?");
                            $cp_updator->bind_param("ss",$cps,$anon_id);
                            $update_exe = $cp_updator->execute();
                            if($update_exe){
                                $count_riddles_solved_updator = $connection->prepare("UPDATE users SET arkham_spirits = ? WHERE anon_id = ?");
                                $count_riddles_solved_updator->bind_param("ss",$solver_counter,$anon_id);
                                $count_riddles_solved_updator_exe = $count_riddles_solved_updator->execute();
                                if($count_riddles_solved_updator_exe){
                                    echo 'Success';
                                } else{
                                    echo 'Something went wrong updating the Arkham Deciphered status';
                                }
                            } else {
                                    echo 'Something went wrong givin you the CPs. You need to contact the administrator';    
                            }
                        } else {
                            echo 'Something is blocking the server for solving the Ciphered Messages';   
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
