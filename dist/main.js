(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function dom() {}
dom.prototype             = new Array;
dom.prototype.append      = function(element)   { element.forEach(function(e) { this[0].appendChild(e) }.bind(this)); return this }
dom.prototype.remove      = function()          { this.forEach(function(e) {e.parentNode.removeChild(e)}); return this }
dom.prototype.prepend     = function(element)   { element.forEach(function(e) { this[0].insertBefore(e, (this[0].hasChildNodes()) ? this[0].childNodes[0] : null) }.bind(this)); return this }
dom.prototype.each        = function(fn)        { this.forEach(fn); return this }

function domify(str) { var d = document.createElement('div'); d.innerHTML = str; return d.childNodes }

module.exports = function(selector) {
    if (selector instanceof dom) return selector
    if (selector instanceof HTMLElement) {var d = new dom(); d.push(selector); return d}
    if (typeof selector !== 'string') return
    var s, d=new dom(), c=(selector.indexOf('<') == 0);
    s = c ? domify(selector) : document.querySelectorAll(selector);
    [].slice.call(s).forEach(function(e) {d.push(e)})
    return d
}

},{}],2:[function(require,module,exports){
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
},{"./presentation":3}],3:[function(require,module,exports){
/**
 *  Presentation
 */

var dom = require('nanodom')

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
    dom('#container .element').each(function(e) {
        e.setAttribute('class','element')
        e.classList.add('page'+page)
    })
}

module.exports = presentation
},{"nanodom":1}]},{},[2])