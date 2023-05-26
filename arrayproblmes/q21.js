// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

var largestNumber = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length  - 1; j++) {
          const order1 = parseInt(String(nums[j]) + String(nums[j + 1]));
          const order2 = parseInt(String(nums[j + 1]) + String(nums[j]));
          if (order1 < order2) {
            let temp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
          }
        }
      }
    let largestNum = nums.join('');

    let isAllZeros = true;
    for (let i = 0; i < largestNum.length; i++) {
      if (largestNum[i] !== '0') {
        isAllZeros = false;
        break;
      }
    }

    if (isAllZeros) {
        return "0";
    }
    return largestNum;
  };
  

  const nums = [3, 30, 34, 5, 9];
  const result = largestNumber(nums);
  console.log(result)
  
  
  
  
  
  
