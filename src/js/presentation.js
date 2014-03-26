/**
 * Presentation
 */

var presentation = function() {}
presentation.prototype.replace_hash = function(page) {
    if (page < 0) return
    window.location.hash = "#"+page
}
presentation.prototype.navigate = function(to) {
    switch(to) {
        case 'right':
            this.replace_hash(parseInt(window.location.hash.split('#')[1])+1)
            break;
        case 'left':
            this.replace_hash(parseInt(window.location.hash.split('#')[1])-1)
            break;
    }
}

module.exports = presentation