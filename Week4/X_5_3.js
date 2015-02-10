var $ = function(id) {
	return document.getElementById(id);
};

var myTransactions = [];
var processInfo = function() {
	var item = $("item").value;
	var amount = $("amount").value;
	var msg = "";
	msg = item + ":" + amount;

	myTransactions.push(msg);

	$("total").innerHTML = myTransactions.join("<br>");

	$("item").value = "";
	$("amount").value = "";

};

var anonFunction = function () {
	$("addbutton").onclick = processInfo;
};

window.onload = anonFunction;