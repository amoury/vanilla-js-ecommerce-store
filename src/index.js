import style from './main.css';
import Barba from 'barba.js';
import './scripts/helper';
import Product from './scripts/classes/product';
import { products } from './product-data';
import { ProductDataService } from './scripts/classes/product-data-service';


let dataService = new ProductDataService();
dataService.loadData(products);

for (let product of dataService.products) console.log(product.name);
  
















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






