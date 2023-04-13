//with O(n^2)complexity

// const  duplicates = (arr)=>{
//     let  duplicateArray =[]
//     for(let  i =0 ;i<arr.length;i++){
//         for(let j=0 ; j<arr.length ; j++){
//         if(arr[i] === arr[j] && !duplicateArray.includes(arr[i])){
//             duplicateArray.push(arr[i])
//         }
//     }
//     }
//     return duplicateArray
// }



const duplicates = (arr)=>{
    let result = []
    let obj ={}
    for(let i=0 ; i< arr.length ; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = true
            result.push(arr[i])
        }
    }
    return result;
}

const arr = [1,2,23,4,5,56,67,5,5,4,3,3,3,323,2,2]
const result = duplicates(arr)
console.log(...result)
console.log(result.length)