// const { expect, test, jest } = require('@jest/globals');
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
  expect(formControl.classList.contains('success')).toBeFalsy();
  expect(formControl.querySelector('small').innerText).toBe(message);
});

test('showSuccess', () => {
  const emailInput = document.getElementById('email');

  showSuccess(emailInput);

  const formControl = emailInput.parentElement;
  expect(formControl.classList.contains('success')).toBeTruthy();
  expect(formControl.classList.contains('error')).toBeFalsy();
});

test('checkEmail shows error for invalid email', () => {
  const emailInput = document.getElementById('email');
  emailInput.value = 'ANNIE.Xiaoemail.com ';

  checkEmail(emailInput);

  const formControl = emailInput.parentElement;
  expect(formControl.classList.contains('error')).toBeTruthy();
});
