

const login = document.getElementById("loginForm");
const signUp = document.getElementById("signUpForm");
const logInBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById("signUp-btn");
const closeBtn = document.getElementById('close-btn');

logInBtn.addEventListener("click", openLogin);
// signUpBtn.addEventListener("click", openSignUp);
closeBtn.addEventListener('click', closeModal);

function openLogin(){
   login.style.display = "block";
console.log("1.2.3");
}
 
function openSignUp(){
    signUp.style.display = "block";
    // console.log("1.2.3");
}
function closeModal(){
    login.style.display = 'none';
    signUp.style.display = 'none';
}