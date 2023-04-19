// You are given an array of integers of size N – 1 ranging from 1 to N. There are no duplicates in the list. One of the integers is missing in the array. The task is to find the missing number in the series.
// (Nesting of loop and predefined functions are not allowed)

// Eg: Input = [3, 1, 2, 6, 4]
// Output = 5


const arr = [3, 1, 2, 6, 4]

const missing = (arr)=>{
    let n=arr.length+1
    let totalSum = (n*(n+1)/2)
    let sum = 0
    for(let i=0 ; i<=arr.length-1 ;i++){
        sum = sum+arr[i]
    }
    return totalSum - sum;
}

const result = missing(arr)
console.log(result)

