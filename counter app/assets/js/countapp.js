
const increaseBtn = document.getElementById("Increase-El");
const DecreaseBtn = document.getElementById("Decrease-El");
const resetBtn = document.getElementById("Reset-El");
const numberEl = document.getElementById("number-El");


let count = 0;

increaseBtn.onclick = function (){
    count++;
    numberEl.textContent = count;
}
DecreaseBtn.onclick = function (){
    count--;
    numberEl.textContent = count;
}
resetBtn.onclick = function (){
    count = 0;
    numberEl.textContent = count;
}