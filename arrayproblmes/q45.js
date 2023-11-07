// largest odd number in a string

var largestOddnumber = (num)=>{
     let split =  num.split('')
     let largest = 0
     let nums =0
   for(let i=0 ;i<split.length ;i++){
    if(split[split.length-1]%2 !== 0){
        return nums
    }else{
       if(split[i]%2!==0 && split[i+1]%2 !== 0){
          nums = split[i].concat(split[i+1]) 
          console.log(nums)
          if(largest<nums){
            largest=nums
          }
       }
    }
   }
   return largest
}

let str = '1234'

const result = largestOddnumber(str)

console.log(result)