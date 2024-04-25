// question. No.= 33: Ordinal Numbers: Ordinal numbers indicate their position in a array, 
//such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// step 1 • Store the numbers 1 through 9 in a array.
// step 2 • Loop through the array.
// step 3 • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
//creating Array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// using for-loop 
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var oneNumber = number_1[_i];
    var ordinalEnding = void 0;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalEnding));
}
