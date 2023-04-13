const arr = [1,2,34,456,7,89,64,4,5,7,889,9,9,754433,4]

const largestEven = (arr)=>{
    let largest = arr[0]
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]%2 === 0 && arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}


const result = largestEven(arr)
console.log(result)
