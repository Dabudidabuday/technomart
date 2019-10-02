const axios = require('axios'); // TODO respository
const path = require('path');
const httpClient = require(path.resolve('config/httpClient.js'));

module.exports = class BaseModel {
  constructor () {
    this.main_menu = ['aa', 'bb', 'cc'];
    this.users = this.getUsers();
  }

  async getUsers () {
    return await axios.get('http://jsonplaceholder.typicode.com/users');
  }
}
