const fs = require('fs');
const path = require('path');
window.document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, 'index.html'));

const {
  showError,
  showSuccess,
  checkEmail,
  getFieldName,
  checkRequired,
  checkLength,
  checkPasswordsMatch,  
} = require('./script');

test('showError', () => {
  const parentEl = document.createElement('div');
  const testEl = document.createElement('div');
  const smallEl = document.createElement('small');
  testEl.appendChild(smallEl);
  parentEl.appendChild(testEl);

  const message = "test message";
  showError(testEl, message);

  expect(parentEl.classList.contains('error')).toBeTruthy();
  expect(smallEl.innerText).toBe(message);
});
