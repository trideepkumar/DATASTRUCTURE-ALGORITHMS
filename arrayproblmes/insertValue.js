const arr = [0,0,0,0,0,0,0,0]

const insert = (arr,value,index)=>{
   arr.splice(index,0,value)
    return arr
}

const result = insert(arr,5,2)
console.log(result)