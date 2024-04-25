// question, No, 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it should 
//print a summary of the sandwich that is being ordered. Call the function three times, using a different number of 
//arguments each time.


//Defined a function with a rest perameter that accept items arguments repernating our sendwich 
function makeSandwich(... items: string[]){

    console.log("Making a Sandwich with the following items: \n")

    items.forEach(singleitem => console.log(singleitem));
    
    console.log("\n Now Enjoy Sandwich\n")
}

// Call the function 3 times with 3 Differnt number of arguments
makeSandwich("Chikan","Chese","mayo","Egg");

makeSandwich("Bread","Butter");

makeSandwich("Bread","Butter", "Chikan","Mayo","Egg","Tomato");