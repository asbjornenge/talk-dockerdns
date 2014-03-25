var gulp      = require('gulp')
var conf      = require('./conf')
var sass      = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename    = require("gulp-rename");

gulp.task('copystatic', function() {
    return gulp.src([conf.src+'/*.html',conf.src+'/*.svg'])
            .pipe(gulp.dest(conf.dist));
})

gulp.task('sass', function () {
    gulp.src(conf.src+'/sass/main.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename("main.css"))
        .pipe(gulp.dest(conf.dist))
})

module.exports = gulp;