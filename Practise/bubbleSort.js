const bubbleSort = (arr)=>{

    for(let i =0 ; i< arr.length -1 ; i++){
        for(let j=i+1 ; j<arr.length;j++){
            if(arr[i] > arr[j]){
                let temp = arr[i]
                   arr[i] = arr[j]
                   arr[j] = temp
            }
        }
    }
    return arr
}

const arr = [10,3,66,35,7,13]

const result  = bubbleSort(arr)

console.log(result)