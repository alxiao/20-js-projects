const fs = require('fs');
const path = require('path');
window.document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, 'index.html'));

const {
  updateSelectedCount,
  storeMovieData,
} = require('./script');

test('storeMovieData', () => {
  const movieIndex = 2;
  const moviePrice = 20;

  storeMovieData(movieIndex, moviePrice);

  expect(global.localStorage.getItem('selectedMovieIndex')).toBe(String(movieIndex));
  expect(global.localStorage.getItem('selectedMoviePrice')).toBe(String(moviePrice));
});

test('updateSelectedCount', () => {
  
});