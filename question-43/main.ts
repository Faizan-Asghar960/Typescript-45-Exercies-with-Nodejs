// question, No, 43: Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() 
//with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array 
//and store it in a separate array. Call show_magicians() with each array to show that you have one array of the 
//original names and one array with the Great added to each magician’s name.

// Defined the function to show magician names
function show_magicians(magicians: string[]): void {
    magicians.forEach(name => console.log(name));
}

// function to make magician great through .map() it will modify Array
function make_great(magicians: string[]): string[] {
    return magicians.map(name => `The Great ${name}`);
}

// Defined an Array of magician names
let magician_names: string[] = ["Harry potter", "Faizan Asghar", "Imran Khan"];

// Making a copy of Original array through .slice() function

let copy_magician_names =  magician_names.slice()

// Modefiy the copy array to incloude "The Great" with thier names

let  copy_great_magician = make_great(copy_magician_names);

// Show both arrays original and copied


// Original
console.log("Original Array\n")
show_magicians(magician_names);

// Copied
console.log("\n Copied Array\n")
show_magicians(copy_great_magician)