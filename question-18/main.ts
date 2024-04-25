// Seeing the World: Think of at least five places in the world you’d like to visit.

// Making a Array countries and print its Original Order
let countriesTovisit:string[] = ["china", "Demark", "Barazil", "Argentina"];
console.log("Original order:",countriesTovisit);

// Printing the Array inAlphbatical order without modifying the actul array list 
console.log("Alphbatical Order:", [...countriesTovisit].sort());

// Show that the array is still in the original order 
console.log("Still in Original order:", countriesTovisit);

// Print the Array in Reversed order without modifying the actul arry list
console.log("Reverse order:", [...countriesTovisit].reverse);

// Show that the array is still in the original order 
console.log("Still in Original order:", countriesTovisit);

// We have changed the original Array order now
console.log("original Array Reversed:", countriesTovisit.reverse());

// Print the array to show that it's back to its original order 
console.log("Bcak to original order:",countriesTovisit.reverse());

// Print the array to show its order has been chnaged in Alphbatical order now
console.log("Sorted in Alphbatical order:", countriesTovisit.sort);

// We have changed again  the original Array order now is again
console.log("original Array Reversed Again:", countriesTovisit.reverse());
