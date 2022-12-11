const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__nav');
const navLink = document.querySelectorAll('.header__nav-link');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
  hamburger.classList.toggle('is-active');
  hamburger.classList.toggle('fixed');
  menu.classList.toggle('open');
  overlay.classList.toggle('block');
}

export {hamburger, overlay, navLink, toggleMenu};