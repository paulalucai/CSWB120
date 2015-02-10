var $ = function(id) {
	return document.getElementById(id);
};

var anonFunction = function() {
	$("addbutton").onclick = processInfo;
};

var processInfo = function() {
	var total = 0;

	for (var i = 1; i <= 3; i++) {
		var myNumberName = "number" + i;
		var myNumberValue = parseFloat($(myNumberName).value);
		total += myNumberValue;
	}

	$("total").innerHTML += total;
};

window.onload = anonFunction;