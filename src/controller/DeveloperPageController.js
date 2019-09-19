const path = require('path');
const fs = require('fs');
const DeveloperPageModel = require(path.resolve('src/model/DeveloperPageModel.js'));

module.exports = function (router) {
  /**
   * @Route ("/developer", method="GET")
   * @return Response
   */
  router.get('/developer', function (request, response) {
    response.render('layouts/DeveloperPage/index.njk', DeveloperPageModel);
  });

  /**
   * @Route ("/developer/register", method="POST")
   * @return String
   */
  router.post('/developer/register', function (request, response) {
    // fs.writeFileSync('test.json', JSON.stringify(request.body));
    response.send('success post /register'); // todo redirect
  });

  return router;
};
