const axios = require('axios');

class Resolver {
  async getBreeds () {
    try {
      return await axios.get('https://dog.ceo/api/breeds/list/all')
        .then(response => response.data.message)
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new Resolver ();
