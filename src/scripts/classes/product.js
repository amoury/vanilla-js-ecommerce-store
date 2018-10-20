class Product {
  constructor(name, description, mainImage, price, category) {
    this.name = name;
    this.description = description;
    this.mainImage = mainImage;
    this.qty = 0;
    this.price = price;
    this.category = category;
  }

  // add to cart

  // calculate price
  calculatePrice(qty, price) {
    return qty * price;
  }

}

export default Product;