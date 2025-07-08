const riddle1 = document.querySelector(".riddle1"),
riddleBtn = riddle1.querySelector(".riddle1Btn");

const riddle2 = document.querySelector(".riddle2"),
riddleBtn2 = riddle2.querySelector(".riddle2Btn");

const riddle3 = document.querySelector(".riddle3"),
riddleBtn3 = riddle3.querySelector(".riddle3Btn");

const riddle4 = document.querySelector(".riddle4"),
riddleBtn4 = riddle4.querySelector(".riddle4Btn");

const riddle5 = document.querySelector(".riddle5"),
riddleBtn5 = riddle5.querySelector(".riddle5Btn");

const riddle6 = document.querySelector(".riddle6"),
riddleBtn6 = riddle6.querySelector(".riddle6Btn");

const riddle7 = document.querySelector(".riddle7"),
riddleBtn7 = riddle7.querySelector(".riddle7Btn");

const riddle8 = document.querySelector(".riddle8"),
riddleBtn8 = riddle8.querySelector(".riddle8Btn");

const riddle9 = document.querySelector(".riddle9"),
riddleBtn9 = riddle9.querySelector(".riddle9Btn");

const riddle10 = document.querySelector(".riddle10"),
riddleBtn10 = riddle10.querySelector(".riddle10Btn");

const riddle11 = document.querySelector(".riddle11"),
riddleBtn11 = riddle11.querySelector(".riddle11Btn");

const riddle12 = document.querySelector(".riddle12"),
riddleBtn12 = riddle12.querySelector(".riddle12Btn");

const riddle13 = document.querySelector(".riddle13"),
riddleBtn13 = riddle13.querySelector(".riddle13Btn");

const riddle14 = document.querySelector(".riddle14"),
riddleBtn14 = riddle14.querySelector(".riddle14Btn");

const riddle15 = document.querySelector(".riddle15"),
riddleBtn15 = riddle15.querySelector(".riddle15Btn");

const riddle16 = document.querySelector(".riddle16"),
riddleBtn16 = riddle16.querySelector(".riddle16Btn");

const riddle17 = document.querySelector(".riddle17"),
riddleBtn17 = riddle17.querySelector(".riddle17Btn");

const riddle18 = document.querySelector(".riddle18"),
riddleBtn18 = riddle18.querySelector(".riddle18Btn");

const riddle19 = document.querySelector(".riddle19"),
riddleBtn19 = riddle19.querySelector(".riddle19Btn");

const riddle20 = document.querySelector(".riddle20"),
riddleBtn20 = riddle20.querySelector(".riddle20Btn");





riddle1.onsubmit = (e)=>{
    e.preventDefault();
}

riddle2.onsubmit = (e)=>{
    e.preventDefault();
}

riddle3.onsubmit = (e)=>{
    e.preventDefault();
}

riddle4.onsubmit = (e)=>{
    e.preventDefault();
}


riddle5.onsubmit = (e)=>{
    e.preventDefault();
}

riddle6.onsubmit = (e)=>{
    e.preventDefault();
}

riddle7.onsubmit = (e)=>{
    e.preventDefault();
}

riddle8.onsubmit = (e)=>{
    e.preventDefault();
}

riddle9.onsubmit = (e)=>{
    e.preventDefault();
}

riddle10.onsubmit = (e)=>{
    e.preventDefault();
}

riddle11.onsubmit = (e)=>{
    e.preventDefault();
}

riddle12.onsubmit = (e)=>{
    e.preventDefault();
}

riddle13.onsubmit = (e)=>{
    e.preventDefault();
}

riddle14.onsubmit = (e)=>{
    e.preventDefault();
}

riddle15.onsubmit = (e)=>{
    e.preventDefault();
}

riddle16.onsubmit = (e)=>{
    e.preventDefault();
}

riddle17.onsubmit = (e)=>{
    e.preventDefault();
}

riddle18.onsubmit = (e)=>{
    e.preventDefault();
}

riddle19.onsubmit = (e)=>{
    e.preventDefault();
}

riddle20.onsubmit = (e)=>{
    e.preventDefault();
}

riddleBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle1.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle1_formData = new FormData(riddle1);
    xhr.send(riddle1_formData);
}

riddleBtn2.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle2.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle2_formData = new FormData(riddle2);
    xhr.send(riddle2_formData);
}


riddleBtn3.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle3.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle3_formData = new FormData(riddle3);
    xhr.send(riddle3_formData);
}

riddleBtn4.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle4.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle4_formData = new FormData(riddle4);
    xhr.send(riddle4_formData);
}

riddleBtn5.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle5.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle5_formData = new FormData(riddle5);
    xhr.send(riddle5_formData);
}



riddleBtn5.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle6.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle6_formData = new FormData(riddle6);
    xhr.send(riddle6_formData);
}


riddleBtn7.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle7.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle7_formData = new FormData(riddle7);
    xhr.send(riddle7_formData);
}


riddleBtn8.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle8.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle8_formData = new FormData(riddle8);
    xhr.send(riddle8_formData);
}


riddleBtn9.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle9.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle9_formData = new FormData(riddle9);
    xhr.send(riddle9_formData);
}

riddleBtn10.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle10.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle10_formData = new FormData(riddle10);
    xhr.send(riddle10_formData);
}

riddleBtn11.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle11.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle11_formData = new FormData(riddle11);
    xhr.send(riddle11_formData);
}

riddleBtn12.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle12.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle12_formData = new FormData(riddle12);
    xhr.send(riddle12_formData);
}

riddleBtn13.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle13.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle13_formData = new FormData(riddle13);
    xhr.send(riddle13_formData);
}

riddleBtn13.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle13.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle13_formData = new FormData(riddle13);
    xhr.send(riddle13_formData);
}

riddleBtn13.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle13.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle13_formData = new FormData(riddle13);
    xhr.send(riddle13_formData);
}

riddleBtn14.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle14.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle14_formData = new FormData(riddle14);
    xhr.send(riddle14_formData);
}


riddleBtn15.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle15.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle15_formData = new FormData(riddle15);
    xhr.send(riddle15_formData);
}

riddleBtn16.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle16.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle16_formData = new FormData(riddle16);
    xhr.send(riddle16_formData);
}

riddleBtn17.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle17.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle17_formData = new FormData(riddle17);
    xhr.send(riddle17_formData);
}

riddleBtn18.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle18.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle18_formData = new FormData(riddle18);
    xhr.send(riddle18_formData);
}


riddleBtn19.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle19.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle19_formData = new FormData(riddle19);
    xhr.send(riddle19_formData);
}

riddleBtn20.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/riddles/riddle20.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "Success"){
                iziToast.show({
                    color: 'green',
                    titleColor: '#004719',
                    theme: 'dark',
                    icon: 'bi bi-check',
                    iconColor: '#004719',
                    title: 'Success',
                    message: 'Riddle Solved. 15 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
              }
              else if(data === "You have already solved this riddle"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this riddle',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }

              else if(data === "Something went wrong updating the Riddles status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Riddles status',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong givin you the CPs. You need to contact the administrator"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong givin you the CPs. You need to contact the administrator',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the server for solving the Riddles"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Riddles',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "The answer is not correct"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'The answer is not correct',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Sesstion time out"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Sesstion time out.',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Session crashed . Reloading now"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Session crashed . Reloading now',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
                location.reload();
              }
              else{
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the servers to cooperate',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
          }
      }
    }
    let riddle20_formData = new FormData(riddle20);
    xhr.send(riddle20_formData);
}
