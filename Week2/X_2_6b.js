var team = [];
var msg = "";

for (var i = 0; i < 5; i++) {
	team[i] = prompt("What is the team member's name?");
	msg += team[i] + "<br>";
}

document.write("<h1>My Basketball Team Members</h1><p>" + msg + "</p><h2>Exercise 2-6b HTML</h2>");