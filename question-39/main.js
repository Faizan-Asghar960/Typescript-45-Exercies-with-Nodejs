// question, No, 39: City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
// Creating a Function parameters which rerturn a value in string
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling A function and print the returned value
console.log(city_country("Kracahi", "Pakistan"));
console.log(city_country("TOkyo", "Japan"));
console.log(city_country("Barlin", "Germany"));
