function merge(left,right) {

  let i=0
  let j=0
  let sorted = []

    while (left.length && right.length) {

          if(left[0]<=right[0]){
            sorted.push(left.shift())
          }else{
            sorted.push(right.shift())
          }

    }

   while(i<left.length){
    sorted.push(left[i])
    i++
   }

   while(j<right.length){
    sorted.push(right[j])
    j++
   }
   
   return sorted
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


