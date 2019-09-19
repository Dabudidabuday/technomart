const path = require('path');
const DeveloperPageModel = require(path.resolve('src/model/DeveloperPageModel.js'));

module.exports = function (router) {
  /**
   * @Route ("/developer", method="GET")
   * @return String
   */
  router.get('/developer', function (request, response) {
    response.render('layouts/DeveloperPage/index.njk', DeveloperPageModel);
  });

  return router;
};
