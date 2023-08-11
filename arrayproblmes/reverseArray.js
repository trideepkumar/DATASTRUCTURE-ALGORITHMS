// const reverseArray = (arr)=>{

//     for(let i=0 ;i<Math.floor(arr.length/2) ; i++){

//         let n = arr.length-1
//         let temp = arr[i]
//         arr[i] = arr[n-i]
//         arr[n-i] = temp   

//     }
//     return arr
// }

const reverseArray = (arr)=>{

    for(let i=0 ;i < Math.floor(arr.length/2) ; i++){
            let n = arr.length - 1 
            let temp = arr[i]
            arr[i] = arr[n-i]
            arr[n-i] = temp
    }
    return arr
}

const arr = [1,2,3,4,5,6]
console.log(reverseArray(arr))

// const arr = [1,2,3,4,5,6]
// const result = reverseArray(arr)
// console.log(result)