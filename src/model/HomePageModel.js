const Resolver = require('./resolver.js');

class HomePageModel {
  constructor () {
    this.title = 'HomePage';
    this.breeds = Resolver.getBreeds();
  }
}

module.exports = new HomePageModel ();
