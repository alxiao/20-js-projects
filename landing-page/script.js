const menuBtn = document.getElementById('menu-btn');
const menuContainer = document.querySelector('.menu-container');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('show');
  menuContainer.classList.toggle('show');
})
