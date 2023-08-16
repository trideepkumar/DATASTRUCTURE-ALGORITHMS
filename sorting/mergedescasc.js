const mergeSort =(left,right)=>{
  let   i = left.length -1
  let   j = 0
  let  sorted = []
  while(i>=0 && j<right.length){
    if(left[i] < right[j]){
        sorted.push(left[i])
        i--
    }
    else{
        sorted.push(right[j])
        j++
    }
  }

  while(i<left.length){
    sorted.push(left[i])
    i--
  }
  while(j>=0){
    sorted.push(right[j])
    j++
  }
  return sorted
  
}
  
   console.log(mergeSort([9, 10, 56, 88, 999],[888, 67, 34, 10]))