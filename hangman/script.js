const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = new Set();
const wrongLetters = new Set();

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
          <span class="letter">
            ${correctLetters.has(letter) ? letter : ''}
          </span>
        `)
        .join('')
      }
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won!';
    popup.style.display = 'flex';
  }
}

// Update wrong letters
function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.size > 0 ? '<p>Wrong letters</p>': ''}
    ${[...wrongLetters].map(letter => `<span>${letter}</span>`)}
  `;

  figureParts.forEach((part, idx) => {
    const errorsNum = wrongLetters.size;

    if (idx < errorsNum) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // Check if lost
  if (wrongLetters.size === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost. :(';
    popup.style.display = 'flex';
  }
}

function showNotification() {
  notification.classList.add('show');

  setTimeout(() => notification.classList.remove('show'), 2000);
}

// Keydown listener
window.addEventListener('keydown', e => {
  const keyCode = e.code;
  if (keyCode.includes('Key')) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (correctLetters.has(letter)) {
        showNotification();
      } else {
        correctLetters.add(letter);
        displayWord();
      }
    } else {
      if (wrongLetters.has(letter)) {
        showNotification();
      } else {
        wrongLetters.add(letter);
        updateWrongLettersEl();
      }
    }
  }
});

// Restart game and play again
playAgainBtn.addEventListener('click', () => {
  // Empty letters
  correctLetters.clear();
  wrongLetters.clear();

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();

  popup.style.display = 'none';
})

displayWord();
