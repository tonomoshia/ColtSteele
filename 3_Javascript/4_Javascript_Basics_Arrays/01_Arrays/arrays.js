// arrays.js (quiz)


var numbers = [22, 67, 33, 96, 88];
// What does the following line print?
console.log(numbers[numbers.length]);
//this line would print out undefined because there is no item with an index of 5.


var friendsGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabee", "Goyle"],
    ["Mooney", "Wormtail", "Pronge"]
];
//What is the result of this line?
console.log(friendsGroups[2][0]);
// I thought would print the last group and the first group, but this is a "nested array", so it prints the first name in the last array.