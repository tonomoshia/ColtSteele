// functions_prob_set.js

// isEven(): write a function which takes a single numerical argument and remains true if the number is even, and false otherwise.
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// factorial(): write a
// function which takes a single numerical argument and returns the factorial of that number.
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

// kebabToSnake(): write a function which takes a single kebab-based string argument and returns the snake_cased version. (Basically replace "-"s with "_"s.)
function kebabToSnake(str) {
    var newString = str.replace(/-/g, "_");
    return newString;
}