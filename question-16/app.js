//question. No. 16 = More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
// Creating a guestlist Arry
var guestList = ["Faizan khan", "Adnan khan", "zohiab", "M.farhan"];
// Making verible for those guest who cant come 
var dontcome = guestList[0];
// print the name of guest who cant come
console.log(dontcome, "Nahi askaty hain");
// Add or remove guest from guest list Array
guestList.splice(0, 1, "Arham");
// Meassage print for Bigger Table
console.log("Good News ! we have Found a Bigger Table For Dinner. ");
// Adding a new guest at starting index of array
guestList.unshift("Shahbaz khan");
// Adding a new guest at ending index of array
guestList.push("zain");
// Get a middle index of our guest list array 
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array 
guestList.splice(middleIndex, 0, "Usama");
// Print Meassge of updated List
console.log("updated List of our Guests");
// Sending a invition measse to our guests one by one with thier names 
guestList.forEach(function (oneguest) { return console.log("Aslamo alikom ".concat(oneguest, ", would you like to dinner with me")); });
