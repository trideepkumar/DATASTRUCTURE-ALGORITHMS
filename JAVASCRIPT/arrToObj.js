//converting array to object 

const arr = [1, 2, 3, 4, 5, 6];

//with the reduce method 


// let obj ={}
// const obj = arr.reduce((acc, currentValue, index) => {
//   acc[index] = currentValue;
//   return acc;
// }, {});

//with the for loop 

// for(let i=0;i<arr.length;i++){
//     obj[i] = arr[i]
// }

//with the fromEntries()

const entries = arr.map((value,index)=> [index ,value])

const obj = Object.fromEntries(entries)



console.log(obj)




