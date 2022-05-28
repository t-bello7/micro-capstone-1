const menuBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.add('visible');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('visible');
});
