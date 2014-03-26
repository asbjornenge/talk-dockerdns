(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./presentation":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvc3J2L2FzYmpvcm5lbmdlL3RhbGstZG9ja2VyZG5zL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9zcnYvYXNiam9ybmVuZ2UvdGFsay1kb2NrZXJkbnMvc3JjL2pzL2Zha2VfMzJlYTY2NDYuanMiLCIvc3J2L2FzYmpvcm5lbmdlL3RhbGstZG9ja2VyZG5zL3NyYy9qcy9wcmVzZW50YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBQcmVzZW50YXRpb24gPSByZXF1aXJlKCcuL3ByZXNlbnRhdGlvbicpXG5cbmlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCJcIikgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIiMxXCI7XG5cbnZhciBwcmVzZW50YXRpb24gPSBuZXcgUHJlc2VudGF0aW9uKCk7XG5cbmRvY3VtZW50LmJvZHkub25rZXlkb3duID0gZnVuY3Rpb24oZSkge1xuICAgIHN3aXRjaChlLndoaWNoKSB7XG4gICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICBwcmVzZW50YXRpb24ubmF2aWdhdGUoJ3JpZ2h0JylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgcHJlc2VudGF0aW9uLm5hdmlnYXRlKCdsZWZ0JylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iLCIvKipcbiAqIFByZXNlbnRhdGlvblxuICovXG5cbnZhciBwcmVzZW50YXRpb24gPSBmdW5jdGlvbigpIHt9XG5wcmVzZW50YXRpb24ucHJvdG90eXBlLnJlcGxhY2VfaGFzaCA9IGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICBpZiAocGFnZSA8IDApIHJldHVyblxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjXCIrcGFnZVxufVxucHJlc2VudGF0aW9uLnByb3RvdHlwZS5uYXZpZ2F0ZSA9IGZ1bmN0aW9uKHRvKSB7XG4gICAgc3dpdGNoKHRvKSB7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZV9oYXNoKHBhcnNlSW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcjJylbMV0pKzEpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VfaGFzaChwYXJzZUludCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnIycpWzFdKS0xKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByZXNlbnRhdGlvbiJdfQ==
