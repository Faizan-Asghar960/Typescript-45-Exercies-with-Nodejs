// question, No, 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
//make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
// Defined the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magician great through .map() it will modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Defined an Array of magician names
var magician_names = ["Harry potter", "Faizan Asghar", "Imran Khan"];
// Calling the function to add "The Great" to each magician's name
var great_magicians = make_great(magician_names);
// Print the great magician names
show_magicians(great_magicians);
