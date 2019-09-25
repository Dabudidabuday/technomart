
const Resolver = require('./resolver.js');

class HomePageModel {
  constructor () {
    this.title = 'HomePage';
    this.breeds = Resolver.getBreeds();
  }

  setHomePageData (data) {
    console.log(data);
  }



  // async countBreeds () {
  //   const breeds = await this.getBreeds()
  //
  //   if (breeds.data.message) {
  //     setHomePageData(breeds.data.message);
  //   }
  // }
}

module.exports = new HomePageModel ();
