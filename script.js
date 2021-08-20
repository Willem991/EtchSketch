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

    console.log(selectorValue);
    for(let i = 0; i < (n); i++){
        eval('mainDiv.removeChild(' + k + i + ');');
    };

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
            eval(k + i + ".addEventListener('mouseover', () => {" + k + i + ".style.backgroundColor = 'black'})");
        }else if(selectorValue == "custom"){
            eval(k + i + ".onmouseover = () =>{"+ k + i + ".style.backgroundColor = '" + customColor + "'}");
        }else if(selectorValue == "rainbow"){
            let r = `rgb(${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)})`;
            eval(k + i + ".onmouseover = () =>{"+ k + i + ".style.backgroundColor = '" + r + "'}");
        };
    
        eval('mainDiv.appendChild(' + k + i + ');');
    };
});
//


//setting the black mode button functionality
const blackMode = document.querySelector('#blackMode');

blackMode.addEventListener('click', () => {
    selectorValue = "black";
});
//

//setting clear button functionality
const clearButton = document.querySelector("#clear");

clearButton.addEventListener('click', () => {
    selectorValue = "clear";
});
//

//setting rainbowmode button functionality
const rainbowMode = document.querySelector('#rainbowMode');

rainbowMode.addEventListener('click', () => {
    selectorValue = "rainbow";
});
//

//setting up the colorPick button
const colorPick = document.querySelector('#colorPick');
let customColor = "black";

colorPick.addEventListener('input', () =>{
    selectorValue = "custom";
    customColor = colorPick.value;

    blackMode.classList.remove("active");
    rainbowMode.classList.remove("active");
    colorPick.classList.add('active');

    if(selectorValue == "custom"){
        for(let j = 0; j < n; j++){
            eval(k + j + ".onmouseover = () =>{"+ k + j + ".style.backgroundColor = '" + customColor + "'}");
        };
    };
});
//

const buttons = document.querySelectorAll('button');

//Implementing all button functionality
buttons.forEach((button) =>{

    
    button.addEventListener('click', () =>{

        if(selectorValue != "clear"){
        buttons[0].classList.remove("active");
        buttons[1].classList.remove("active");
        colorPick.classList.remove('active');
        };

        if(selectorValue == "clear"){
            for(let j = 0; j < n; j++){
                eval(k + j + ".style.backgroundColor = 'white'");
            }
        }else if(selectorValue == "black"){
            buttons[0].classList.add("active");
            for(let j = 0; j < n; j++){
                eval(k + j + ".onmouseover = () =>{"+ k + j + ".style.backgroundColor = 'black'}");
            }
        }else if(selectorValue == "rainbow"){
            buttons[1].classList.add("active");
            for(let j = 0; j < n; j++){
                let r = `rgb(${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)})`;
                eval(k + j + ".onmouseover = () =>{"+ k + j + ".style.backgroundColor = '" + r + "'}");
            }
        };
    });
} );
//

mainDiv.style.gridTemplateColumns = "repeat(16, 30px)";
mainDiv.style.gridTemplateRows = "repeat(16, 30px)";

for(let i = 0; i < n; i++){
    eval('var ' + k + i + "= document.createElement('div');");
    eval(k + i + ".classList.add('colouring');" );
    eval(k + i + ".style.width = '" + wh + "px'" );
    eval(k + i + ".style.height = '" + wh + "px'" );

    if(selectorValue == "black"){
    //eval(k + i + ".addEventListener('mouseover', () => {" + k + i + ".style.backgroundColor = 'black'})");
    eval(k + i + ".onmouseover = () =>{"+ k + i + ".style.backgroundColor = 'black'}");
    }

    eval('mainDiv.appendChild(' + k + i + ');');
}







