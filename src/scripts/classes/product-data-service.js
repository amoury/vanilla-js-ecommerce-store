import Product from './product';

export class ProductDataService {
  constructor() {
    this.products = [];
  }

  loadData(productsData) {
    for (let product of productsData) {
      this.products.push(product);
    }
  }
}