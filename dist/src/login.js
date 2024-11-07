const display = document.querySelector('#display');

export function showLoginMenu(event){
    display.innerHTML="";

    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const passwordLabel = document.createElement('label');
    const passwordInput = document.createElement('input');
    const loginBtn = document.createElement('button');
    

    nameLabel.textContent = "user name";
    passwordLabel.textContent = "password";
    loginBtn.textContent = "login";
    loginBtn.classList.add("btn","btn-primary");

    display.appendChild(nameLabel);
    display.appendChild(nameInput);
    display.appendChild(passwordLabel);
    display.appendChild(passwordInput);
    display.appendChild(loginBtn);

    loginBtn.addEventListener("click", () =>{handleLogin(nameInput.value, passwordInput.value)});
  
}

function handleLogin(userName,password){
    console.log("click en login");
}