function processInfo() {
	// user-entered numbers from input boxes
	var firstNum = parseFloat(document.getElementById("firstnum").value);
	var secondNum = parseFloat(document.getElementById("secondnum").value);

	// function to add both numbers from user input and return the total
	var addNumbers = function() {
		var total = firstNum + secondNum;
		return total;
	};

	// displays the total
	document.getElementById("total").innerHTML += addNumbers();
}