const signupForm = document.querySelector(".signupForm"),
signupBtn = signupForm.querySelector(".signupBtn");

const loginForm = document.querySelector(".loginForm"),
loginBtn = loginForm.querySelector(".loginBtn");

const forgotpassForm = document.querySelector(".forgotpassForm"),
forgotpassBtn = forgotpassForm.querySelector(".forgotpassBtn");


const updateForm = document.querySelector(".updateForm"),
updateBtn = updateForm.querySelector(".updateBtn");


const monetizeForm = document.querySelector(".monetization"),
monetizeBtn = monetizeForm.querySelector(".moneBtn");

const upgrade_passForm = document.querySelector(".upgrade_pass_form"),
upgrade_apply = upgrade_passForm.querySelector(".upgrade_apply");


const poststoryForm = document.querySelector(".poststoryForm"),
poststoryBtn = poststoryForm.querySelector(".poststoryBtn");


const rotForm = document.querySelector(".rotForm"),
rotBtn = rotForm.querySelector(".rotBtn"),
cipherd = rotForm.querySelector(".cipherd");

const gitForm = document.querySelector(".gitForm"),
gitBtn = gitForm.querySelector(".gitBtn");


monetizeForm.onsubmit = (e)=>{
    e.preventDefault();
  }


  rotForm.onsubmit = (e)=>{
    e.preventDefault();
  }

signupForm.onsubmit = (e)=>{
    e.preventDefault();
}
loginForm.onsubmit = (e)=>{
  e.preventDefault();
}
forgotpassForm.onsubmit = (e)=>{
  e.preventDefault();
}
updateForm.onsubmit = (e)=>{
  e.preventDefault();
}

upgrade_passForm.onsubmit = (e)=>{
  e.preventDefault();
}

poststoryForm.onsubmit = (e)=>{
  e.preventDefault();
}

gitForm.onsubmit = (e)=>{
  e.preventDefault();
}

signupBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/src/php/signup.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "success"){
                location.href = "/portal/";
              }
              else if(data === "Account already exists"){
                iziToast.show({
                   color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Account already exists.',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                });  
              }
            
              else if(data === "Something went wrong in registration"){
                iziToast.show({
                    color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Something went wrong in registration.',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,

                    
                });  
              }
              else if(data === "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&)"){
                iziToast.show({
                    color: 'red',
                    titleColor: '#580000',
                    theme: 'dark',
                    icon: 'bi bi-exclamation-triangle',
                    iconColor: '#580000',
                    title: 'Error',
                    message: 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&).',
                    messageColor: '#580000',
                    position: 'topRight',
                    timeout: 5000,
                    
                });  
              }
              else if(data === "Something is blocking the servers from registering"){
                iziToast.show({
                     color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Something is blocking the servers from registering.',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,

                    
                });  
              }
              else if(data === "Passwords do not match"){
                iziToast.show({
                   color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Passwords do not match',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,

                    
                });  
              }
            }
          }
        }
    let signupFormData = new FormData(signupForm);
    xhr.send(signupFormData);
}


loginBtn.onclick = ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/src/php/login.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            if(data === "success"){
              location.href = "/portal/";
            }
            else if(data === "An error occurred during login."){
              iziToast.show({
                color: 'red',
                titleColor: '#580000',
                theme: 'dark',
                icon: 'bi bi-exclamation-triangle',
                iconColor: '#580000',
                title: 'Error',
                message: 'An error occurred during login.',
                messageColor: '#580000',
                position: 'topRight',
                timeout: 5000,

                  
              });  
            }
            else if(data === "Invalid username or password."){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Username not found.',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "Username or password is not correct."){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Username or password is not correct.',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            } 
            
            else{
              iziToast.show({
                color: 'red',
                titleColor: '#580000',
                theme: 'dark',
                icon: 'bi bi-exclamation-triangle',
                iconColor: '#580000',
                title: 'Error',
                message: 'Something blocked the servers from logging in.',
                messageColor: '#580000',
                position: 'topRight',
                timeout: 5000,
                
            }); 
            }
          }
        }
      }
  let loginFormData = new FormData(loginForm);
  xhr.send(loginFormData);
}


forgotpassBtn.onclick = ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/src/php/forgotpass.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            if(data === "success"){
              location.href = "/forgotpass/";
            }
            else if(data === "Username not found."){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Username not found. Try to contact the administrator by emaling to <a href="mailto:info@sandika.com">info@sandika.com</a>',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else {
              iziToast.show({
                color: 'red',
                titleColor: '#580000',
                theme: 'dark',
                icon: 'bi bi-exclamation-triangle',
                iconColor: '#580000',
                title: 'Error',
                message: 'Something went wrong',
                messageColor: '#580000',
                position: 'topRight',
                timeout: 5000,
                
            }); 
            }
          }
        }
      }
  let forgotpassFormData = new FormData(forgotpassForm);
  xhr.send(forgotpassFormData);
}


updateBtn.onclick = ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/src/php/updateinfo.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            if(data === "success"){
              iziToast.show({
                color: 'green',
                titleColor: '#004719',
                theme: 'dark',
                icon: 'bi bi-check',
                iconColor: '#004719',
                title: 'Success',
                message: 'Information updated successfully. Reload to see the new information',
                messageColor: '#004719',
                position: 'topRight',
                timeout: 5000,
                
            }); 
            }
            else if(data === "Username or already exists. Use another ones."){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Username or already exists. Use another ones',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "Invalid website URL"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Invalid website URL',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "There was a problem updating your info"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'There was a problem updating your info',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else{
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Updating information failed.',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
        
          }
        }
      }
  let updateForminfo = new FormData(updateForm);
  xhr.send(updateForminfo);
}




monetizeBtn.onclick = ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/src/php/monetize.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            if(data === "success"){
              iziToast.show({
                color: 'green',
                titleColor: '#004719',
                theme: 'dark',
                icon: 'bi bi-check',
                iconColor: '#004719',
                title: 'Error',
                message: 'Information updated successfully.',
                messageColor: '#004719',
                position: 'topRight',
                timeout: 5000,
                
            }); 
            }
            else if(data === "There was a problem updating your monetize info"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'There was a problem updating your monetize info',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "User not found"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'User not found',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "The BTC or ETH address is not valid"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'The BTC or ETH address is not valid',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            
            
          }
        }
      }
  let monetizeFormInfo = new FormData(monetizeForm);
  xhr.send(monetizeFormInfo);
}






upgrade_apply.onclick = ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/src/php/upgrade_pass.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            if(data === "success"){
              iziToast.show({
                color: 'green',
                titleColor: '#004719',
                theme: 'dark',
                icon: 'bi bi-check',
                iconColor: '#004719',
                title: 'Error',
                message: 'Information updated successfully.',
                messageColor: '#004719',
                position: 'topRight',
                timeout: 5000,
                
            }); 
            }
            else if(data === "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&)"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&)',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }

            else if(data === "Something is blocking the servers from updating password"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Something is blocking the servers from updating password',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }

            else if(data === "No user found :(. refrshing now"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'No user found :(. refrshing now',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
              location.reload();
            }

            else if(data === "The passwords must be matched"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'The passwords must be matched',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
           
            
            
          }
        }
      }
  let upgrade_passFormInfo = new FormData(upgrade_passForm);
  xhr.send(upgrade_passFormInfo);
}



poststoryBtn.onclick = ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/src/php/story.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            if(data === "success"){
              iziToast.show({
                color: 'green',
                titleColor: '#004719',
                theme: 'dark',
                icon: 'bi bi-check',
                iconColor: '#004719',
                title: 'Success',
                message: 'Your story has been posted successfully.',
                messageColor: '#004719',
                position: 'topRight',
                timeout: 5000,
                
            }); 
            
            }
            else if(data === "Something is blocking the server from posting your story"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Something is blocking the server from posting your story',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "User crashed, reload the webpage"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'User crashed, reload the webpage',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "Session Crashed. Reload now"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Session Crashed. Reloading now',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else{
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Posting the story failed.',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
        
          }
        }
      }
  let storyInfo = new FormData(poststoryForm);
  xhr.send(storyInfo);
}


rotBtn.onclick = ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/src/php/rot.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            if(data !== "Converting txt failed"){
              cipherd.style.display="block";
              cipherd.textContent = data;
            }
            else{
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Converting txt failed',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
        
          }
        }
      }
  let rotFormInfo = new FormData(rotForm);
  xhr.send(rotFormInfo);
}



gitBtn.onclick = ()=>{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/src/php/git.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            if(data === "Success. 15 CP added"){
              iziToast.show({
                color: 'green',
                titleColor: '#004719',
                theme: 'dark',
                icon: 'bi bi-check',
                iconColor: '#004719',
                title: 'Success',
                message: 'The git info was successfully added. Also 15 CPs were added.',
                messageColor: '#004719',
                position: 'topRight',
                timeout: 5000,
                
            }); 
            
            }
            else if(data === "Success. 5 CP added"){
              iziToast.show({
                color: 'green',
                titleColor: '#004719',
                theme: 'dark',
                icon: 'bi bi-check',
                iconColor: '#004719',
                title: 'Success',
                message: 'The git info was successfully added. Also 5 CPs were added.',
                messageColor: '#004719',
                position: 'topRight',
                timeout: 5000,
                
            }); 
           

            }
            else if(data === "You need to update your GitHub account first"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'You need to update your GitHub account first',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "Something went wrong adding the 15 CPs"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Something went wrong adding the 15 CPs',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "There was a problem posting the Git insight"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'There was a problem posting the Git insight',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              });  
            }
            else if(data === "Something went wrong adding the 5 CPs"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Something went wrong adding the 5 CPs',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              }); 
            }
            
            else if(data === "Please enter a valid GitHub link"){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Please enter a valid GitHub link',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              }); 
            }else if(data === "User info crashed. Reloading now..."){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'User info crashed. Reloading now...',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              }); 
              location.reload(); 
            }
            else if(data === "Session hijacked. Try again later..."){
              iziToast.show({
                  color: 'red',
                  titleColor: '#580000',
                  theme: 'dark',
                  icon: 'bi bi-exclamation-triangle',
                  iconColor: '#580000',
                  title: 'Error',
                  message: 'Session hijacked. Try again later...',
                  messageColor: '#580000',
                  position: 'topRight',
                  timeout: 5000,
                  
              }); 
            }
            else {
              iziToast.show({
                color: 'red',
                titleColor: '#580000',
                theme: 'dark',
                icon: 'bi bi-exclamation-triangle',
                iconColor: '#580000',
                title: 'Error',
                message: 'Something is blocking the servers',
                messageColor: '#580000',
                position: 'topRight',
                timeout: 5000,
                
            }); 
            
          }
        }
      }
  }
  let gitFormInfo = new FormData(gitForm);
  xhr.send(gitFormInfo);
}
