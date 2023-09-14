const arr = [1,2,3,4,5]


const result = arr.map((a)=>{
    // console.log(a)       //its intersting
    return a*a
})

arr.forEach((element, index, array) => {
    array[index] = element * 2;
  });
console.log(result)

console.log(arr)