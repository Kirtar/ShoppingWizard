//FUNCION FIRSTNAME
var firstNameField = document.getElementById("firstName");
var firstNameAlert = document.getElementById("firstNameAlert");
firstNameField.oninput = hasValidFirstName;
function hasValidFirstName(event) {
    if(event.target.value.length>20){
        firstNameAlert.style.display="block";
        event.target.setAttribute("validated-field", false);
    }else{
        event.target.setAttribute("validated-field", true);
        firstNameAlert.style.display="none";
    }
}

//FUNCION LASTNAME
var lastNameField = document.getElementById("lastName");
var lastNameAlert = document.getElementById("lastNameAlert");
lastNameField.oninput = hasValidLastName;
function hasValidLastName(event) {
    if(event.target.value.length>20){
        lastNameAlert.style.display="block";
        event.target.setAttribute("validated-field", false);
    }else{
        event.target.setAttribute("validated-field", true);
        lastNameAlert.style.display="none";
    }
}

//FUNCION ADDRESS1
var address1Field = document.getElementById("address1");
var address1Alert = document.getElementById("address1Alert");
address1Field.oninput = hasValidAdress1;
function hasValidAdress1(event) {
    if(event.target.value.length>50){
        address1Alert.style.display="block";
        event.target.setAttribute("validated-field", false);
    }else{
        event.target.setAttribute("validated-field", true);
        address1Alert.style.display="none";
    }
}

//FUNCION ADDRESS2
var address2Field = document.getElementById("address2");
var address2Alert = document.getElementById("address2Alert");
address2Field.oninput = hasValidAdress2;
function hasValidAdress2(event) {
    if(event.target.value.length>50){
        address2Alert.style.display="block";
        event.target.setAttribute("validated-field", false);
    }else{
        event.target.setAttribute("validated-field", true);
        address2Alert.style.display="none";
    }
}

//FUNCION POST CODE
var postCodeField = document.getElementById("postCode");
var postCodeAlert1 = document.getElementById("postCodeAlert1");
var postCodeAlert2 = document.getElementById("postCodeAlert2");
postCodeField.oninput = hasValidPostCode;
var  filterPostCode = '^[0-9]*$';
function hasValidPostCode() {
    if(postCodeField.value.match(filterPostCode)){
        if(postCodeField.value==''){
            postCodeAlert1.style.display="none";
            postCodeAlert2.style.display="none";
            postCodeField.style.borderColor='';
        }else{
            if((postCodeField.value.length>4 && postCodeField.value.length<6)){
                postCodeField.setAttribute("validated-field", true);
                postCodeAlert1.style.display="none";
                postCodeAlert2.style.display="none";
            }else{
                postCodeAlert2.style.display="block";
                postCodeField.setAttribute("validated-field", false);
                postCodeAlert1.style.display="none";
            }
        }
    }else{
            postCodeAlert1.style.display="block";
            postCodeField.setAttribute("validated-field", false);
            postCodeAlert2.style.display="none";
    }
}

   //FUNCION COUNTRY
    var countryField = document.getElementById("countries");
    var countryPrefix = document.querySelectorAll('select#prePhone > option');
    countryField.oninput=setDefaultPrefix;
    var lastSelectedCountry='0';
    function setDefaultPrefix(event) {
        countryPrefix[event.target.value].setAttribute("selected", "selected");
        countryPrefix[lastSelectedCountry].removeAttribute("selected");
        lastSelectedCountry=event.target.value;
    }

    //FUNCION PHONE
    var phoneField = document.getElementById("phone");
    var phoneAlert1 = document.getElementById("phoneAlert1");
    var phoneAlert2 = document.getElementById("phoneAlert2");
    phoneField.oninput = hasValidPhone;
    var  filterPhoneCode = '^[0-9]*$';
    function hasValidPhone() {
        if(phoneField.value==''){
            phoneField.style.borderColor='';
            phoneAlert1.style.display="none";
            phoneAlert2.style.display="none";
        } else {
            if(phoneField.value.match(filterPhoneCode)){
                if((phoneField.value.length===9)){
                    phoneField.setAttribute("validated-field", true);
                    phoneAlert1.style.display="none";
                    phoneAlert2.style.display="none";
                }else{
                    phoneAlert2.style.display="block";
                    phoneField.setAttribute("validated-field", false);
                    phoneAlert1.style.display="none";
                }
            }else{
                    phoneAlert1.style.display="block";
                    phoneField.setAttribute("validated-field", false);
                    phoneAlert2.style.display="none";
            }
        }
    }


































































