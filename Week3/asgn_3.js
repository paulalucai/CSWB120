var $ = function(id) {
	return document.getElementById(id);
};

var validateItems = function() {
	var firstName = $("firstname").value;
	var lastName = $("lastname").value;
	var email = $("email").value;
	var city = $("city").value;
	var donation = parseFloat($("donation").value);
	var flag1;
	var flag2;
	var flag3;
	var flag4;
	var flag5;

	if (firstName == "") {
		$("firstnameerror").firstChild.nodeValue = "Enter First Name";
		$("firstnameerror").style.color = "red";
		flag1 = false;
	}  else {
		$("firstnameerror").firstChild.nodeValue = "*";
	}
	if (lastName == "") {
		$("lastnameerror").firstChild.nodeValue = "Enter Last Name";
		$("lastnameerror").style.color = "red";
		flag2 = false;
	}  else {
		$("lastnameerror").firstChild.nodeValue = "*";
	}
	if (email == "") {
		$("emailerror").firstChild.nodeValue = "Enter Email";
		$("emailerror").style.color = "red";
		flag3 = false;
	}  else {
		$("emailerror").firstChild.nodeValue = "*";
	}
	if (city == "-") {
		$("cityerror").firstChild.nodeValue = "Select a City from the list";
		$("cityerror").style.color = "red";
		flag4 = false;
	}  else {
		$("cityerror").firstChild.nodeValue = "*";
	}
	if (donation == "") {
		$("donationerror").firstChild.nodeValue = "Enter Donation Amount";
		$("donationerror").style.color = "red";
		flag5 = false;
	} else if (isNaN(donation)) {
		$("donationerror").firstChild.nodeValue = "Amount must be numeric";
		$("donationerror").style.color = "red";
		flag5 = false;
	} else {
		$("donationerror").firstChild.nodeValue = "*";
	}

	if (flag1 == false || flag2 == false || flag3 == false || flag4 == false || flag5 == false) {
		return false;
	} else {
		return true;
	}
};

var addPatron = function() {
	var isValid = validateItems();
	
	if (isValid == true) {
		$("myform").submit();
	} else {
		$("endmessage").innerHTML = "Patron Not Added!";
		$("endmessage").style.color = "red";
	}
};

var clearFields = function() {
	$("firstname").value = "";
	$("lastname").value = "";
	$("email").value = "";
	$("donation").value = "";
	$("city").value = "-";
};

window.onload = function() {
	$("firstname").focus();
	$("addpatron").onclick = addPatron;
	$("clearfields").onclick = clearFields;

};