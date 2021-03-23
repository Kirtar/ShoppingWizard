
// ----->>> profilePage <<<-----

//FUNCION USERNAME
var userNameField = document.getElementById("username");
var userAlert = document.getElementById("userNameAlert");
userNameField.oninput = hasValidUserName;
function hasValidUserName(event) {
    if(event.target.value.includes(' ')||
    event.target.value.length<5||event.target.value.length>20){
     userAlert.style.display="block";
     event.target.style.borderColor="tomato";
    }else{
     event.target.style.borderColor="green";
     userAlert.style.display="none";
    }
}

//FUNCION EMAIL
var email = document.getElementById("email");
email.oninput = hasValidEmail;
var emailAlert = document.getElementById("emailAlert");
var filterEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function hasValidEmail(event) {
    if(!event.target.value.match(filterEmail)||event.target.value.length>50){
     emailAlert.style.display="block";
     event.target.style.borderColor="blue";
    }else{
     event.target.style.borderColor="green";
     emailAlert.style.display="none";
    }
}


//FUNCION PASS
var pass = document.getElementById("password");
pass.oninput = hasValidPass;
var passAlert = document.getElementById("passAlert");
var filterPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
function hasValidPass(event) {
    if(confirmPass.value !=''){
        hasValidConfirmPass();
    }
    if(!event.target.value.match(filterPass)||event.target.value.length<8||event.target.value.length>20){
     passAlert.style.display="block";
     event.target.style.borderColor="red";
    }else{
     event.target.style.borderColor="green";
     passAlert.style.display="none";
    }
}

//FUNCION CONFIRM-PASS
var confirmPass = document.getElementById("confirmPassword");
confirmPass.oninput = hasValidConfirmPass;
var confirmPassAlert = document.getElementById("confirmPassAlert");
function hasValidConfirmPass() {

    if(confirmPass.value !== pass.value){
        confirmPassAlert.style.display="block";
        confirmPass.style.borderColor="red";
       }else{
        confirmPass.style.borderColor="green";
        confirmPassAlert.style.display="none";
    }
}





