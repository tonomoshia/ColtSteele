// loops.js

// Exercise 1 (prints out odd numbers up to 9)
var num = 1;

while(num <= 10) {
  console.log(num);
  num +=2;
}

// Exercise 2 (prints out numbers evenly divisble by 4 up to and including 20)
var num = 1;

while (num <= 20) {
  if(num % 4 === 0) {
    console.log(num);
  }
  num++;
}

// Exercise 3 (Do not do-- Infite Loop. Never stops as it continues going into lower and lower negative integers that are always less than 150)
// var num = 100;
//  while(num < 150) {
//   console.log(num +1);
//   num --;
//  }