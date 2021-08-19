let n = 256
let k = "div";

const mainDiv = document.querySelector('#mainBlock')

for(let i = 0; i < n; i++){
    eval('var ' + k + i + "= document.createElement('div');");
    console.log(eval(k + i))
    eval(k + i + ".classList.add('colouring');" )
    eval('mainDiv.appendChild(' + k + i + ');');
}

