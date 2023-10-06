const arr = [{a1:[45,34,53,4],d:[45,34,34]},{adf:[45,34,53,4],p:[45,34,34]}]

const sum = (arr)=>{
    let total = 0
    
    for(let i =0 ;i<arr.length ;i++){
        const obj = arr[i]
        for(const key in obj){
            if(Array.isArray(obj[key])){
                const innerArray = obj[key]
                for(let j=0 ; j< innerArray.length ;j++){
                    total+=innerArray[j]
                }
            }
        }
    }
    return total
}

const reduceSum = arr.reduce((accumulator,obj)=>{
    for(const key  in obj){
        if(Array.isArray(obj[key])){
            accumulator += obj[key].reduce((innerSum,num) => innerSum + num , 0)
        }
    }
    return accumulator
},0)

const result = sum(arr)

console.log(result)

console.log(reduceSum)