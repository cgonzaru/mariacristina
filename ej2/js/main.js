'use strict';
const btn = document.querySelector('.btn');
const img = document.querySelector('.img');

function getInteger() {
  
  fetch("https://dog.ceo/api/breed/akita/images/random")
    .then(response => response.json())
    .then(data =>{ img.src = data.message;
          img.alt= "perrito";
    });
}

btn.addEventListener ('click',getInteger);