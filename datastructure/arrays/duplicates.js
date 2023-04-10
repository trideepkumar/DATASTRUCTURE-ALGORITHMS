var removeDuplicates = function(nums) 
{
    let j=0
    for(let i=0; i < nums.length ; i++){
        if (nums[j] !== nums[i]) {
            j++
            nums[j] = nums[i]
        }
    }
    return j+1
}

const nums = [0,0,1,1,1,2,2,3,3,4]
const result = removeDuplicates(nums)
console.log(result);