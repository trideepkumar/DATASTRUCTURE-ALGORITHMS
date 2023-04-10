const arr = [1,2,3,4]
const len = arr.length

for(let i=0;i<len/2;i++){
    const temp = arr[i]
    arr[i] = arr[len-1-i]
    arr[len-1-i] = temp
}

console.log(arr);