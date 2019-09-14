'use strict';
/**
  * @gulpfile {for practice}
  * compiles js and scss to css on files changes (dist folder);
  * use "gulp watch" command to start;
  */

const { gulp, src, dest, series, parallel, watch } = require('gulp');
// const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const del = require('del');

function deleteDistFolder () {
  return del('dist');
}

/**
  * @method compileScss
  * @param source {String}
  * @param dist {String}
  */
function compileScss (source, dist) {
  return src(source)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(dest(dist));
}

// ---------------- BUILD PAGES ---------------- // // todo class
function buildApp () {
  let date = new Date();
  let page = 'App/Framework'; // todo param
  compileScss('app/scss/framework/index.scss', 'dist/App');
  return console.log (`${page} compiled successfully at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

function buildHomePage () {
  let date = new Date();
  let page = 'HomePage'; // todo param
  compileScss('app/scss/HomePage/index.scss', 'dist/HomePage');
  return console.log (`${page} compiled successfully at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

function buildCatalogPage () {
  let date = new Date();
  let page = 'CatalogPage'; // todo param
  compileScss('app/scss/CatalogPage/index.scss', 'dist/CatalogPage');
  return console.log (`${page} compiled successfully at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

// ---------------- BUILD PROJECT ---------------- //
async function buildProject () {
  buildApp();
  buildHomePage();
  await buildCatalogPage();
}

// ---------------- WATCHER ---------------- //
function watchFiles () {
  watch('app/scss/HomePage/**/*.scss').on('change', buildHomePage);
  watch('app/scss/CatalogPage/**/*.scss').on('change', buildCatalogPage);
  watch('app/scss/framework/**/*.scss').on('change', buildApp);
  watch('app/scss/basicComponents/**/*.scss').on('change',buildProject);
}

exports.watch = series(deleteDistFolder, buildProject, watchFiles);
// exports.build = buildProject;
