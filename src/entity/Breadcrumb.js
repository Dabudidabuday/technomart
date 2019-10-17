/**
  * @constructor Breadcrumb
  * @param data {Object}
  * @returns {Object}
  */
class Breadcrumb {
  constructor (data) {
    this.icon = data.icon;
    this.title = data.title;
    this.url = data.url;
  }
}

module.exports = Breadcrumb;
