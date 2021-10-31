let canvas = document.getElementById("graph-canvas");
if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.moveTo(250, 500);
    ctx.lineTo(250, 0);

    ctx.moveTo(50, 253);
    ctx.lineTo(50, 247);
    ctx.moveTo(150, 253);
    ctx.lineTo(150, 247);
    ctx.moveTo(350, 253);
    ctx.lineTo(350, 247);
    ctx.moveTo(450, 253);
    ctx.lineTo(450, 247);

    ctx.font = "12px Verdana";
    ctx.textAlign = "start";
    ctx.fillText("-R", 43, 245);
    ctx.fillText("-R/2", 138, 245);
    ctx.fillText("R/2", 340, 245);
    ctx.fillText("R", 445, 245);


    ctx.moveTo(247, 50);
    ctx.lineTo(253, 50);
    ctx.moveTo(247, 150);
    ctx.lineTo(253, 150);
    ctx.moveTo(247, 350);
    ctx.lineTo(253, 350);
    ctx.moveTo(247, 450);
    ctx.lineTo(253, 450);

    ctx.font = "12px Verdana";
    ctx.textAlign = "left";
    ctx.fillText("-R", 255, 453);
    ctx.fillText("-R/2", 255, 353);
    ctx.fillText("R/2", 255, 153);
    ctx.fillText("R", 255, 55);

    ctx.lineWidth = 1;
    ctx.moveTo(246, 7);
    ctx.lineTo(250, 0);
    ctx.lineTo(254, 7);
    ctx.moveTo(493, 246);
    ctx.lineTo(500, 250);
    ctx.lineTo(493, 254);
    ctx.stroke();

    ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
    ctx.moveTo(250, 50);
    ctx.lineTo(50, 250);
    ctx.lineTo(250, 250);
    ctx.lineTo(250, 50);
    ctx.rect(250, 250, 100, -200);
    ctx.arc(250, 250, 100, Math.PI / 2, Math.PI, false);
    ctx.lineTo(250, 250);
    ctx.fill();
}


let x, y, r;
let errorMessage = "";
let leftBorderY = -3;
let rightBorderY = 3;


function chooseX(element) {
    x = element.value;

    [...document.getElementsByClassName("x-button")].forEach(function (btn) {
        btn.style.transform = "";
    });

    element.style.transform = "scale(1.1)";
}


function isNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}


function addToErrorMessage(errorDesc) {
    errorMessage += errorDesc + "\n";
}


function checkOccurrenceY(value){
    return value >= leftBorderY && value <= rightBorderY;
}


function validateY(){
    y = document.querySelector("input[name=y]").value.replace(",", ".");
    if (y === undefined) {
        addToErrorMessage("The field isn't filled.");
        return false;
    }
    if (!isNumber(y)) {
        addToErrorMessage("Y must be a number.");
        return false;
    }
    if (!checkOccurrenceY(y)){
        addToErrorMessage("Y must be in this occurrence: ${leftBorderY} <= y <= ${rightBorderY}.");
        return false;
    }
    return true;
}


function validateX(){
    let xButton = document.querySelectorAll("input[name=x]");

    xButton.forEach(function (button){
        console.log(button.value);
        if (button.checked){
            x = button.value;
            console.log("success");
        }
    })

    if (x === undefined) {
        addToErrorMessage("X must be chosen.");
        console.log("check x");
        return false;
    }
    x = parseInt(x);
    return true;
}

function validateR(){
    let rButton = document.querySelectorAll("input[name=r]");

    rButton.forEach(function (button){
        console.log(button.value);
        if (button.checked){
            r = button.value;
            console.log("success");
        }
    })

    if (r === undefined) {
        addToErrorMessage("R must be chosen.");
        console.log("check r");
        return false;
    }
    r = parseFloat(r);
    return true;
}


function submit() {
    if (validateX() && validateR() && validateY()) {
        alert("Валидация прошла успешно!");
        alert(x);
        alert(r);
        alert(y);
    }
    else {
        alert("Валидация не пройдена.");
    }
    if (!(errorMessage === "")) {
        alert(errorMessage);
        errorMessage = "";
    }
}