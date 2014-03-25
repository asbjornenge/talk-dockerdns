var gulp = require('gulp')
var conf = require('./conf')

gulp.task('copystatic', function() {
    return gulp.src([conf.src+'/*.html',conf.src+'/*.svg'])
            .pipe(gulp.dest('./'+conf.dist));
})

module.exports = gulp;