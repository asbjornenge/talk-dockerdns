var gulp    = require('./gulpfile')
var conf    = require('./conf')
var express = require('express')
var gaze    = require('gaze')

/**
 * App.
 */

gulp.tasks.copystatic.fn()
gulp.tasks.sass.fn()

var app = express()
 .use(express.static(__dirname + '/' + conf.dist))
 .listen(conf.port, function(){
  console.log('Server running at http://localhost:'+conf.port);
});

livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname + '/' + conf.dist);

gaze(['src/*.html','src/*.svg'], function(err, watcher) {
    this.on('all', function(event, filepath) {
        gulp.tasks.copystatic.fn()
    })
})
