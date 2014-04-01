/**
 *  Presentation
 */

var dom = require('./nanodom')

var presentation = function(min, max) {
    this.min = min;
    this.max = max;
}

presentation.prototype.current_page = function() {
    return parseInt(window.location.hash.split('#')[1])
}
presentation.prototype.replace_hash = function(page) {
    window.location.hash = "#"+page
}
presentation.prototype.navigate = function(to) {
    switch(to) {
        case 'right':
            var page = this.current_page()+1;
            if (page > this.max) page = this.max;
            this.show(page)
            this.replace_hash(page)
            break;
        case 'left':
            var page = this.current_page()-1;
            if (page < this.min) page = this.min;
            this.show(page)
            this.replace_hash(page)
            break;
    }
}
presentation.prototype.show = function(page) {
    if (page === this.current_page()) return
    dom('#container .element').forEach(function(element) {
        element.setAttribute('class','element')
        dom(element).addClass('page'+page)
    })
}

module.exports = presentation