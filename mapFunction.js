// map function 
let numbers = [1,2,3,4,5,6,7,8,9,10]

const square = (number) => number * number
const double = (number) => number * 2

const doubleNumbers = numbers.map(double)
const squareNumbers = numbers.map(square)

console.log(doubleNumbers)
console.log(squareNumbers)

