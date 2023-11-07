var minOperations = function(nums) {
    let count = 0
    for(let i =0 ; i<nums.length ; i++){
        while(nums[i]<nums[i+1]){
            nums[i+1]++
            count = count++
        }
    }

    return count
    
};


let nums = [1,5,3]

console.log(minOperations(nums))