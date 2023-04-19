//printing unique elements in an array 

// const unique = (arr)=>{
//     const uniqueArray = []
//     for(let i=0;i<arr.length;i++){
//         let flag=0;
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 flag++
//             }
//         }
//         if(flag===1){
//           uniqueArray.push(arr[i])
//         }
//     }
//     return uniqueArray
// }

// let arr = [1,1,3,2,5,1,7,1,5,3,7,49,1,1]
// const result = unique(arr)
// console.log(result)

const arr = [1,1,3,2,5,1,7,1,5,3,7,49,1,1]
const uniqueArray= []

for(let i=0 ; i<arr.length; i++){
    let flag = 0
    for(let j=0 ; j<arr.length ; j++){
        if(arr[i]===arr[j]){
           flag++
        }
    }
    if(flag===1 && !uniqueArray.includes(arr[i])){
        uniqueArray.push(arr[i])
    }
}

console.log(uniqueArray)