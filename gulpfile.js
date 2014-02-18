var gulp = require('gulp'),
    lr = require('tiny-lr'),
    server = lr();

var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = 'assets';
var LIVERELOAD_PORT = 35729;

function startExpress() {
  var express = require('express');
  var app = express();
//  app.use(require('connect-livereload')());
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT);
  console.log('Development server running on port '+EXPRESS_PORT);
}

// Watch
gulp.task('watch', function() {

  // Listen on port 35729
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };

    // Watch .scss files
    //gulp.watch('src/styles/**/*.scss', ['styles']);

    // Watch .js files
    //gulp.watch('src/scripts/**/*.js', ['scripts']);

    // Watch image files
    //gulp.watch('src/images/**/*', ['images']);

  });

});

// Dev server

gulp.task('dev', function() {
	startExpress();
  gulp.watch();
})
