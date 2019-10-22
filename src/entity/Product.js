/**
  * @constructor Product
  * @param data {Object}
  * @returns {Object}
  */
class Product {
  constructor(product) {
    this.image = 'https://static.dnipro-m.ua/cache/products/1237/catalog_origin_162421.jpg';
    this.title = product.title;
    this.prices = product.prices;
    this.brand = product.brand;
  }
}

module.exports = Product;
