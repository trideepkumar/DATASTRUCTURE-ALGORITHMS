// given an array of n integers where array[i] is n the range [1,n] .find the 
//missing numbers in the array
//eg: input arr =[4,3,2,7,1]
//output = [5,6]

let j = 1
let missing = []
for(let i=0; i<arr.length;i++){
      if(!missing.includes(arr[i])){
        missing.push(arr[i])
      }
}