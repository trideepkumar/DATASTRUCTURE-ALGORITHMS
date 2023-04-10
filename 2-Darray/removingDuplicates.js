const arr = [1,1,1,2,2,3,4]
const len = arr.length
const uniqueArray = []

for(let i=0;i<len;i++){
    if(!uniqueArray.includes(arr[i])){
        uniqueArray.push(arr[i])
    }
}




