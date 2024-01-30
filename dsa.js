// function to check whether a integer is a palindrome 

const isPalindrome = (int) => {
    return int === +int.toString().split("").reverse().join("")
}
// console.log(isPalindrome(1210))

module.exports = { isPalindrome } 
