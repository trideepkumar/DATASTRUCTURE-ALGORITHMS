let result = (nums) => {
    let arr = [];
    let n = nums.length / 2;
    
    for (let i = 0; i < n; i++) {
      arr.push(nums[i]);
      arr.push(nums[i + n]);
    }
  
    return arr;
  };

  let nums = [0,2,4,6,7,8]

 console.log(result(nums)) 