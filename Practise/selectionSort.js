const selectionSort = (arr)=>{
    for(let i =0 ;i<arr.length;i++){
        let lowest = i
        for(let j=i+1; j<arr.length ;j++){
            if(arr[j] <arr [lowest])
            lowest = j
        }
        [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
    }
 return arr
}

const arr = [1,3,5,2,6,783,723,12,7,1]

const result = selectionSort(arr)

console.log(result)