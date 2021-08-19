//General variables
let n = 256;
let k = "div";
let selectorValue = "black";
let wh = 30;
const mainDiv = document.querySelector('#mainBlock');
//

//setting the slider functionality
const range = document.querySelector('#myRange');

const rangeDisplay = document.querySelector('#rangeDisplay');

range.addEventListener('click', () => {

    for(let i = 0; i < (n); i++){
        eval('mainDiv.removeChild(' + k + i + ');');
    }

    rangeDisplay.textContent = range.value;
    n = range.value*range.value;
    wh = 480/range.value;
    let gridValue = "repeat(" + range.value + ", " + wh + "px)";
    console.log(gridValue);

    mainDiv.style.gridTemplateColumns = gridValue;
    mainDiv.style.gridTemplateRows = gridValue;

    for(let i = 0; i < n; i++){
        eval('window.' + k + i + "= document.createElement('div');");
        eval(k + i + ".classList.add('colouring');" );
        eval(k + i + ".style.width = '" + wh + "px'" );
        eval(k + i + ".style.height = '" + wh + "px'" );
    
        if(selectorValue == "black"){
        eval(k + i + ".addEventListener('mouseover', () => {" + k + i + ".classList.add('fill');})");
        }
    
        eval('mainDiv.appendChild(' + k + i + ');');
    }
})
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
    console.log(n);
    for(let j = 0; j < n; j++){

        if(selectorValue == "black"){
        eval(k + j + ".classList.remove('fill');");
        }
    }
});
//

mainDiv.style.gridTemplateColumns = "repeat(16, 30px)";
mainDiv.style.gridTemplateRows = "repeat(16, 30px)";

for(let i = 0; i < n; i++){
    eval('var ' + k + i + "= document.createElement('div');");
    eval(k + i + ".classList.add('colouring');" );
    eval(k + i + ".style.width = '" + wh + "px'" );
    eval(k + i + ".style.height = '" + wh + "px'" );

    if(selectorValue == "black"){
    eval(k + i + ".addEventListener('mouseover', () => {" + k + i + ".classList.add('fill');})");
    }

    eval('mainDiv.appendChild(' + k + i + ');');
}

plc = 2000;





