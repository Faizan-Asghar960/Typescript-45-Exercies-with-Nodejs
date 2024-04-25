// Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array countries and print its Original Order
var countriesTovisit = ["china", "Demark", "Barazil", "Argentina"];
console.log("Original order:", countriesTovisit);
// Printing the Array inAlphbatical order without modifying the actul array list 
console.log("Alphbatical Order:", __spreadArray([], countriesTovisit, true).sort());
// Show that the array is still in the original order 
console.log("Still in Original order:", countriesTovisit);
// Print the Array in Reversed order without modifying the actul arry list
console.log("Reverse order:", __spreadArray([], countriesTovisit, true).reverse);
// Show that the array is still in the original order 
console.log("Still in Original order:", countriesTovisit);
// We have changed the original Array order now
console.log("original Array Reversed:", countriesTovisit.reverse());
// Print the array to show that it's back to its original order 
console.log("Bcak to original order:", countriesTovisit.reverse());
// Print the array to show its order has been chnaged in Alphbatical order now
console.log("Sorted in Alphbatical order:", countriesTovisit.sort);
// We have changed again  the original Array order now is again
console.log("original Array Reversed Again:", countriesTovisit.reverse());
