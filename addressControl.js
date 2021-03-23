
// ----->>> addressPage <<<-----

//FUNCION FIRSTNAME
var firstNameField = document.getElementById("firstName");
var firstNameAlert = document.getElementById("firstNameAlert");
firstNameField.oninput = hasValidFirstName;
function hasValidFirstName(event) {
    if(event.target.value.length>20){
        firstNameAlert.style.display="block";
        event.target.style.borderColor="tomato";
    }else{
        event.target.style.borderColor="green";//cambiar por un tic en verde en CSS que le quite el hidden aquí
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
        event.target.style.borderColor="tomato";
    }else{
        event.target.style.borderColor="green";//cambiar por un tic en verde en CSS que le quite el hidden aquí
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
        event.target.style.borderColor="tomato";
    }else{
        event.target.style.borderColor="green";//cambiar por un tic en verde en CSS que le quite el hidden aquí
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
        event.target.style.borderColor="tomato";
    }else{
        event.target.style.borderColor="green";//cambiar por un tic en verde en CSS que le quite el hidden aquí
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
                postCodeField.style.borderColor="green";//cambiar por un tic en verde en CSS que le quite el hidden aquí
                postCodeAlert1.style.display="none";
                postCodeAlert2.style.display="none";
            }else{ 
                postCodeAlert2.style.display="block";
                postCodeField.style.borderColor="tomato";
                postCodeAlert1.style.display="none";
            }
        }
    }else{
            postCodeAlert1.style.display="block";
            postCodeField.style.borderColor="tomato";
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
        console.log('Añadimos este prefijo ');
        console.log(countryPrefix[event.target.value]);

        countryPrefix[lastSelectedCountry].removeAttribute("selected");
        console.log('Quitamos este prefiejo ' );
        console.log(countryPrefix[lastSelectedCountry]);

        lastSelectedCountry=event.target.value;
        console.log(lastSelectedCountry);

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
                    phoneField.style.borderColor="green";//cambiar por un tic en verde en CSS que le quite el hidden aquí
                    phoneAlert1.style.display="none";
                    phoneAlert2.style.display="none";
                }else{
                    phoneAlert2.style.display="block";
                    phoneField.style.borderColor="tomato";
                    phoneAlert1.style.display="none";
                }
            }else{
                    phoneAlert1.style.display="block";
                    phoneField.style.borderColor="tomato";
                    phoneAlert2.style.display="none";
            }
        }
    }


































































