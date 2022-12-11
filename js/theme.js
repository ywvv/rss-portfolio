const body = document.querySelector('body');
const theme = document.querySelector('.header__theme');
const title = document.querySelectorAll('.title');
const buttons = document.querySelectorAll('.portfolio__seasons-btn');
const nav = document.querySelector('.header__nav');
const lines = document.querySelectorAll('.title-line');

function changeTheme() {
  theme.classList.toggle('day');
  theme.classList.toggle('rotate');
  body.classList.toggle('light');
  title.forEach(el => el.classList.toggle('light'));
  lines.forEach(el => el.classList.toggle('light'));
  buttons.forEach(el => el.classList.toggle('light'));
  if (body.classList == 'light') {
    window.localStorage.setItem('light-theme', true);
  } else {
    window.localStorage.setItem('light-theme', false);
  }
}

function changeMenuTheme() {
  if (body.classList == 'light') {
    nav.classList.toggle('light');
  }
}

export {theme, changeTheme, changeMenuTheme};