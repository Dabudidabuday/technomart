module.exports = function (router) {
  /**
   * @Route ("/home", method="GET")
   * @return Response
   */
  router.get('*', function (request, response) {
    response.render('layouts/404page/index.njk');
  });

  return router;
};
