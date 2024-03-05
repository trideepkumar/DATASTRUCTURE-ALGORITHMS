var maxOperations = function(nums) {
    let result = {}
    let maxCount = 0;
    console.log("hello working")
    for(let i = 0; i < nums.length; i += 2){
        let sum = nums[i] + nums[i + 1];
        if(result[sum]) {
            result[sum]++;
            if(result[sum] > maxCount) {
                maxCount = result[sum]; 
            }
        } else {
            result[sum] = 1;
        }
    }
    return maxCount; 
};

let nums = [3, 2, 1, 4, 5];

console.log(maxOperations(nums));
