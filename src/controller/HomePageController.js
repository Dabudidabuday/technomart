const path = require('path');
const HomePageModel = require(path.resolve('src/model/HomePageModel.js'));

module.exports = function (router) {
  /**
   * @Route ("/home", method="GET")
   * @return Response
   */
  router.get('/home', function (request, response) {
    console.log(HomePageModel);
    response.render('layouts/HomePage/index.njk', HomePageModel);
  });

  return router;
};
