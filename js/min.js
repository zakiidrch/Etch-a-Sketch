let container = document.querySelector('.container');
let btnReset = document.querySelector('.reset');
let numOfBox = 16;

// function for creat div box
function desBox() {
    container.style.cssText = `width: calc((${numOfBox} * 40px) + 40px)`;
    for(let j = 0; j < numOfBox; j++) {
        for(let i = 0; i < numOfBox; i++) {
            div = document.createElement('div');
            
            container.appendChild(div);
        } 
    }
    
}

desBox();
colorBox();
// reset number of box with button
btnReset.addEventListener('click', reset);

// function for get number of box with user input 
function reset() {
    removeDiv();
    numOfBox = prompt('entre your number of box');
    if(numOfBox <= 0 || numOfBox > 20) {
        numOfBox = prompt('Please entre positive number or grather than 0 and less than 20');
        return;
    } else {
        desBox();
        colorBox();
    }
    
}

// function for remove all box div
function removeDiv() {
    document.querySelectorAll('.container div').forEach((div) => {
        div.remove();
    });
}
// array of hex color
let colors = ['#606c38', '#283618', '#fefae0', '#dda15e', '#bc6c25',
              '#03045e', '#0077b6', '#00b4d8', '#90e0ef', '#caf0f8',
              '#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500',
              '#ccd5ae', '#e9edc9', '#fefae0', '#faedcd', '#d4a373',
              '#edede9', '#d6ccc2', '#f5ebe0', '#e3d5ca', '#d5bdaf',
              '#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff',
              '#dad7cd', '#a3b18a', '#588157', '#3a5a40', '#344e41',
              '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51',
              '#ffe5ec', '#ffc2d1', '#ffb3c6', '#ff8fab', '#fb6f92',
              '#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557',
              '#001219', '#005f73', '#0a9396', '#94d2bd', '#e9d8a6',
              '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226',
              '#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff',
              '#6f1d1b', '#bb9457', '#432818', '#99582a', '#ffe6a7',
              '#edafb8', '#f7e1d7', '#dedbd2', '#b0c4b1', '#4a5759',
              '#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7',
              '#132a13', '#31572c', '#4f772d', '#4f772d', '#ecf39e',
              '#d8e2dc', '#ffe5d9', '#ffcad4', '#ffcad4', '#9d8189',
              '#000814', '#001d3d', '#003566', '#ffc300', '#ffd60a',
              '#f0ead2', '#dde5b6', '#adc178', '#a98467', '#6c584c'];

              
// function for colored box div
function colorBox() {
    document.querySelectorAll('.container div').forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            let index = parseInt(Math.random() * colors.length);
            e.target.style.backgroundColor= `${colors[index]}`;
        })
    });
}
