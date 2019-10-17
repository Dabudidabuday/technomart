/**
  * @constructor Product
  * @param data {Object}
  * @returns {Object}
  */
class Product {
  constructor(product) {
    this.title = product.title;
    this.price = product.price;
    this.brand = product.brand;
  }
}

module.exports = Product;
