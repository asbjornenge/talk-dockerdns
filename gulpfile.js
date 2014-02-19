var gulp = require('gulp'),
    lr = require('tiny-lr'),
    server = lr();

var SERVER_PORT = 4000;
var SERVER_ROOT = 'assets';
var LIVERELOAD_PORT = 35729;

function startExpress() {

}

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
