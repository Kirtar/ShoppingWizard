var option;

Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}

document.getElementById('freeShipment').onclick = function () {
    areAllFieldsValidated = true;
    option = document.getElementById('freeShipment').value;
    document.getElementById('timeDeliver').style.visibility = "";

    var dateTime = new Date().addHours(72);
    var dateTime2 = new Date();
    var hourFinish = dateTime.getFullYear()+"/"+(dateTime.getMonth()+1)+"/"+dateTime.getDate()+" "+ dateTime.getHours() + ":" + dateTime.getMinutes();
    var hourStart = dateTime2.getFullYear()+"/"+(dateTime2.getMonth()+1)+"/"+dateTime2.getDate()+" "+ dateTime2.getHours() + ":" + dateTime2.getMinutes();

    document.getElementById('shippingFirstDate').innerHTML = hourStart;
    document.getElementById('shippingLastDate').innerHTML = hourFinish;

    latestDeliveryDateTime = hourFinish;
    soonestDeliveryDateTime = hourStart;
};

document.getElementById('extraShipment').onclick = function () {
    areAllFieldsValidated = true;
    option = document.getElementById('extraShipment').value;
    document.getElementById('timeDeliver').style.visibility = "";

    var dateTime = new Date().addHours(48);
    var dateTime2 = new Date();
    var hourFinish = dateTime.getFullYear()+"/"+(dateTime.getMonth()+1)+"/"+dateTime.getDate()+" "+ dateTime.getHours() + ":" + dateTime.getMinutes();
    var hourStart = dateTime2.getFullYear()+"/"+(dateTime2.getMonth()+1)+"/"+dateTime2.getDate()+" "+ dateTime2.getHours() + ":" + dateTime2.getMinutes();

    document.getElementById('shippingFirstDate').innerHTML = hourStart;
    document.getElementById('shippingLastDate').innerHTML = hourFinish;

    latestDeliveryDateTime = hourFinish;
    soonestDeliveryDateTime = hourStart;
};

document.getElementById('premiumShipment').onclick = function () {
    areAllFieldsValidated = true;
    option = document.getElementById('premiumShipment').value;
    document.getElementById('timeDeliver').style.visibility = "";

    var dateTime = new Date().addHours(24);
    var dateTime2 = new Date();
    var hourFinish = dateTime.getFullYear()+"/"+(dateTime.getMonth()+1)+"/"+dateTime.getDate()+" "+ dateTime.getHours() + ":" + dateTime.getMinutes();
    var hourStart = dateTime2.getFullYear()+"/"+(dateTime2.getMonth()+1)+"/"+dateTime2.getDate()+" "+ dateTime2.getHours() + ":" + dateTime2.getMinutes();

    document.getElementById('shippingFirstDate').innerHTML = hourStart;
    document.getElementById('shippingLastDate').innerHTML = hourFinish;

    latestDeliveryDateTime = hourFinish;
    soonestDeliveryDateTime = hourStart;
};

var displayedCheck = document.getElementById('gift').style;
document.getElementById('isAGift').onclick = () => {
    if (displayedCheck.visibility == 'hidden') displayedCheck.visibility = "";
    else {
        displayedCheck.visibility = "hidden";
    };
};
