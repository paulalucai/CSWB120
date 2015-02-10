var team = [];
var i = 0;
var msg = "";

while (i < 5) {
	team[i] = prompt("What is the team member's name?");
	msg += team[i] + "<br>";
	i++;
}

document.write("<h1>My Basketball Team Members</h1><p>" + msg + "</p><h2>Exercise 2-6a HTML</h2>");