const range = document.querySelector('#myRange');

const rangeDisplay = document.querySelector('#rangeDisplay');

range.addEventListener('click', () => {
    rangeDisplay.textContent = range.value;
    console.log("Hello")
})


let n = 256;
let k = "div";

const mainDiv = document.querySelector('#mainBlock');

for(let i = 0; i < n; i++){
    eval('var ' + k + i + "= document.createElement('div');");
    eval(k + i + ".classList.add('colouring');" );
    eval(k + i + ".addEventListener('mouseover', () => {" + k + i + ".classList.add('fill');})");
    eval('mainDiv.appendChild(' + k + i + ');');
}



