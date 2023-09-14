function bubbleSort(arr){
    for(let i=0 ; i< arr.length-1 ; i++){
        for(let j=i+1 ; j< arr.length-1 ; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
            }
        }
    }
    return arr
  }

  let arr = [2,6,4,7,1,4,9,3]
  let sortedArray = bubbleSort(arr)
  console.log(sortedArray)