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
  const testEl = document.createElement('div');
  testEl.parentElement = document.createElement('div');
  showError(testEl, "test message");

  expect(testEl.classList.contains('error')).toBeTruthy();
});
