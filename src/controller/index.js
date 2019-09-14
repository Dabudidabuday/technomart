module.exports = function (app, router) {
  const home = require('./HomePageController.js')(router);
  const developer = require('./DeveloperPageController.js')(router);
  const catalog = require('./CatalogPageController.js')(router);

  app.use(home);
  app.use(developer);
  app.use(catalog);
};
