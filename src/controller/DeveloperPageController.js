module.exports = function (router) {
  /**
   * @Route ("/developer", method="GET")
   * @return String
   */
  router.get('/developer', function (request, response) {
    response.render('layouts/DeveloperPage/index.njk');
  });

  return router;
};
