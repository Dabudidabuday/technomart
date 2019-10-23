const axios = require('axios');
const Breadcrumbs = require('../breadcrumbs/Breadcrumbs.js');
const MathUtils = require('../utilities/Math.js');
const ProductEntity = require('../entity/Product.js');

class Resolver {
  constructor () {
    this.products = this.getProducts();
    this.breadcrumbs = this.getBreadcrumbs();
  }

  getProducts () {
    let items = new Array();

    for (let i = 0; i < 20; i++) {
      items.push(new ProductEntity({
        image: 'https://static.dnipro-m.ua/cache/products/1237/catalog_origin_162421.jpg',
        title: this.getRandomTitle(),
        brand: this.getRandomBrand(),
        prices: {
          old: this.getRandomPrice(),
          new: this.getRandomPrice(),
        },
      }));
    }

    return items;
  }

  getRandomBrand () {
    const brands = [
      'Hilti',
      'Makita',
      'DeWalt',
      'Stanley'
    ];

    return brands[MathUtils.getRandomToPoint(brands.length)];
  }

  getRandomTitle () {
    const titles = [
    'Перфоратор ЛАЛА-4508',
    'Шуруповёрт "Синий Дракон"',
    'Плоскогубцы',
    'Огромная пила для распиливания'
  ];

    return titles[MathUtils.getRandomToPoint(titles.length)];
  }

  getRandomPrice () {
    return MathUtils.getRandomToPoint(4000);
  }

  getBreadcrumbs () {
    return new Breadcrumbs().breadcrumbs;
  }

  async getBreeds (success) {
    try {
      return await axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response => success(response.data.message))
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new Resolver ();
