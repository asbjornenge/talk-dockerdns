var gulp = require('gulp')
var conf = require('./conf')

gulp.task('copystatic', function() {
    return gulp.src('./'+conf.src+'/index.html')
            .pipe(gulp.dest('./'+conf.dist));
})

module.exports = gulp;