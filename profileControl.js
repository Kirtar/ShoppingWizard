//USERNAME VALIDATION
var userNameField = document.getElementById("username");
var userAlert = document.getElementById("userNameAlert");
userNameField.oninput = hasValidUserName;
function hasValidUserName(event) {
    let changedInput = event.target;
    if(changedInput.value.includes(' ')||
    changedInput.value.length<5||changedInput.value.length>20){
        userAlert.style.display="block";
        changedInput.setAttribute("validated-field", false);
    }else{
        changedInput.setAttribute("validated-field", true);
        userAlert.style.display = "none";
        validated='false'
    }
}

//EMAIL VALIDATION
var email = document.getElementById("email");
email.oninput = hasValidEmail;
var emailAlert = document.getElementById("emailAlert");
var filterEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function hasValidEmail(event) {
    let changedInput = event.target;
    if(!changedInput.value.match(filterEmail)||changedInput.value.length>50){
        emailAlert.style.display="block";
        changedInput.setAttribute("validated-field", false);
    }else{
        changedInput.setAttribute("validated-field", true);
        emailAlert.style.display="none";
    }
}

//PASS VALIDATION
var pass = document.getElementById("password");
pass.oninput = hasValidPass;
var passAlert = document.getElementById("passAlert");
var filterPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
function hasValidPass(event) {
    let changedInput = event.target;
    if(confirmPass.value !=''){
        hasValidConfirmPass();
    }
    if(!changedInput.value.match(filterPass)||changedInput.value.length<8||changedInput.value.length>20){
        passAlert.style.display="block";
        changedInput.setAttribute("validated-field", false);
    }else{
        changedInput.setAttribute("validated-field", true);
        passAlert.style.display="none";
    }
}

//CONFIRM-PASS VALIDATION
var confirmPass = document.getElementById("confirmPassword");
confirmPass.oninput = hasValidConfirmPass;
var confirmPassAlert = document.getElementById("confirmPassAlert");
function hasValidConfirmPass() {
    if(confirmPass.value !== pass.value){
        confirmPassAlert.style.display="block";
        confirmPass.setAttribute("validated-field", false);
    }else{
        confirmPass.setAttribute("validated-field", true);
        confirmPassAlert.style.display="none";
    }
}
