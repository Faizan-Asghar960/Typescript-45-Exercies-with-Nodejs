"use strict";
// question. No. 31 = No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//step 1. • If the list is empty, print the message We need to find some users!
//step 2. • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ["Shahbaz", "Imran", "Frhan", "Akbar", "Faizan-Boos"];
usernames = [];
if (usernames.length === 0) {
    console.log("Your array is empty. We need to find some users!");
}
else {
    // Using forEach loop and Array
    usernames.forEach(oneUser => {
        if (oneUser.toLowerCase() === "faizan-boos") {
            console.log(`Hello Boos ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
