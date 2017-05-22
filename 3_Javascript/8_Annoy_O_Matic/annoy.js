// annoy.js

// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah" && answer !== "YES" & answer !== "YEAH") {
//   var answer = prompt("Are we there yet?");
// }

// alert ("YAY, WE MADE IT!");

// version 2 for bonus section
var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah")) {
  var answer = prompt("Are we there yet?");
}

alert ("YAY, WE MADE IT!");