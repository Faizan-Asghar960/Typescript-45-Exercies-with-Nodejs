// question. No. 30 = Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
//step. • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//step. • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//craeting a Ayyar
var userNames = ["Shahbaz", "Imran", "Akbar", "Farhan", "Faizan-Boos"];
// Using forEach loop and Array
userNames.forEach(function (oneUser) {
    if (oneUser.toLowerCase() === "faizan-boos") {
        console.log("Hello Boos ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
