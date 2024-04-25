// question. No. 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt 
//of any size with a different message.
//MAking a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " Prints on shirt"));
}
// calling a function with by defualt values
make_shirt();
// caliing a Function now with Meduim size and defult Message
make_shirt("Medium");
//calling a functin now with Small size and Diffr=erent print Message
make_shirt("Small", "I love javascript");
