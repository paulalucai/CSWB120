var $ = function(id) {
	return document.getElementById(id);
};

var myTransactions = [];
var processInfo = function() {
	var item = $("item").value;
	var amount = $("amount").value;
	var msg = "";
	msg = item + ":" + amount;

	myTransactions[myTransactions.length] = msg;

	var itemString = "";
	for (var i in myTransactions) {
		itemString += myTransactions[i] + "<br>";
	}

	$("total").innerHTML = itemString;

	$("item").value = "";
	$("amount").value = "";

};

var anonFunction = function () {
	$("addbutton").onclick = processInfo;
};

window.onload = anonFunction;