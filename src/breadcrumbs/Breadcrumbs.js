const Breadcrumb = require('../entity/Breadcrumb.js');
const fixture = require('./fixture.js');

/**
  * @constructor Breadcrumbs
  * @param data {Object}
  * @returns {Object}
  */
class Breadcrumbs {
  constructor (data) {
    this.breadcrumbs = this.getBreadcrumbs();
  }

  /**
    * @method getBreadcrumbs
    * @returns {Array}
    */
  getBreadcrumbs () {
    return Array.from(fixture, function(item) {
      return new Breadcrumb(item);
    });
  }
}

module.exports = Breadcrumbs;
