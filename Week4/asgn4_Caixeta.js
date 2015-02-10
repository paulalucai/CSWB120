var $ = function(id) {
	return document.getElementById(id);
};

var BeatlesArray;
var beatleString = "";
var processArray = function() {
	var counter = 1;
	for (var i = 0; i <= BeatlesArray.length - 1; i++) {
		if (i !== BeatlesArray.length - 1) {
			beatleString += counter + ". " + BeatlesArray[i] + ", ";
		} else {
			beatleString += counter + ". " + BeatlesArray[i];
		}
		counter++;
	}
	$("list").innerHTML = beatleString;
};

var loadFunction = function() {
	BeatlesArray = [];

	$("john").onclick = function() {
		$("ringo").border = "0px";
		$("paul").border = "0px";
		$("george").border = "0px";
		this.border = '4px';
		this.style.color = 'yellow';
		BeatlesArray.push("John");
	};
	$("paul").onclick = function() {
		$("john").border = "0px";
		$("ringo").border = "0px";
		$("george").border = "0px";
		this.border = '4px';
		this.style.color = 'yellow';
		BeatlesArray.push("Paul");
	};
	$("george").onclick = function() {
		$("john").border = "0px";
		$("paul").border = "0px";
		$("ringo").border = "0px";
		this.border = '4px';
		this.style.color = 'yellow';
		BeatlesArray.push("George");
	};
	$("ringo").onclick = function() {
		$("john").border = "0px";
		$("paul").border = "0px";
		$("george").border = "0px";
		this.border = '4px';
		this.style.color = 'yellow';
		BeatlesArray.push("Ringo");
	};

	
	$("showlist").onclick = processArray;
};

window.onload = loadFunction;