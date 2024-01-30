// function to check whether a integer is a palindrome 

const isPalindrome = (int) => {
    return int === +int.toString().split("").reverse().join("")
}
// console.log(isPalindrome(1210))

// Fibonacci series 
const  fibonacciSeries = n =>{
    if(n<=0) throw new Error('Input should be greater than zero')

    else{
        let arr=[0,1]
        for(let i=2;i<n;i++){
            arr.push(arr[i-1] + arr[i-2])
        }

        return arr
    }
    
}

console.log(fibonacciSeries(5))

module.exports = { isPalindrome , fibonacciSeries } 
