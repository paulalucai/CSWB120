function processInfo() {
	var firstName = document.getElementById("first_name").value;
	var children = document.getElementById("children").value.toUpperCase();
	var result = children.substring(0, 1);
	var age = parseInt(document.getElementById("age").value);

	var today = new Date();

	if (result === "Y" || children === "YES") {
		if (age <= 19) {
			document.getElementById("message").innerHTML = "<p>You still have kids at home</p>";
		} else if (age > 19) {
			document.getElementById("message").innerHTML = "<p>Hopefully they have moved out of the house</p>";
		}
	} else if (result === "N" || children === "NO") {
		document.getElementById("message").innerHTML = "<p>It must be peaceful at home, " + firstName + " on this date of " + (today.getMonth() + 1) + "/" + today.getDate() + "</p>";
	} else {
		document.getElementById("message").innerHTML = "<p>Did you answer Yes or No?</p>";
	}
}