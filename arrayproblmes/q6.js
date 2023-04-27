//Input: nums = [10,4,8,3]
//Output: [15,1,11,22]
//Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
//The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
//Example 2:
//Input: nums = [1]
//Output: [0]
//Explanation: The array leftSum is [0] and the array rightSum is [0].
//The array answer is [|0 - 0|] = [0].


const arr = [10,4,8,3]


let sum =0
//taking the whole array sum
for(let i=0;i<arr.length;i++){
     sum = sum+arr[i]
}

const sumArray = ()=>{
let leftSum = 0
let result = []
for(let i=0;i<arr.length;i++){
    const rightSum = sum - leftSum - arr[i]
    result.push(Math.abs(leftSum-rightSum));
    leftSum+=arr[i]
}
return result
}

console.log(sumArray())