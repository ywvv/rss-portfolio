import {hamburger, overlay, navLink, toggleMenu} from './burger.js';
import {russian, english, getTranslateRu, getTranslateEn} from './translate.js';
import {theme, changeTheme, changeMenuTheme} from './theme.js';
import {portfolioBtn, changeImages} from './portfolio.js';

document.addEventListener("DOMContentLoaded", () => {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach(el => {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./img/photo/${el}/${i}.jpg`;
    }
  });
  if (window.localStorage.getItem('light-theme') == 'true') {
    changeTheme();
  }
  if (window.localStorage.getItem('ru-lang') == 'true') {
    getTranslateRu();
  }
});

russian.addEventListener('click', getTranslateRu);
english.addEventListener('click', getTranslateEn);
theme.addEventListener('click', changeTheme);
hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', changeMenuTheme);
overlay.addEventListener('click', toggleMenu);
navLink.forEach(el => el.addEventListener('click', toggleMenu));
portfolioBtn.forEach(el => el.addEventListener('click', changeImages));

console.log(`ОЦЕНКА - 85 БАЛЛОВ\n
Все пункты выполнены полностью!`
);