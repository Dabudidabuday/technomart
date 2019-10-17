const path = require('path');
const CatalogPageModel = require(path.resolve('src/model/CatalogPageModel.js'));
const Resolver = require('./resolver.js');

module.exports = function (router) {
  /**
   * @Route ("/catalog", method="GET")
   * @return Response
   */
  router.get('/catalog', function (request, response) {
    let model = {
      MAIN_PAGE_DATA: new CatalogPageModel(Resolver)
    };

    response.render('layouts/CatalogPage/index.njk', model);
  });

  return router;
};
