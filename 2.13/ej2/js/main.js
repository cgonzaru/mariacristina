'use strict';

let counter = 0;
let timer;
let counterUva = '';

const uva = document.querySelector('.uva');

const incrementAndShowCounter = () => {
  counter++;
  counterUva += '🥭' ;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  uva.innerHTML = counterUva;

  if(counter === 12){
      clearInterval(timer);
  }
};

timer = setInterval(incrementAndShowCounter, 1000);