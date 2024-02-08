// The following demonstrates the pass by value property of JS
// In JavaScript, primitive types (Number, String, Boolean, Null) are passed by value. Objects are always passed by reference.

function myFunction(x){
    x = 100
    console.log(x)
}

let y = 30
console.log("Before calling function: ",y)
myFunction(y)
console.log("After calling function: ",y)

// In this example, when we call myFunction and try to change the value of 'y' using 'x=100', it doesn't affect the original value of '

// Now we are going to try with an object
const ages = [34 , 56 , 55 , 57]

function myFun (x) {
    ages.push(99)
    console.log(ages)
}

console.log(`Array before calling function : ${JSON.stringify(ages)}`)
myFun(ages)
console.log(`Array after calling function : ${JSON.stringify(ages)}`)

let a = 12
let b = 12
console.log(a === b)

let x = [1,2];
let z = [1,2];

console.log(x === z);   // true because it checks for equality not identity

let ab = {name : "John"};
let bc = ab
ab = {name : "Kamau"}

console.log(ab)
console.log(bc)

