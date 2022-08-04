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


