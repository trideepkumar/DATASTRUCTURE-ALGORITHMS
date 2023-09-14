// insert zero after every even number in an array

const arr = [1,2,3,4,5,6]


// const insertZeroAfter = (arr)=>{
//     for(let i =arr.length-1; i >=0 ;i--){
//         if(arr[i]%2 === 0){
//             arr.splice(i+1,0,0)
//         }
//     }
// }

// insertZeroAfter(arr)

const result = arr.flatMap((num)=> (num%2 ===0 ?[num,0] : num))


console.log(result)