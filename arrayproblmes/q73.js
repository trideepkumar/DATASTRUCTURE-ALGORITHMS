var missingNumber = function(nums) {
    console.log(nums)
    let sum = 0 

    for(let i=0; i<nums.length; i++){
        console.log(nums[i])
        sum+=nums[i]
    }

    let n = nums.length
    let totalSum = (n * (n+1)) / 2

    return totalSum - sum
};

let nums = [3,0,1]

console.log(missingNumber(nums))