const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
    //first label
    randomNum1 = Math.floor(Math.random() * (max-min)) + min;
    myLabel1.textContent = randomNum1;   
    //second label
    randomNum2 = Math.floor(Math.random() * (max-min)) + min;
    myLabel2.textContent = randomNum2;
    //third label
    randomNum3 = Math.floor(Math.random() * (max-min)) + min;
    myLabel3.textContent = randomNum3;
}

