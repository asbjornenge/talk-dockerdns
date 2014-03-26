var gulp       = require('gulp')
var conf       = require('./conf')
var sass       = require('gulp-sass')
var minifyCSS  = require('gulp-minify-css')
var rename     = require("gulp-rename")
var uglify     = require('gulp-uglify')
var browserify = require('gulp-browserify')
var concat     = require('gulp-concat')

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

gulp.task('browserify', function() {
    gulp.src(conf.src+'/js/main.js')
        .pipe(browserify({
            debug     : true,
        }))
        // .pipe(uglify())
        .pipe(gulp.dest(conf.dist))
});

gulp.task('default', ['copystatic','sass','browserify'])

module.exports = gulp;