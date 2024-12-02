const myBtn = document.getElementById("my-Btn");
const myLbl1 = document.getElementById("my-Lbl1");
const myLbl2 = document.getElementById("my-Lbl2");
const myLbl3 = document.getElementById("my-Lbl3");

const min = 1;
const max = 1000;

let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) * min;
    myLbl1.textContent= randomNum1;

    randomNum2 = Math.floor(Math.random() * max) * min;
    myLbl2.textContent= randomNum2;

    randomNum3 = Math.floor(Math.random() * max) * min;
    myLbl3.textContent= randomNum3;
}
