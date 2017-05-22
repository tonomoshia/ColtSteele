// while_loops.js

// Exercise 1 (prints out all numbers between -10 and 19)
var num = -10;
console.log ("PRINT OUT ALL NUMBERS BETWEEN -10 AND 19");

while(num <= 19) {
  console.log(num);
  num ++;
}

// Exercise 2 (prints out all even numbers between 10 and 40)
var num = 10;
 console.log("PRINT OUT ALL EVEN NUMBERS BETWEEN 10 AND 40");

while (num <= 40) {
  if(num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// Exercise 3 (Print all odd numbers between 300 and 333)
var num = 300;
   console.log("PRINT OUT ALL ODD NUMBERS BETWEEN 300 AND 333");

 while(num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
}
  num++;
 }

// Exercise 4 (prints out all numbers divisible by 5 and between 5 and 50.)
var num = 5;
    console.log("PRINT OUT ALL NUMBERS DIVISIBLE BY 5 AND 3 AND BETWEEN 5 AND 50");

while (num <=50) {
  if ((num % 5 === 0) && (num % 3 === 0)) {
    console.log(num);
  }
  num++;
}