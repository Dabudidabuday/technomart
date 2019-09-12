module.exports = function (router) {
  /**
   * @Route ("/home", method="GET")
   * @return String
   */
  router.get('/home', function (request, response) {
    response.render('layouts/HomePage/index.njk');
  });

  return router;
};
