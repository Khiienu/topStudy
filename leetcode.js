//* easy LeetCode problems 
//! problem 1 two sum 
//! Given an aray of integers [nums] and an integer [target], returns indices of two numbers such that they add up to target
//! you may assume that each input would have ONE SOLUTION  you may NOT use the same element twice 
//! can return answer in any order
// const twoSum = (nums, target) => {
//     let answer = []
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 1; j < nums.length;j++){ 
//             if(nums[i] + nums[j] === target &&  i !== j ){
//                 answer.push(i, j)
//             }
//         }
//     }
//     return answer.slice(0,2);
// }
// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([3,2,4], 6))
// console.log(twoSum([2,5,5,11], 10))

//! Problem 2
//! Given an integer x, return true if x is a palindrome integer. An integer is a palindrome if reads the same backwards as forward 
//! ex; 121 is True, -121 is not true

// const isPalindrome = x => {
//     if (x < 0) {
//         return false
//     }
//     const arr = x.toString().split("")
//     let answer = arr.toString()
//     let rev = arr.reverse().toString()
//     return answer === rev
// }
// console.log(isPalindrome(123421))

//? utilizing alot of Math.something // and lots of converting numbers to string string to array and back. 


//! Problem 3 - Roman numerals to integers
//! Constraints : 1 <= string.length <=15 
//!               string only contains the chars ("I","V","X","L","C","D","M")
//!               Guarenteed to have a valid number between [1, 3999]

// const romanToInt = (string) => {
    
//     //* make an array to push seperate roman numerals in.
//     const romanNum = {
//     //? key | pair
//         I:      1,
//         V:      5,
//         X:      10,
//         L:      50,
//         C:      100,
//         D:      500,
//         M:      1000,
//     }
//     let total = 0;
//     //* need to turn string into an array. 
//     for(let i = 0; i < string.length; i++) {
//         //* i i+1 | i
//         //* C M     I   V
//         if(string[i] === "I" && string[i+1] ==="V" ){
//             total+=4;
//             i++
//         }
//         else if(string[i] === "I" && string[i+1] === "X"){
//             total+=9;
//             i++
//         }
//         else if(string[i] === "X" && string[i+1] === "L"){
//             total+=40;
//             i++
//         }
//         else if(string[i] === "X" && string[i+1] === "C"){
//             total+=90;
//             i++
//         }
//         else if(string[i] === "C" && string[i+1] === "D"){
//             total+=400;
//             i++
//         }
//         else if(string[i] === "C" && string[i+1] === "M"){
//             total+=900;
//             i++
//         }
//         else {
//             total+=romanNum[string[i]]
//         }
//     }
//     return total;
//     //* string length can only be 1 to 15 long. 
//     //* strings can only contain the letters/characters ("I","V","X","L","C","D","M")
// }


// /*
//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.
// */
// console.log(romanToInt("M CM XC IV"))

//! Problem 4 : Longest Common Prefix 
//! find the longest common prefix in the array that contains words/strings

// const longestCommonPrefix = (string) => {
//     let prefix = ""

//     if(string === null || string.length === 0 ) return prefix

//     for(let i = 0; i < string[0].length;i++){
//         //* reading the first word only
//         //* reading the characters within that first word
//         const char = string[0][i] 
//         //* loops through the entire word, gathering all characters in the first string/indeces
//         for(let j = 1; j < string.length; j++){
//             if(string[j][i] !== char ) return prefix
//             //* Loops through all remaining words to check if char at string[0] matches up. if so move down to add new char to prefix. if not return prefix.
//         }
//         prefix+=char
//     }
//     return prefix
// }
// //*                              string[0] |  string[1] |   string[2]  
// console.log(longestCommonPrefix(["flower",    "flow",     "flowht"]))

