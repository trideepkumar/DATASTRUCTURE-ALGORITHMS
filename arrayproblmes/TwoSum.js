//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum =(arr,value)=>{
    for(let i=0;i< arr.length ;i++){
       for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]=== value){
            return [i,j]
        }
       }
    }
}

const arr = [1,2,43,5,6,7]
const result = twoSum(arr,11)
console.log(result);