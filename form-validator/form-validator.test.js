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
  const usernameInput = document.getElementById('username');
  const message = "test message";

  showError(usernameInput, message);

  const formControl = usernameInput.parentElement;
  expect(formControl.classList.contains('error')).toBeTruthy();
  expect(formControl.querySelector('small').innerText).toBe(message);
});
