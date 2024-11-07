import { showCreateAccountMenu } from "./src/createAccount.js";
import { showLoginMenu } from "./src/login.js";
const createAcountBtn = document.querySelector('#createAcountBtn');
const loginBtn = document.querySelector('#loginBtn');


createAcountBtn.addEventListener("click", showCreateAccountMenu);
loginBtn.addEventListener("click", showLoginMenu)
