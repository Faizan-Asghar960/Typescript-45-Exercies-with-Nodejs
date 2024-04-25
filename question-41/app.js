// question. No. 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
// Defined a function to print each magician name from an Array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Defined an Array containing magician names 
var magician_names = ["Harry Potter", "Imran Khan", "Farhan"];
// Call the function to print each magician name
show_magicians(magician_names);
