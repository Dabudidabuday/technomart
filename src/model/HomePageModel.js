const Resolver = require('./resolver.js');

class HomePageModel {
  constructor () {
    this.title = 'HomePage';
    this.breeds = this.getItems(this.getBreeds());
  }

  getItems (success) {
    return success;
  }

  async getBreeds () {
    await Resolver.getBreeds()
      .then(data => data);
  }
}

module.exports = new HomePageModel ();
