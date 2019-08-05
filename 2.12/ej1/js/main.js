'use strict';

const list = document.querySelector('.list');

const arr = [1,2,3];

for (let i=0; i<arr.length; i++) {
    const newItem = document.createElement('li');
    const newLiContent = document.createTextNode(arr[i]);

    newItem.appendChild(newLiContent);
    list.appendChild(newItem);

}