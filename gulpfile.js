var gulp      = require('gulp')
var conf      = require('./conf')
var sass      = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename    = require("gulp-rename");
var uglify    = require('gulp-uglify');

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

gulp.task('scripts', function() {
  gulp.src(conf.src+'/js/*.js')
    .pipe(uglify({outSourceMap: true}))
    .pipe(gulp.dest(conf.dist))
});

gulp.task('default', ['copystatic','sass','scripts'])

module.exports = gulp;