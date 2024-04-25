// question. No. 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

   // Defined a function to print each magician name from an Array
   function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Defined an Array containing magician names 
let magician_names: string[] = ["Harry Potter", "Imran Khan", "Farhan"];

// Call the function to print each magician name
show_magicians(magician_names);
