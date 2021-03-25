var buyButton = document.getElementById("buyNowButton");
buyButton.onclick = goToProfilePage;

function finishPurchase() {
    let bottomSection = document.getElementById('bottom_section');
    bottomSection.innerHTML = 'Your registration took: xx min and yy sec';

    let topSection = document.getElementById('top_section');
    let orderCongratsTemplateContent = document.getElementById('orderCongrats').content;
    topSection.appendChild(orderCongratsTemplateContent);
    topSection.style.marginBottom = "20px";
};

function goToFinishPage() {
    let rightSection = document.getElementById('right_section');
    rightSection.innerHTML = "";

    let bottomSection = document.getElementById('bottom_section');
    bottomSection.removeChild(bottomSection.firstElementChild);
    bottomSection = document.getElementById('bottom_section');
    bottomSection.removeChild(bottomSection.firstElementChild);

    let rightTemplate = document.getElementById('finishPage');
    let rightTemplateContent = rightTemplate.content;
    rightSection.appendChild(rightTemplateContent);

    const scriptFinish = document.createElement('script');
    scriptFinish.src = './finishControl.js';
    document.head.append(scriptFinish)

    var form = document.getElementById('finishForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if(termsCheckbox.checked){
            finishPurchase();
            currentActive++;
            if (currentActive > circles.length) currentActive = circles.length;
            if (currentActive !== 4 || progressStage == 1) {
                update();
            } else if (currentActive == 4) {
                progressStage++;
            }
            form.remove();
        } else {
            let termsAlert = document.getElementById('termsAlert');
            termsAlert.style.display = "block";
        }
    });

};


function goToShippingPage() {
    let rightSection = document.getElementById('right_section');
    rightSection.innerHTML="";

    let rightTemplate = document.getElementById('shippingPage');
    let rightTemplateContent = rightTemplate.content;
    rightSection.appendChild(rightTemplateContent);

    const scriptShipping = document.createElement('script');
    scriptShipping.src = './shippingControl.js';
    document.head.append(scriptShipping);

    document.getElementById('clear').setAttribute('form', 'shippingForm');
    document.getElementById('next').setAttribute('form', 'shippingForm');

    var form = document.getElementById('shippingForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        goToFinishPage();
    });
};

function goToAddressPage() {
    let rightSection = document.getElementById('right_section');
    //rightSection.removeChild(rightSection.firstElementChild);
    rightSection.innerHTML="";

    let rightTemplate = document.getElementById('addressPage');
    let rightTemplateContent = rightTemplate.content;
    rightSection.appendChild(rightTemplateContent);

    const scriptAdress = document.createElement('script');
    scriptAdress.src = './addressControl.js';
    document.head.append(scriptAdress);

    document.getElementById('clear').setAttribute('form', 'addressForm');
    document.getElementById('next').setAttribute('form', 'addressForm');

    var form = document.getElementById('addressForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        goToShippingPage()
    });
};

function goToProfilePage() {
    let leftSection = document.getElementById('left_section');
    //leftSection.removeChild(leftSection.firstElementChild);
    leftSection.innerHTML="";
    let rightSection = document.getElementById('right_section');
    //rightSection.removeChild(rightSection.firstElementChild);
    rightSection.innerHTML="";

    let topTemplate = document.getElementById('progressBar');
    let topTemplateContent = topTemplate.content;
    document.getElementById('top_section').appendChild(topTemplateContent);
    let leftTemplate = document.getElementById('shoppingCart');
    let leftTemplateContent = leftTemplate.content;
    document.getElementById('left_section').appendChild(leftTemplateContent);
    let rightTemplate = document.getElementById('profilePage');
    let rightTemplateContent = rightTemplate.content;
    document.getElementById('right_section').appendChild(rightTemplateContent);
    let bottomTemplate = document.getElementById('clearButton');
    let bottomTemplateContent = bottomTemplate.content;
    document.getElementById('bottom_section').appendChild(bottomTemplateContent);
    bottomTemplate = document.getElementById('navigationButtons');
    bottomTemplateContent = bottomTemplate.content;
    document.getElementById('bottom_section').appendChild(bottomTemplateContent);

    document.getElementById('clear').setAttribute('form', 'profileForm');
    document.getElementById('next').setAttribute('form', 'profileForm');

    const scriptProgress = document.createElement('script');
    scriptProgress.src = './progressBarControl.js';
    document.head.append(scriptProgress);

    const scriptProfile = document.createElement('script');
    scriptProfile.src = './profileControl.js';
    document.head.append(scriptProfile);

    var form = document.getElementById('profileForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        goToAddressPage();
    });
};
