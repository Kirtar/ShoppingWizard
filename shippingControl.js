var option;

Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}

document.getElementById('freeShipment').onclick = function () {
    option = document.getElementById('freeShipment').value;
    document.getElementById('timeDeliver').style.visibility = "";

    var dateTime = new Date().addHours(72);
    var dateTime2 = new Date();
    var hourFinish = dateTime.getFullYear()+"/"+(dateTime.getMonth()+1)+"/"+dateTime.getDate()+" "+ dateTime.getHours() + ":" + dateTime.getMinutes();
    var hourStart = dateTime2.getFullYear()+"/"+(dateTime2.getMonth()+1)+"/"+dateTime2.getDate()+" "+ dateTime2.getHours() + ":" + dateTime2.getMinutes();

    document.getElementById('firstDate').innerHTML = hourStart;
    document.getElementById('lastDate').innerHTML = hourFinish;

};

document.getElementById('extraShipment').onclick = function () {
    option = document.getElementById('extraShipment').value;
    document.getElementById('timeDeliver').style.visibility = "";

    var dateTime = new Date().addHours(48);
    var dateTime2 = new Date();
    var hourFinish = dateTime.getFullYear()+"/"+(dateTime.getMonth()+1)+"/"+dateTime.getDate()+" "+ dateTime.getHours() + ":" + dateTime.getMinutes();
    var hourStart = dateTime2.getFullYear()+"/"+(dateTime2.getMonth()+1)+"/"+dateTime2.getDate()+" "+ dateTime2.getHours() + ":" + dateTime2.getMinutes();

    document.getElementById('firstDate').innerHTML = hourStart;
    document.getElementById('lastDate').innerHTML = hourFinish;
};

document.getElementById('premiumShipment').onclick = function () {
    option = document.getElementById('premiumShipment').value;
    document.getElementById('timeDeliver').style.visibility = "";

    var dateTime = new Date().addHours(24);
    var dateTime2 = new Date();
    var hourFinish = dateTime.getFullYear()+"/"+(dateTime.getMonth()+1)+"/"+dateTime.getDate()+" "+ dateTime.getHours() + ":" + dateTime.getMinutes();
    var hourStart = dateTime2.getFullYear()+"/"+(dateTime2.getMonth()+1)+"/"+dateTime2.getDate()+" "+ dateTime2.getHours() + ":" + (dateTime2.getMinutes()<10?'0':'');

    document.getElementById('firstDate').innerHTML = hourStart;
    document.getElementById('lastDate').innerHTML = hourFinish;

};

var displayedCheck = document.getElementById('gift').style;
document.getElementById('isAGift').onclick = () => {
    if (displayedCheck.visibility == 'hidden') displayedCheck.visibility = "";
    else {
        displayedCheck.visibility = "hidden";
    };
};

