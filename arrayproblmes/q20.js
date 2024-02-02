// Given an integer num, return the number of digits in num that divide num.
// An integer val divides nums if nums % val == 0.

// Example 1:
// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.
// Example 2:
// Input: num = 121
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.


var countDigits = function(num) {
    let nums = num.toString()
    let count = 0
    for(let i =0 ; i<nums.length ; i++){
         let digit = parseInt(nums[i])
         if (digit !== 0 && num % digit === 0) {
              count++;
            }
    }
   return count
};





// var countDigits = function(num) {
//     let x = num
//     let count = 0
//     while(x!==0){
//         let digit = x % 10
//         if(digit !== 0 && (num%digit) === 0){
//             count++
//         }
//         let remain = Math.floor(x/10)
//          x = remain
        
        
//     }
//     return count
// }

console.log(countDigits(1248))