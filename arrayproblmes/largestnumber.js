const largest = (arr)=>{
    let large = arr[0]
    
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] > large){
            large = arr[i]
        }
    }
    return large
}

const arr = [1,2,3,4,5,6,]
const result = largest(arr)
console.log(result)
