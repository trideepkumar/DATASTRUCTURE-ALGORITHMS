// function merge(left, right) {
//     let sorted = [];
//     while (left.length && right.length) {
//       if (left[0] >= right[0]) {
//         sorted.push(left.pop());
//       } else {
//         sorted.push(right.pop());
//       }
//     }
//     sorted.unshift(...left);
//     sorted.unshift(...right);
//     return sorted;
//   }

// console.log(merge([1,2,3,4,5],[9,8,7,6]))



const mergesort = (left, right) => {
 let i = 0;
 let j = right.length-1
 let result = []
  while(i < left.length && j >= 0){
    if(left[i] > right[j]){
      result.push(right[j])
      j--
    }else{
      result.push(left[i])
      i++
    }
  }
  while(i < left.length){
    result.push(left[i])
    i++
  }
  while(j >= 0){
    result.push(right[j])
    j--
  }
  return result
}

console.log(mergesort([9, 10, 56, 88, 999],[888, 67, 34, 10]))