var age = prompt("How old are you?");

if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue.");
alert("Sorry, you are not old enough to enter the venue.");
}
// only runs if already established that age is not less than 18
else if (age<21) {
  console.log("You can enter, but cannot drink");
  alert("You can enter, but cannot drink");
}

else {
  console.log("Come on in. You can drink");
  alert("Come on in. You can drink");
}
