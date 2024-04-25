// question No. 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
// write more tests. Have at least one True and one False result for each of the following: 

// step 1: • Tests for equality and inequality with strings

// step 2: .Tests using the lower case function

// step 3: • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// step 4: • Tests using "and" and "or" operators

// step 5: • Test whether an item is in a array

// step 6: • Test whether an item is not in a array

// define verible
let apple = "apple"
let uppercaseApple = "apple"
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "Banana", "Orange", "Mango"];



// Test for equavality and inequavality with strings
console.log(" is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple\n")
console.log(apple != "apple");


// Test using lowercase function
console.log("\nis Aplle is equal to apple after converting to lowercase\n");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nis Aplle is not equal to apple after converting to lowerCase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// nomerical Tests
// equal to
console.log("\nis ten is equal to twenty?");
console.log(ten == twenty);

// Not equal to
console.log("\n ten is not equal to twenty?");
console.log(ten != twenty);
// greater then  
console.log("\n ten is greter then zero?");
console.log(ten > 0);

// less then 
console.log("\n is twenty is less then 10?");
console.log(twenty <  10);

// greater then or equal to 
console.log("\n is ten is greater then or equal to 5?");
console.log(ten >= 5);

// less then or equal to 
console.log("\n twenty is less then or equal to 10?");
console.log(twenty <= 10);

// Tests using 'and' & 'or' operators

// using && (and)
console.log("\ntwenty is not equal to 10 and twenty is graetor then 10");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equal to 10 and twenty is graetor then 10");
console.log(twenty != 10 && twenty > 30);

// using || (or)

console.log("\n 20 is greator then 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greator then 50 or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whater an item is incolde Array
console.log("\nIs Orange included in my Array?");
console.log(fruits.includes("Orange"));

// Not include
console.log("\n is orange not inculde in my fruits Array");
console.log(!fruits.includes("orange"));