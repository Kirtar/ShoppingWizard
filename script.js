var buyButton = document.getElementById("buyNowButton");
buyButton.onclick = goToProfilePage;

var timeAlertMessage = [
    'Don\'t worry, you have 4 minutes left',
    'Tic Tac, Tic Tac',
    'Get a move on!',
    'Hurry Up!'
];
var alertCard = document.getElementById('floatingCard');
var alertCardMinutes = document.getElementById('minutesCount');
var alertCardMessage = document.getElementById('alertMessage');
var registrationStart = 0;
var elapsedMinutes = 0;
var registrationFinish = 0;
var registrationTime = 0;
var selectedProductSize = 'XS';
var selectedProductPrice = 12;
var selectedColor = 'black';
var colorPrices = {
    'black' : 12,
    'red' : 18,
    'blue' : 18
};
var colorPalette = {
    'red' : '#dd473c',
    'blue' : '#6b9ed4',
    'black' : '#323232'
};
var soonestDeliveryDateTime = 0;
var latestDeliveryDateTime = 0;
var selectedShippingMethod = '';
var shippingMethodNames = {
    freeShipment : 'Free Shipment 72h',
    extraShipment : 'Extra Shipment 48h',
    premiumShipment: 'Premium Shipment 24h'
};
var shippingMethodPrices = {
    freeShipment : 0,
    extraShipment : 5,
    premiumShipment: 10
};

function changeGalleryImages(selectedProductColor) {
    let bigImage = document.getElementById('bigImage');
    bigImage.src = `images/front/${selectedProductColor}.jpg`;
    let miniFront = document.getElementById('frontMini');
    miniFront.src = `images/front/${selectedProductColor}.jpg`;
    let miniZoomed = document.getElementById('zoomedMini');
    miniZoomed.src = `images/zoomed/${selectedProductColor}.jpg`;
    let miniFolded = document.getElementById('foldedMini');
    miniFolded.src = `images/folded/${selectedProductColor}.jpg`;
    let miniBack = document.getElementById('backMini');
    miniBack.src = `images/back/${selectedProductColor}.jpg`;
}

function updatePrice() {
    selectedProductPrice = colorPrices[selectedColor];
    document.getElementById('displayedPrice').innerHTML = `${selectedProductPrice}€`;
}

function changeImagesColor(event) {
    let selectedColorSelector = event.target;
    selectedColor = selectedColorSelector.value;
    updatePrice();
    let selectedProductColor = selectedColorSelector.getAttribute('data-image');
    var activeColorSelector = document.querySelector('.colorProduct input[type="radio"]:checked');
    activeColorSelector.toggleAttribute('checked');
    changeGalleryImages(selectedProductColor);
    selectedColorSelector.toggleAttribute('checked');
}

var colorInputs = document.querySelectorAll('.colorProduct input');
colorInputs.forEach((colorInput) => {
    colorInput.addEventListener("click", function (event) {
        changeImagesColor(event);
    })
});

function changeMainImage(event) {
    let hoveredImaged = event.target;
    var activeBigImage =  document.getElementById('bigImage');
    activeBigImage.src = hoveredImaged.src;
}

var miniImages = document.querySelectorAll('.imgMini');
miniImages.forEach((miniImage) => {
    miniImage.addEventListener("mouseover", function (event) {
        changeMainImage(event);
    })
});

function finishPurchase() {
    var diff = Math.abs(new Date() - registrationStart);
    var date = new Date(diff);
    let bottomSection = document.getElementById('bottom_section');
    bottomSection.innerHTML = 'Your registration took: ' + date.getMinutes() + ' min and ' + date.getSeconds() + ' sec';

    let topSection = document.getElementById('top_section');
    let orderCongratsTemplateContent = document.getElementById('orderCongrats').content;
    topSection.appendChild(orderCongratsTemplateContent);
    topSection.style.marginBottom = "20px";
};

function setDeliveryOptionsDisplaying() {
    document.getElementById('tshirtPrice').innerHTML = `${selectedProductPrice}€`;
    document.getElementById('selectedShipping').innerHTML = `${shippingMethodNames[selectedShippingMethod]}`;
    document.getElementById('selectedShippingCost').innerHTML = `${shippingMethodPrices[selectedShippingMethod]}€`;
    document.getElementById('totalAmount').innerHTML = `${selectedProductPrice + shippingMethodPrices[selectedShippingMethod]}€`;
    document.getElementById('finishFirstDate').innerHTML = `${soonestDeliveryDateTime}`;
    document.getElementById('finishLastDate').innerHTML = `${latestDeliveryDateTime}`;
}

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

    setDeliveryOptionsDisplaying();

    const scriptFinish = document.createElement('script');
    scriptFinish.src = './finishControl.js';
    document.head.append(scriptFinish)

    var form = document.getElementById('finishForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if(termsCheckbox.checked){
            nextStage();
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
    areAllFieldsValidated = false;
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
        if (areAllFieldsValidated){
        selectedShippingMethod = event.target.shipment.value;
        goToFinishPage();
        nextStage();
        }
    });
};

function allAddressFieldsValidated () {
    areAllFieldsValidated = true;
    let allInputs = document.querySelectorAll('.addressPage > div > input');
    allInputs.forEach((input) => {
        if (input.getAttribute("validated-field") === 'false') {
            areAllFieldsValidated = false;
        }
    });
    return areAllFieldsValidated;
}

function goToAddressPage() {
    let rightSection = document.getElementById('right_section');
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
        if (allAddressFieldsValidated()) {
            nextStage();
            goToShippingPage()
        }
    });
};

function showTimeAlert(){
    alertCardMinutes.innerHTML=`<strong>${elapsedMinutes} minustes ago</strong>`;
    alertCardMessage.innerHTML=timeAlertMessage[elapsedMinutes - 1];
    alertCard.style.display="";
    setTimeout(function(){
        alertCard.style.display="none";
    }, 5000);
};

function initializeMinuteAlert(){
    setInterval(function(){
        elapsedMinutes++;
        showTimeAlert();
    }, 60000);
};

function initializeTimeCounter(){
    registrationStart = Date.now();
};

function initializeCountDown(){
    setTimeout(function(){
        alert('You time is over!');
        location.reload();
    }, 300000);
};

function initializeRegistrationProcess(){
    initializeCountDown();
    initializeTimeCounter();
    initializeMinuteAlert();
};

function updateSelectedSize() {
    selectedProductSize = document.getElementById('sizeChoosing').value;
}

function updateShoppingCart() {
    document.getElementById('ShoppingCartSizeDisplay').innerHTML = selectedProductSize;
    document.getElementById('ShoppingCartPriceDisplay').innerHTML = `${selectedProductPrice}€`;
    document.getElementById('ShoppingCartColorDisplay').style.backgroundColor = colorPalette[selectedColor];
    document.getElementById('cartImage').src = `images/front/${selectedColor}.jpg`;
}

function allProfileFieldsValidated () {
    areAllFieldsValidated = true;
    let allInputs = document.querySelectorAll('.profilePage > div > input');
    allInputs.forEach((input) => {
        if (input.getAttribute("validated-field") === 'false') {
            areAllFieldsValidated = false;
        }
    });
    return areAllFieldsValidated;
}

function goToProfilePage() {
    initializeRegistrationProcess();
    updateSelectedSize();
    let leftSection = document.getElementById('left_section');
    leftSection.innerHTML="";
    let rightSection = document.getElementById('right_section');
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

    updateShoppingCart();

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
        if (allProfileFieldsValidated()) {
            nextStage();
            goToAddressPage();
        }
    });
};
