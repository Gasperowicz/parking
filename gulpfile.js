'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    css:   './public/cache/css',
    js:    './public/cache/js',
    tpl:   './public/cache/tpl',
    fonts: './public/cache/fonts'
}



function generate_css() {
    return gulp.src('./assets/css/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('full.css'))
        .pipe(sourcemaps.write('./', {sourceRoot: '/cache/css'}))
        .pipe(gulp.dest(paths.css));
}

function generate_fonts() {
    return gulp.src([
        './node_modules/bootstrap-sass/assets/fonts/bootstrap/*.@(eot|svg|ttf|woff|woff2)',
        './node_modules/font-awesome/fonts/*.@(eot|svg|ttf|woff|woff2|otf)'])
        .pipe(gulp.dest(paths.fonts));
}

function generate_js() {
    return gulp.src([
            './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
            './assets/js/**/*.@(js|php)'])
        .pipe(sourcemaps.init())
        .pipe(concat('full.js'))
        .pipe(sourcemaps.write('./', {sourceRoot: '/cache/js'}))
        .pipe(gulp.dest(paths.js));
}

gulp.task('generate:css', function () {
    return generate_css();
});

gulp.task('generate:fonts', function () {
    return generate_fonts();
});

gulp.task('generate:js', function () {
    return generate_js();
});

gulp.task('default', ['generate:css', 'generate:js', 'generate:fonts'], function () {});
