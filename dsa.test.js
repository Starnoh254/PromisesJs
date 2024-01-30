
const { isPalindrome } = require('./dsa');
const { describe } = require('node:test');

describe('My test ' , () => {
    it('check whether an integer is a palindrome' , () => {
        expect(isPalindrome(121)).toBe(true)
    });
    it('should return false if the number is not a palindrome',()=>{
        expect(isPalindrome(123)).toBe(false)
    })
})
