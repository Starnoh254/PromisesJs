// Recursive functions
// A recursive function is a function that calls itself during its execution. 
// This means the function repeats its code until it reaches a base case, which stops the recursion from continuing any further.
// This self-invocation of the function, or calling itself, is known as recursion.

function countDown (number){
    if (number <= 0){
        return 
    }
    else{
      console.log(number)
    countDown(number - 1);  
    }
    
}

countDown(3)

function calculateSum (number){
    if (number <= 1){
        return number 
    }
    else {
        return number + calculateSum(number - 1)
    }
}

console.log(calculateSum(3))


let number = 1
function show (){
    console.log("Hi " , number)
    number++
    show ()
}

show()