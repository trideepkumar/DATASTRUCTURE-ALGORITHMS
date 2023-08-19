// const duplicates = (arr)=>{
//     let duplicate = []
//     let obj ={}
//     for(let i=0 ;i<arr.length; i++){
//         if(obj[arr[i]]){
//         duplicate.push(arr[i])
//         }
//     } 
//     return duplicate
// }

const duplicates =(arr)=>{
    let result = []
    for(let i=0;i<arr.length;i++){
        for(let j=0 ;j<arr.length;j++){
            if(i!==j && arr[i]===arr[j] && !result.includes(arr[i])){
                result.push(arr[i])
            }
        }
    }
    return result
}

 const arr = [1,2,3,3,34,34,5,5,6,7]
 const duplicate = duplicates(arr)
 console.log(duplicate)