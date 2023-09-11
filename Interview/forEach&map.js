const arr = [1,2,3,4]

const mappedArr = arr.map((num)=> num*2)

console.log(mappedArr)
console.log(arr)

const forEachedArr = arr.forEach((num,i,arr)=>(arr[i] = num*2) )

console.log(forEachedArr)
console.log(arr)