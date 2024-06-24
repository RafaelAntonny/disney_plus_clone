const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function uglifyJs() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function compileSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function minifyImage() {
    return gulp.src('./src/imgs/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imgs'));
}

exports.default = gulp.parallel(compileSass, minifyImage, uglifyJs);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compileSass))
    gulp.watch('./src/scripts/*.js', gulp.parallel(uglifyJs))
}
