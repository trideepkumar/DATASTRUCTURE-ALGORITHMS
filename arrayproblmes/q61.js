var sumIndicesWithKSetBits = function(nums, k) {

    let  sum = 0
    for(let i=0 ; i<nums.length ;i++){
        let binary = i.toString(2)
        let count = binary.split('').reduce((acc,curr)=>{
            acc = acc+parseInt(curr)
            return acc
        },0)
        console.log(count)
   if(count === k){
       sum+=nums[i]
   }

    }       
  return sum

};

console.log(sumIndicesWithKSetBits([5,10,1,5,2],1))