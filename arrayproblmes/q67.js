var majorityElement = function(nums) {
    console.log("hello")
    let obj = {}
    let majorityCount = 0
    let majorityEle

    for(let i=0;i<=nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        }else{
            obj[nums[i]]++
        }
        if (obj[nums[i]] > majorityCount) {
            majorityCount = obj[nums[i]];
            majorityEle = nums[i];
        }
    }
     
     return majorityEle
   
};

console.log(majorityElement([1,2,4,2,4,2,2,1,3]))