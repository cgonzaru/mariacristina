'use strict';

const select = document.querySelector('.select');
const opt1 = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2');
const opt3 = document.querySelector('.opt3');

const img = document.querySelector('.img')
console.log(select.value);
function changeImage(){

    if(select.value === opt1.value){
        img.src = 'https//:placehold.it/200x200';
        img.appendChild(img.src);
        
    } else {
        console.log('no funciona');
    }
};

select.addEventListener('change', changeImage);

