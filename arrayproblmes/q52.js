var maxSubsequence = function(nums, k) {
    
    let largestSum = -Infinity
    let result =[]
    

   for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let currentSum = nums[i] 
            let a = 0
            while(a<=k){
                currentSum += nums[j]
                j++
            }
            if (currentSum > largestSum) {
                largestSum = currentSum;
                result = [nums[i], nums[j]];
                console.log(result)
            }
        }
    }


  console.log("result :" , result)

    return result;
};

const nums = [-1,-2,3,4]
const k = 3

const result = maxSubsequence(nums,k)

console.log(result)  //output : [-1,3,4]