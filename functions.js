// Functions in Js
// Functions are reusable pieces of code that perform a specific task. They can take input (

// Function definition  with no parameter and return value
function greetTheWorld () {
    console.log("Hello, world!");
}

// Function definitin with one parameter and return value
function greetPeople (name) {
    return  "Hello, " + name + "!";
}

// Function definition that  takes multiple parameters and returns the sum of all values passed as arguments.
function addNumbers(a , b) {
    return a + b;
}



greetTheWorld()
console.log(greetPeople('John'))
console.log(addNumbers(10,20))