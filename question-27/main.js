// question, No. 27 = Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// step .1 • If the alien is green, print a message that the player earned 5 points.
// step. 2 • If the alien is yellow, print a message that the player earned 10 points.
// step. 3 • If the alien is red, print a message that the player earned 15 points.
// step. 4 • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Define verible
var alienColor = "green";
// using if and Else-if statment
if (alienColor === "green") {
    console.log(" version 1 you shot down green alien you have erand 5 points");
}
else if (alienColor === "yellow") {
    console.log("you shot down yellow alien you have areand 10 points");
}
else if (alienColor === "red") {
    console.log("you shot down yellow alien you have areand 15 points");
}
// second versoin
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("\n you shot down green alien you have erand 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("\n version 2 you shot down yellow alien you have areand 10 points");
}
else if (alienColor2 === "red") {
    console.log("you shot down yellow alien you have areand 15 points");
}
// 3rd version 
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you shot down green alien you have erand 5 points");
}
else if (alienColor3 === "yellow") {
    console.log("\n you shot down yellow alien you have areand 10 points");
}
else if (alienColor3 === "red") {
    console.log("\n version 3 you shot down yellow alien you have areand 15 points");
}
