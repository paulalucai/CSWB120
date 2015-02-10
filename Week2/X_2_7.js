var myFruit = "";
var userFruit = "";
var prevFruit = "";

for ( var counter = 0; counter < 3; counter++ ) {
       userFruit = prompt("Enter Name a of Fruit: ");

       if (userFruit === prevFruit) {
       		alert("You can't enter that fruit name twice in a row");
       }

	   myFruit += userFruit + "<br>";
	   prevFruit = userFruit;
}

document.write("<h1>Three Types of Fruit are...</h1><p>" + myFruit + "</p>");