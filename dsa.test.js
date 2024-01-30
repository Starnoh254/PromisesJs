
const { isPalindrome , fibonacciSeries } = require('./dsa');
const { describe } = require('node:test');


describe('My test ' , () => {
    it('check whether an integer is a palindrome' , () => {
        expect(isPalindrome(121)).toBe(true)
    });
    it('should return false if the number is not a palindrome',()=>{
        expect(isPalindrome(123)).toBe(false)
    });
    it('should return [0 , 1 , 1 , 2 , 3] for input 5' , () => {
        expect(fibonacciSeries(5)).toStrictEqual([0 , 1 , 1 , 2 , 3])
    })
})
