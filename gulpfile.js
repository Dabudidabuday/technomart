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

// ---------------- BUILD PAGES ---------------- //
async function buildApp () {
  await compileScss('app/scss/framework/index.scss', 'dist/App');
}

async function buildHomePage () {
  await compileScss('app/scss/HomePage/index.scss', 'dist/HomePage');
}

// function buildCatalogPage () {
//   compileScss('')
// }

// ---------------- BUILD PROJECT ---------------- //
async function buildProject () {
  buildApp();
  // buildCatalogPage();
  await buildHomePage();
}

// ---------------- WATCHER ---------------- //
function watchFiles () {
  watch('app/scss/HomePage/**/*.scss').on('change', buildHomePage);
  watch('app/scss/framework/**/*.scss').on('change', buildApp);
  watch('app/scss/basicComponents/**/*.scss').on('change',buildProject);
}

exports.watch = series(deleteDistFolder, buildProject, watchFiles);
// exports.build = buildProject;
