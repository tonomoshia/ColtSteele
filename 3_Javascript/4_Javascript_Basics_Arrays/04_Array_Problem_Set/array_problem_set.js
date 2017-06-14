// array_problem_set.js

// alert('This is a test!');

// printReverse()
// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don't actually reverse the array itself).

// I had to make function print(array) and then work backwards to make this work. Took a long time to figure this one out.

var array = [0, 1, 2, 3];

function printReverse(array) {
    for (var i = 3; i < array.length && i >= 0; i--) {
        console.log(i);
    }
}

printReverse(array);

//isUniform()
//write  a function isUniform which takes an array as an argument and returns true if all elements in the array are identical.

// var array = [0, 0, 0, 0];

var array = [0, 0, 0, 0];

function isUniform() {
    if (array[0] === array[1]) && (array[1] === array[2] && (array[2] === array[3]) {
                return true;
            } else {
                return false;
            }