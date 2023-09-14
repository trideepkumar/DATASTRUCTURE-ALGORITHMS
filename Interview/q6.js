// find the majority element in an array


const arr =[1,2,2,3,3,4,5,4,5,3,2,2]

const majorityElement = (arr)=>{
     let obj = {}
     let count = 0
     let maxCount =0
     let majority

     for(let i=0 ;i<arr.length;i++){
        if(obj[arr[i]]){
            count++
        }else{
            count = 1
        }
        obj[arr[i]] = count

        if(count > maxCount){
            maxCount=count
            majority = arr[i]
        } 
     }
     return majority
}

console.log(majorityElement(arr))
