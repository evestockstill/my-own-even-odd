import isEven from './is-even.js';

const submit = document.getElementById('submit');
const input = document.getElementById('input');
const evenPicture = document.getElementById('the-even');
const oddPicture = document.getElementById('the-odd');

submit.onclick = function() {
    const inputValue = Number(input.value);
  
    if(isEven(inputValue)) {
        evenPicture.classList.remove('hidden');
        oddPicture.classList.add('hidden');
    }
    else {
        oddPicture.classList.remove('hidden');
        evenPicture.classList.add('hidden');
      
    }

}
