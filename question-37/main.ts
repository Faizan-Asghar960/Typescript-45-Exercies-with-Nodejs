// question. No. 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt 
//of any size with a different message.

//MAking a function
function make_shirt(size: string = "large", printMessage: string = "I love Typescript"){
console.log(`Creating a ${size} shirt with the ${printMessage} Prints on shirt`)
} 

// calling a function with by defualt values
make_shirt();

// caliing a Function now with Meduim size and defult Message
make_shirt("Medium")

//calling a functin now with Small size and Diffr=erent print Message
make_shirt("Small", "I love javascript")