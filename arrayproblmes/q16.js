// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

 const uniqueSum = (arr) =>{
    let sum = 0
    for(let i = 0 ; i< arr.length ; i++){
        let unique = true
        let num = arr[i]
        for(let j = 0 ; j< arr.length ; j++){
            if(i!== j && arr[i] === arr[j]){
                unique = false
                break
            }
        }
        if(unique){
            sum = sum+=num
        }
    }
    return sum
 }

 console.log(uniqueSum([1,2,3,4,5,5]))