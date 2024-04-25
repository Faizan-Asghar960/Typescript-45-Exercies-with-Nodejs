//question. No.38: Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country
// a default value. Call your function for three different cities, at least one of which is not in the default country.
// Creating a Function
function discribe_city(city, countery) {
    if (countery === void 0) { countery = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(countery));
}
// Calling a function
discribe_city("karachi");
discribe_city("LAhore");
discribe_city("hong kong", "USA");
