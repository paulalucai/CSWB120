function processInfo() {
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	var numPets = parseInt(document.getElementById("numpets").value);

	if (firstName === "") {
		document.getElementById("firstname_error").firstChild.nodeValue = "Please enter first name";
	}  else {
		document.getElementById("firstname_error").firstChild.nodeValue = "*";
	}
	if (lastName === "") {
		document.getElementById("lastname_error").firstChild.nodeValue = "Please enter last name";
	}  else {
		document.getElementById("lastname_error").firstChild.nodeValue = "*";
	}
	if (numPets === "" || isNaN(numPets) || numPets < 0 || numPets > 3) {
		document.getElementById("numpets_error").firstChild.nodeValue = "Please enter the number of pets you have";
	} else {
		document.getElementById("numpets_error").firstChild.nodeValue = "*";
	}

	var myPetId;
	var myPetName;
	var msg = "";

	for (var counter = 1; counter <= numPets; counter++) {
		myPetId = 'pet' + counter;
		myPetName = document.getElementById(myPetId).value;

        if (myPetName !== "") {
        	msg += " Your Pet #" + counter + " is named " + myPetName + ".";
        }
    }

    var today = new Date();
    var dateFormat = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();
    var nameFormat = lastName + ", " + firstName;

    document.getElementById("message").firstChild.nodeValue = "Your Name is listed as " + nameFormat + " and today's date is " + dateFormat + "." + msg;
}