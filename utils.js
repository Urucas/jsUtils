String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

Array.prototype.last = function() {
	return this[this.length-1];
}

String.prototype.trim = function() {
	return this.replace(/^\s+/g,'').replace(/\s+$/g,'');
}

function getURLVars(urlString) {
	var vars = {};
    var parts = urlString.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
	});
    return vars;
}
