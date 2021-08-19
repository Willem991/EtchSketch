//setting the slider functionality
const range = document.querySelector('#myRange');

const rangeDisplay = document.querySelector('#rangeDisplay');

range.addEventListener('click', () => {
    rangeDisplay.textContent = range.value;
})
//

//General variables
let n = 256;
let k = "div";
let selectorValue = "black";
//

//setting the black mode button functionality
const blackMode = document.querySelector('#blackMode');

blackMode/addEventListener('click', () => {
    selectorValue = "black";
})
//

//setting clear button functionality
const clearButton = document.querySelector("#clear");

clearButton.addEventListener('click', () => {
    for(let j = 0; j < n; j++){

        if(selectorValue == "black"){
        eval(k + j + ".classList.remove('fill');");
        }
    }
});
//

const mainDiv = document.querySelector('#mainBlock');

for(let i = 0; i < n; i++){
    eval('var ' + k + i + "= document.createElement('div');");
    eval(k + i + ".classList.add('colouring');" );

    if(selectorValue == "black"){
    eval(k + i + ".addEventListener('mouseover', () => {" + k + i + ".classList.add('fill');})");
    }

    eval('mainDiv.appendChild(' + k + i + ');');
}



