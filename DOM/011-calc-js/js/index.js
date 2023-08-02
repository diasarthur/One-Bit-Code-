import { validateKey } from "./allowedKeys.js";
import { clipboardCopy } from "./copytoclipboard.js";
import { themeSwitch } from "./themeswitch.js";
import { calculate } from "./calculate.js";
import { handleButton } from "./allowedKeys.js";
const input = document.getElementById('input');

document.getElementById('clear').addEventListener('click', function() {
  input.value = '';
  input.focus();
})

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', handleButton)
})

validateKey()

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', clipboardCopy)

calculate();

// clipboardCopy();

themeSwitch();
