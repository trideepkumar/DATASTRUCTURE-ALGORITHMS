function getAllSubarrays(nums) {
    const result = [];
  
    for(let i=0; i< nums.length;i++){
        for(let j=i; j<nums.length;j++){
            const sub = nums.slice(i,j+1)
            result.push(sub)
        }
    }
  
    return result;
  }
  
  // Example usage:
  const myArray = [1, 2, 3];
  const subarrays = getAllSubarrays(myArray);
  console.log(subarrays);

  