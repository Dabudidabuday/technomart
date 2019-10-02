const BaseModel = require('./BaseModel.js');

class DeveloperPageModel extends BaseModel {
  constructor () {
    super();

    this.title = 'developer page';
    this.products = [
      {title: 'Perfo1', price: '3333', id: 285},
      {title: 'Perfo2', price: '3232', id: 180},
      {title: 'Perfo3', price: '2121', id: 441},
    ]
  }
}

module.exports = new DeveloperPageModel();
