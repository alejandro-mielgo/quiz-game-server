const display = document.querySelector('#display');


export function showCreateAccountMenu(event){
    display.innerHTML=''
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const passwordLabel = document.createElement('label');
    const passwordInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const createButton = document.createElement('button');
  
    nameLabel.textContent = "user name";
    passwordLabel.textContent = "password";
    emailLabel.textContent = "email"
    createButton.textContent = "create account";
    createButton.classList.add("btn","btn-primary");
  
    display.appendChild(nameLabel);
    display.appendChild(nameInput);
    display.appendChild(passwordLabel);
    display.appendChild(passwordInput);
    display.appendChild(emailLabel);
    display.appendChild(emailInput);
    display.appendChild(createButton);
  
    createButton.addEventListener("click", () =>{submitCreateUser(nameInput.value, passwordInput.value, emailInput.value)});
}
  
function submitCreateUser(userName,password,email){
    if (!(userName || password)){
        showAlert("user name and password are mandatory",display,"warning");
        return null
    }

    if (password.length<7){
        showAlert("password should be at least 7 characters", display, "warning");
        return null
    }
    
    fetch("/api/users",{
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        password: password,
        email: email
      }),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      if (response.status === 201){
        showAlert("User created",  display,"success")
      } else {
        showAlert("User already exist", display,"warning")
      }
    })
    .catch(error => console.log(error))
}
  
export function showAlert(message,parentElement,type){
    const error = document.createElement("div");
    error.classList.add("alert",`alert-${type}` )
    error.textContent = message;
    parentElement.appendChild(error);
    
    setTimeout(() =>{
      error.remove();
    },2000)
}


