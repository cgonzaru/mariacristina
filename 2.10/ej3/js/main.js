'use strict';
const main__title = document.querySelector('.main__title');
const input = document.querySelector('.main__title');
const btn = document.querySelector('.main__title');
const title = document.querySelector('.main__title');
const name__title = document.querySelector('.main__title');
const user__name = document.querySelector('.main__title');
const user__avatar = document.querySelector('.main__title');
const avatar = document.querySelector('.main__title');
const user__repos = document.querySelector('.main__title');
const repos = document.querySelector('.main__title');


function getInteger() {
  
  fetch("https://api.github.com/users/")
    .then(response => response.json())
    .then(data =>{ img.src = data.message;
          img.alt= "perrito";
    });
}

btn.addEventListener ('click',getInteger);