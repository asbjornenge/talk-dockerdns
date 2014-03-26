var Presentation = require('./presentation')

if (window.location.hash === "") window.location.hash = "#1";

var presentation = new Presentation();

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