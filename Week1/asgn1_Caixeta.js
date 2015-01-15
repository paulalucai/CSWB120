// Chapter 1 Assignment: My Unconscious Life

var name = prompt("What is your name?");
var age = parseInt(prompt("What is your age?"));
var sleep = parseInt(prompt("How many hours do you sleep at night?"));

var yearsAsleep = Math.round(age * (sleep / 24));

document.write("<h1>My Unconscious Life</h1><p>Hi " + name + ". You have slept " + yearsAsleep + " years of your life away!</p>")

