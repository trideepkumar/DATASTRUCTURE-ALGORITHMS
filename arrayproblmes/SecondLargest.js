const SecondLargest = (arr)=>{
    let largest = -Infinity
    let secondlargest 
    for(let i=0 ; i<= arr.length-1; i++){
        if(arr[i]>largest){
            secondlargest = largest
            largest = arr[i]
        }
        if(arr[i] != largest && arr[i]>secondlargest){
            secondlargest = arr[i]
        }
    }
    return secondlargest
}

arr = [80,1,75,10,45,2,3,73,7,2,74,20]

const result = SecondLargest(arr)

console.log(result)
