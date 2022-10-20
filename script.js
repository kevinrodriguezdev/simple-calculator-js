let box = document.getElementById('result');
let numbers = document.querySelectorAll('input.number');
function hola() {
    
}

function init() {
    
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click',function(e) {
            console.log(e.textContent);
        })    
    }
}


window.onload = init