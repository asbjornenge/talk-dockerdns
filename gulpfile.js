var gulp = require('gulp')
var root = 'src'
var dist = 'dist'

gulp.task('copystatic', function() {
    gulp.src('./'+root+'/index.html')
            .pipe(gulp.dest('./'+dist));
})

/** WATCH **/

gulp.task('watch', function() {
    server.listen(LIVERELOAD_PORT, function (err) {
        if (err) { return console.log(err) };
    });
});

/** SERVER **/

gulp.task('server', function() {
    var express = require('express');
    var app = express();
    //  app.use(require('connect-livereload')());
    app.use(express.static(SERVER_ROOT));
    app.listen(SERVER_PORT);
    console.log('Development server running on port '+SERVER_PORT);
    // gulp.watch();
})
