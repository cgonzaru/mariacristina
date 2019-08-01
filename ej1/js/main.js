'use strict';
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

function getInteger() {
  
  fetch("https://api.rand.fun/text/word")
    .then(response => response.json())
    .then(data => (text.innerHTML = data.result));
}

btn.addEventListener ('click',getInteger);