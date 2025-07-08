const as1 = document.querySelector(".as1"),
as1Btn = as1.querySelector(".as1Btn");

const as2 = document.querySelector(".as2"),
as2Btn = as2.querySelector(".as2Btn");

const as3 = document.querySelector(".as3"),
as3Btn = as3.querySelector(".as3Btn");

const as4 = document.querySelector(".as4"),
as4Btn = as4.querySelector(".as4Btn");

const as5 = document.querySelector(".as5"),
as5Btn = as5.querySelector(".as5Btn");

const as6 = document.querySelector(".as6"),
as6Btn = as6.querySelector(".as6Btn");

const as7 = document.querySelector(".as7"),
as7Btn = as7.querySelector(".as7Btn");

const as8 = document.querySelector(".as8"),
as8Btn = as8.querySelector(".as8Btn");

const as9 = document.querySelector(".as9"),
as9Btn = as9.querySelector(".as9Btn");



as1.onsubmit = (e)=>{
    e.preventDefault();
}

as2.onsubmit = (e)=>{
    e.preventDefault();
}

as3.onsubmit = (e)=>{
    e.preventDefault();
}

as4.onsubmit = (e)=>{
    e.preventDefault();
}

as5.onsubmit = (e)=>{
    e.preventDefault();
}


as6.onsubmit = (e)=>{
    e.preventDefault();
}


as7.onsubmit = (e)=>{
    e.preventDefault();
}


as8.onsubmit = (e)=>{
    e.preventDefault();
}


as9.onsubmit = (e)=>{
    e.preventDefault();
}





as1Btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/arkham/as1.php", true);
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
                    message: 'The Arkham Spirit Deciphered. 20 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
                const audio = new Audio('/src/audio/1.mp3');
                audio.volume = 0.5; // Adjust volume if needed
                audio.play();
              }
              else if(data === "You have already solved this Arkham Spirit"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this Arkham Sprit',
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
                    message: 'Sesstion time out',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong updating the Arkham Deciphered status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Arkham Deciphered status',
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
              else if(data === "Something is blocking the server for solving the Ciphered Messages"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Ciphered Messages',
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
                    message: 'The answer is not correct.',
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
    let as1_formData = new FormData(as1);
    xhr.send(as1_formData);
}


as2Btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/arkham/as2.php", true);
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
                    message: 'The Arkham Spirit Deciphered. 20 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
                const audio = new Audio('/src/audio/2.mp3');
                audio.volume = 0.5; // Adjust volume if needed
                audio.play();
              }
              else if(data === "You have already solved this Arkham Spirit"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this Arkham Sprit',
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
                    message: 'Sesstion time out',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong updating the Arkham Deciphered status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Arkham Deciphered status',
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
              else if(data === "Something is blocking the server for solving the Ciphered Messages"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Ciphered Messages',
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
                    message: 'The answer is not correct.',
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
    let as2_formData = new FormData(as2);
    xhr.send(as2_formData);
}



as3Btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/arkham/as3.php", true);
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
                    message: 'The Arkham Spirit Deciphered. 20 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
                const audio = new Audio('/src/audio/3.mp3');
                audio.volume = 0.5; // Adjust volume if needed
                audio.play();
              }
              else if(data === "You have already solved this Arkham Spirit"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this Arkham Sprit',
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
                    message: 'Sesstion time out',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong updating the Arkham Deciphered status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Arkham Deciphered status',
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
              else if(data === "Something is blocking the server for solving the Ciphered Messages"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Ciphered Messages',
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
                    message: 'The answer is not correct.',
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
    let as3_formData = new FormData(as3);
    xhr.send(as3_formData);
}

as4Btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/arkham/as4.php", true);
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
                    message: 'The Arkham Spirit Deciphered. 20 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
                const audio = new Audio('/src/audio/4.mp3');
                audio.volume = 0.5; // Adjust volume if needed
                audio.play();
              }
              else if(data === "You have already solved this Arkham Spirit"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this Arkham Sprit',
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
                    message: 'Sesstion time out',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong updating the Arkham Deciphered status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Arkham Deciphered status',
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
              else if(data === "Something is blocking the server for solving the Ciphered Messages"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Ciphered Messages',
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
                    message: 'The answer is not correct.',
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
    let as3_formData = new FormData(as3);
    xhr.send(as3_formData);
}

as5Btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/arkham/as5.php", true);
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
                    message: 'The Arkham Spirit Deciphered. 20 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
                const audio = new Audio('/src/audio/5.mp3');
                audio.volume = 0.5; // Adjust volume if needed
                audio.play();
              }
              else if(data === "You have already solved this Arkham Spirit"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this Arkham Sprit',
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
                    message: 'Sesstion time out',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong updating the Arkham Deciphered status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Arkham Deciphered status',
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
              else if(data === "Something is blocking the server for solving the Ciphered Messages"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Ciphered Messages',
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
                    message: 'The answer is not correct.',
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
    let as5_formData = new FormData(as5);
    xhr.send(as5_formData);
}

as6Btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/arkham/as6.php", true);
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
                    message: 'The Arkham Spirit Deciphered. 20 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
                const audio = new Audio('/src/audio/6.mp3');
                audio.volume = 0.5; // Adjust volume if needed
                audio.play();
              }
              else if(data === "You have already solved this Arkham Spirit"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this Arkham Sprit',
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
                    message: 'Sesstion time out',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong updating the Arkham Deciphered status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Arkham Deciphered status',
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
              else if(data === "Something is blocking the server for solving the Ciphered Messages"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Ciphered Messages',
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
                    message: 'The answer is not correct.',
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
    let as6_formData = new FormData(as6);
    xhr.send(as6_formData);
}

as7Btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/arkham/as7.php", true);
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
                    message: 'The Arkham Spirit Deciphered. 20 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
                const audio = new Audio('/src/audio/7.mp3');
                audio.volume = 0.5; // Adjust volume if needed
                audio.play();
              }
              else if(data === "You have already solved this Arkham Spirit"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this Arkham Sprit',
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
                    message: 'Sesstion time out',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong updating the Arkham Deciphered status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Arkham Deciphered status',
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
              else if(data === "Something is blocking the server for solving the Ciphered Messages"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Ciphered Messages',
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
                    message: 'The answer is not correct.',
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
    let as7_formData = new FormData(as7);
    xhr.send(as7_formData);
}



as8Btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/arkham/as8.php", true);
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
                    message: 'The Arkham Spirit Deciphered. 20 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
                const audio = new Audio('/src/audio/8.mp3');
                audio.volume = 0.5; // Adjust volume if needed
                audio.play();
              }
              else if(data === "You have already solved this Arkham Spirit"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this Arkham Sprit',
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
                    message: 'Sesstion time out',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong updating the Arkham Deciphered status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Arkham Deciphered status',
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
              else if(data === "Something is blocking the server for solving the Ciphered Messages"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Ciphered Messages',
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
                    message: 'The answer is not correct.',
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
    let as8_formData = new FormData(as8);
    xhr.send(as8_formData);
}

as9Btn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/arkham/as9.php", true);
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
                    message: 'The Arkham Spirit Deciphered. 20 CPs added',
                    messageColor: '#004719',
                    position: 'topRight',
                    timeout: 5000,
                    
                }); 
                const audio = new Audio('/src/audio/9.mp3');
                audio.volume = 0.5; // Adjust volume if needed
                audio.play();
              }
              else if(data === "You have already solved this Arkham Spirit"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'You have already solved this Arkham Sprit',
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
                    message: 'Sesstion time out',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something went wrong updating the Arkham Deciphered status"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something went wrong updating the Arkham Deciphered status',
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
              else if(data === "Something is blocking the server for solving the Ciphered Messages"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Something is blocking the server for solving the Ciphered Messages',
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
                    message: 'The answer is not correct.',
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
    let as9_formData = new FormData(as9);
    xhr.send(as9_formData);
}








