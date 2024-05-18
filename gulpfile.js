const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compileSass() {
    return gulp.src('./src/styles/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

function minifyImage() {
    return gulp.src('./src/imgs/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/imgs'));
}

exports.default = compileSass;
exports.watch = function() {
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(compileSass))
}
