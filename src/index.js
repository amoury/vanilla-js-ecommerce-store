import style from './main.css';
import Barba from 'barba.js';
import './scripts/helper';

Barba.Pjax.start();

const target = document.querySelectorAll("a.category-menu__link");
for(let el of target) {
  el.addEventListener('click', e => {
    e.preventDefault();
    console.log(e);

  })
}

qs("#header__menu-btn").addEventListener('click', () => {
  qs(".header__sidedrawer").classList.add('open');
});

qs(".btn-close").addEventListener('click', () => {
  qs(".header__sidedrawer").classList.remove('open');
})




