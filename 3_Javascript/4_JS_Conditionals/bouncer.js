var age = prompt("How old are you?");

if (age<0) {
  console.log("Error. Try again.");
  alert("Error. Try again.");
}

else if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue.");
alert("Sorry, you are not old enough to enter the venue.");
}

else if (age<21) {
  console.log("You can enter, but cannot drink");
  alert("You can enter, but cannot drink");
}

else if (age==21) {
  console.log("Happy 21st birthday!! You get a free shot!");
  alert("Happy 21st birthday!! You get a free shot!");
}

// else if (age% == 0) {
//   console.log("your age is odd");
//   alert("your age is odd");
// }

else {
  console.log("Come on in. You can drink");
  alert("Come on in. You can drink");
}
