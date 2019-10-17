class CatalogPageModel {
  constructor (data) {
    this.title = 'CatalogPage';
    this.breadcrumbs = data.breadcrumbs;
    this.products = data.products;
  }
}

module.exports = CatalogPageModel;
