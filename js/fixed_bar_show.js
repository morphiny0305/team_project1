// header fixed-bar scroll show
const menu = document.querySelector('#menu');
const menuHeight = menu.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > menuHeight) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
});