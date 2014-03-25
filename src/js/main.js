
if (window.location.hash === "") window.location.hash = "#1";

var p = function() {}
p.prototype.replace_hash = function(page) {
    if (page < 0) return
    window.location.hash = "#"+page
}
p.prototype.navigate = function(to) {
    switch(to) {
        case 'right':
            this.replace_hash(parseInt(window.location.hash.split('#')[1])+1)
            break;
        case 'left':
            this.replace_hash(parseInt(window.location.hash.split('#')[1])-1)
            break;
    }
};

var presentation = new p();

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