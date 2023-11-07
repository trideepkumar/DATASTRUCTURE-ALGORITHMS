var check = function(nums) {

    let sorted

    for (let k = 0; k < nums.length - 1; k++) {
        if (nums[k] < nums[k + 1]) {
            sorted = true
        }else{
            sorted=false
        }
    }

    console.log(sorted)

    // return true;
};

let nums = [1,2,3]

console.log(check(nums))