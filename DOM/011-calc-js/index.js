import { validateKey } from "./allowedKeys.js";
import { clipboardCopy } from "./copytoclipboard.js";
import { themeSwitch } from "./themeswitch.js";


const input = document.getElementById('input');
const resultInput = document.getElementById('result');


document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;

  })
})

document.getElementById('clear').addEventListener('click', function() {
  input.value = '';
  input.focus();
})

validateKey()

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
  resultInput.value = 'ERROR';
  resultInput.classList.add('error')
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove('error')
}

clipboardCopy();

themeSwitch();
