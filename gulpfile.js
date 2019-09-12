'use strict';
/**
  * @gulpfile {for practice}
  * compiles js and scss to css on files changes (dist folder);
  * use "gulp watch" command to start;
  */

const { gulp, src, dest, series, parallel, watch } = require('gulp');
const browserSync = require('browser-sync').create();
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
function buildHomePage () {
  compileScss('app/scss/HomePage/index.scss', 'dist/HomePage');
}

// ---------------- BUILD PROJECT ---------------- //
async function buildProject () {
  await buildHomePage();
}

// ---------------- WATCHER ---------------- //
function watchFiles () {
  watch('app/scss/**/*.scss').on('change', buildProject);
}

exports.watch = series(deleteDistFolder, buildProject, watchFiles);
