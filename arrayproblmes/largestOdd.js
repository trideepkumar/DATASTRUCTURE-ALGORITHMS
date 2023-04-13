const arr = [1, 2, 4, 5, 7, 8, 9, 9, 0, 0, 7, 65, 4, 3];
// let largestOdd = -Infinity

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1 && arr[i] > largestOdd) {
//     largestOdd = arr[i];
//   }
// }

// if (largestOdd === -Infinity) {
//   console.log("There are no odd numbers in the array.");
// } else {
//   console.log("The largest odd number in the array is: " + largestOdd);
// }
const largestOdd = (arr)=>{
    let large = arr[0]
    for(let i=0 ; i<arr.length; i++){
        if(arr[i]%2 === 1 && arr[i]>large){
             large = arr[i]
        }
    }
    return large
}

const result = largestOdd(arr)
console.log(result)




