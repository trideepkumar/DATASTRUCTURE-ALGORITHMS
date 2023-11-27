const atleastTwo = (num1,num2,num3) => {
     let result = []
     for(let i=0 ; i<num1.length;i++){
            let flag = false
            if(num2.includes(num1[i]) || num3.includes(num1[i])){
                flag = true
            }
            
            if(flag){
                result.push(num1[i])
            }
     }

     return result
}

let nums1 = [1,1,3,2]
let nums2 = [2,3]
let nums3 = [3]

const result = atleastTwo(nums1,nums2,nums3)

console.log(result)