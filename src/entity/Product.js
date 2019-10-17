/**
  * @constructor Product
  * @param data {Object}
  * @returns {Object}
  */
class Product {
  constructor(product) {
    this.title = product.title;
    this.prices = product.prices;
    this.brand = product.brand;
  }
}

module.exports = Product;
