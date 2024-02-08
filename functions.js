// This is function hoisting 
// Function declaration - it's always available from the start of code execution.
console.log(getSum(1 , 2 , 3 , 4 , 5))

greetTheWorld()
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

// The arguments  object - it is an array-like object that contains the arguments passed to a function. 

function getSum () {
    let sum = 0
    for (let i = 0; i < arguments.length ; i ++) {
        sum += arguments[i]
    }
    return sum;
}


console.log(greetPeople('John'))
console.log(addNumbers(10,20))


let sum = addNumbers

console.log(sum(10,20));

function average (a , b , sum) {
    return sum(a , b) / 2;
}

console.log(average(5 , 6 , addNumbers))


function cmToIn (length){
    // Conversion formula: 1 inch = 2.54 cm
    return length / 2.54;
}

function inToCm (length) {
    return  length * 2.54;
}

function dollarsToKsh (amount){
    // US Dollar to Kenyan Shilling conversion rate : 1 USD = 160.50
    return  amount * 160.50;
}

function convert (converter , length){
    return converter(length);
}

let inches = convert(cmToIn , 15.24)
console.log(`${inches} In` )

let centimeters = convert(inToCm , 6)
console.log(`${centimeters}  CM`)

let  ksh = convert(dollarsToKsh , 6.5)
console.log (`${ksh} KSH `)

 function getCurrencyRates (){
    return new Promise (async (resolve , reject ) => {
        
        const response = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_DFcwNh0dgaJFOlbB2l0AnQps57EMF0o9fmyghltz&base_currency=USD&currencies=EUR')
        const data = await response.json()
        console.log(data)
        resolve (data)
    })
}

getCurrencyRates()

