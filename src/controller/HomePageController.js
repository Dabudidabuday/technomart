module.exports = function (router) {
  /**
   * @Route ("/home", method="GET")
   * @return Response
   */
  router.get('/home', function (request, response) {
    response.render('layouts/HomePage/index.njk', {title: 'home'});
  });

  return router;
};
