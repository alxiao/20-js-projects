const container = document.querySelector('.movie-seat-container');
const seats = document.querySelectorAll('.seat-row .movie-seat:not(.occupied');
const count = document.getElementById('seats-count');
const total = document.getElementById('total-price');
const movieSelect = document.getElementById('movie-select');

let ticketPrice = +movieSelect.value;

populateUI();

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('movie-seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  storeMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
})

// Save selected movie index and price
function storeMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seat-row .movie-seat.selected');
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localStorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, idx) => {
      if (selectedSeats.indexOf(idx) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
  if (selectedMoviePrice !== null) {
    ticketPrice = selectedMoviePrice;
  }

  updateSelectedCount();
}

module.exports = {
  storeMovieData,
  updateSelectedCount,
}
