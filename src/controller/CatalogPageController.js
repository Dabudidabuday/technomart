const path = require('path');
const CatalogPageModel = require(path.resolve('src/model/HomePageModel.js'));

module.exports = function (router) {
  /**
   * @Route ("/catalog", method="GET")
   * @return String
   */
  router.get('/catalog', function (request, response) {
    response.render('layouts/CatalogPage/index.njk');
  });

  return router;
};
