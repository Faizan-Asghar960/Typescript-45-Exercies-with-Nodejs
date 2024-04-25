// question. No = 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
// step. 1 • If the person is less than 2 years old, print a message that the person is a baby.
// step, 2 • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// step, 3 • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// step, 4 • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// step, 5 • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// step, 6 • If the person is age 65 or older, print a message that the person is an elder.
// creatin a verible
var aeg = 20;
//creating a progrm for remaining the stage of life using if and else-if chain
if (aeg < 2) {
    console.log("\nyou are a baby");
}
else if (aeg >= 2 && aeg < 4) {
    console.log("\nyou are toddler");
}
else if (aeg >= 4 && aeg < 13) {
    console.log("\nyou are a kid");
}
else if (aeg >= 13 && aeg < 20) {
    console.log("\nyou are a teenager");
}
else if (aeg >= 20 && aeg < 65) {
    console.log("\nyou are a adult");
}
else if (aeg >= 65) {
    console.log("\nyou are a elders");
}
