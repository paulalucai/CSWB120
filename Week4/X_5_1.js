var $ = function(id) {
	return document.getElementById(id);
};

var anonFunction = function() {
	$("addbutton").onclick = processInfo;
};

var processInfo = function() {
	var myItems = ["Rent", "Food", "Gas"];
	var myAmounts = [];

	myAmounts[0] = 1000;
	myAmounts[1] = 300;
	myAmounts[2] = 50;

	itemCount = myItems.length;
	amountCount = myAmounts.length;

	var addNumbers = function() {
		var total = itemCount + amountCount;
		return total;
	};

	total = addNumbers();

	$("total").innerHTML += total;
};

window.onload = anonFunction;