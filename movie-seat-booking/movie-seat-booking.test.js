const fs = require('fs');
const path = require('path');
window.document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, 'index.html'));

const {
  updateSelectedCount,
  storeMovieData,
} = require('./script');

test('storeMovieData stores data into localStorage', () => {
  const movieIndex = 2;
  const moviePrice = 20;
  const localStorageSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');

  storeMovieData(movieIndex, moviePrice);

  expect(localStorageSpy.mock.calls).toEqual([['selectedMovieIndex', movieIndex], ['selectedMoviePrice', moviePrice]]);
});

test('updateSelectedCount', () => {
  const localStorageSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');

  updateSelectedCount();

  const seatsCount = +document.getElementById('seats-count').innerText;
  const moviePrice = +global.localStorage.getItem('selectedMoviePrice');
  const totalEl = document.getElementById('total-price');
  expect(localStorageSpy).toHaveBeenCalled();
  expect(totalEl.innerText).toBe(seatsCount * moviePrice);
});
