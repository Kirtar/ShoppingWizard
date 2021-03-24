var option;

document.getElementById('freeShipment').onclick = function () {
    option = document.getElementById('freeShipment').value;
    console.log(option);

    var displayedCheck = document.getElementById('timeDeliver').style;
    if (displayedCheck.display == 'none') displayedCheck.display = "";

    document.getElementById('firstDate').innerHTML = `{}`;
    document.getElementById('lastDate').innerHTML = ``;

};

document.getElementById('extraShipment').onclick = function () {
    option = document.getElementById('extraShipment').value;
    console.log(option);

    var displayedCheck = document.getElementById('timeDeliver').style;
    if (displayedCheck.display == 'none') displayedCheck.display = "";
};

document.getElementById('premiumShipment').onclick = function () {
    option = document.getElementById('premiumShipment').value;
    console.log(option);

    var displayedCheck = document.getElementById('timeDeliver').style;
    if (displayedCheck.display == 'none') displayedCheck.display = "";
};

var displayedCheck = document.getElementById('gift').style;
document.getElementById('isAGift').onclick = () => {
    if (displayedCheck.display == 'none') displayedCheck.display = "";
    else {
        displayedCheck.display = "none";
    };
};

