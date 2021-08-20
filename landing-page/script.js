const menuBtn = document.getElementById('menu-btn');
const signUpBtn = document.getElementById('sign-up');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

menuBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-menu');
});

signUpBtn.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);
