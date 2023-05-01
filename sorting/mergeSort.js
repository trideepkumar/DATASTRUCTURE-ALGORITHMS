// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const leftArr = arr.slice(0,mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }


// function merge(leftArr,rightArr){
//     const sortedArray = []
//     while(leftArr.length > 0 && rightArr.length > 0){
//         if(leftArr[0]  <= rightArr[0]){
//             sortedArray.push(leftArr.shift())
//         }else{
//             sortedArray.push(rightArr.shift())
//         }
//     }
//     return sortedArray.concat(leftArr).concat(rightArr)
// }

function merge(left,right) {

    let sorted = []
    while (left.length && right.length) {
        if(left[0]<=right[0]){
      sorted.push(left.shift())
    }else{
      sorted.push(right.shift())
    }
    }
  
    return sorted.concat(left).concat(right)
  }
  

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}



const arr = [2,-6,-1,6,9,3]
console.log(mergeSort(arr))


