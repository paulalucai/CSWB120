var name = prompt("What is your name?");

if (name === "Mary") {
	var children = prompt("Do you have children (Yes or No)?");
	if (children === "No") {
		document.write("<p>It must be peaceful at home, Mary.</p>");
	} else if (children === "Yes") {
		var age = prompt("What is the age of your eldest child?");
		if (isNaN(age)) {
			alert("You did not provide an integer for the age.");
		} else if (age < 19) {
			document.write("<p>You still have kids at home.</p>");
		} else if (age > 19) {
			document.write("<p>Hopefully they have moved out of the house.</p>");
		}
	}
} else if (name === "Jane") {
	var children = prompt("Do you have children (Yes or No)?");
	if (children === "No") {
		document.write("<p>It must be peaceful at home, Jane.</p>");
	} else if (children === "Yes") {
		var age = prompt("What is the age of your eldest child?");
		if (isNaN(age)) {
			alert("You did not provide an integer for the age.");
		} else if (age < 19) {
			document.write("<p>You still have kids at home.</p>");
		} else if (age > 19) {
			document.write("<p>Hopefully they have moved out of the house.</p>");
		}
	}
} else {
	document.write("<p>Get back to work, " + name + ".</p>");
}