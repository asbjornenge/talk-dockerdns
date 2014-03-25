var build   = require('./build');
var express = require('express');
var gaze    = require('gaze');
var port    = 4000
var root    = 'src'
var dist    = 'dist'

/**
 * App.
 */

var app = express()
 .use(express.static(__dirname + '/' + root))
 .listen(port, function(){
  console.log('Server running at http://localhost:'+port);
});

livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname + '/' + dist);

// gaze('./src/**', function(err, watcher) {
//     this.on('all', function(event, filepath) {
//         build(function(err){
//             if (err) console.log(err)
//             else console.log('Built');
//         });
//     })
// })
