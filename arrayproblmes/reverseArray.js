const reverseArray = (arr)=>{
    for(let i=0 ;i<Math.floor(arr.length/2) ; i++){
        let n = arr.length
        let temp = arr[i]
        arr[i] = arr[n-1-i]
        arr[n-1-i] = temp
    }
    return arr
}

const arr = [1,2,3,4,5,6]
const result = reverseArray(arr)
console.log(result)