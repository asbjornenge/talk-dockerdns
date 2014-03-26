/**
 *  Main
 */

var Presentation = require('./presentation')
var min = 1;
var max = 10;

/** Init **/

if (window.location.hash === "") window.location.hash = "#"+min;
var presentation = new Presentation(min, max);
presentation.show(window.location.hash.split('#')[1])
document.body.onkeydown = function(e) {
    switch(e.which) {
        case 39:
            presentation.navigate('right')
            break;
        case 37:
            presentation.navigate('left')
            break;
    }
}