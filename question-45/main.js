// question, No, 45: Cars: Write a function that stores information about a car in a Object. The function should 
//always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
// Defined a function to create a car object with optional opation...
function create_car(manufacturer, model) {
    var opations = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        opations[_i - 2] = arguments[_i];
    }
    // initilize a car object with manudacture and model 
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional opations to the car object
    opations.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// CAll the function to creat a car object
var my_car = create_car("Toyta", "Corrolla", "color: Black", "sunrrof: True", "var: 2024");
// print the veribale to ensure all the information is stored correctly in the car oject
console.log(my_car);
