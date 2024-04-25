// question, No, 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
// and then use a for loop to print the name of each pizza.

// step 1 • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of
//the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//step 2 • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist
// of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


// craeting a Array
let pizza = ["Chukan Tika", "Malai", "fajita"]

// using for-loop
for(let onePizzap of pizza){
console.log(`I like ${onePizzap},Pizza`);
}

//print a maessage outside of the loop
console.log("Pizza is love")