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

// jquery extension to center an element into the screen
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}
