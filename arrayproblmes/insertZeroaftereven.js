const arr = [1, 2, 3, 4, 5, 6, 7, 8];


const insertAfter = (arr)=>{
    let newArr =[]
    
    for(let i =0 ;i<arr.length;i++){
       
        if(!arr[i]%2===0){
           newArr.push(0)
        }
        newArr.push(arr[i])
    }
    return newArr
}

//one liner 

const oneLiner = (arr)=> arr.flatMap((num)=>(num%2===0 ? [num,0] : [num]))


const result  = insertAfter(arr)
// console.log(result)

console.log(oneLiner(arr))

