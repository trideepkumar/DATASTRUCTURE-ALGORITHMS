function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let current = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > current){
            arr[j+1] =  arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}

const arr  = [3,5,8,3,1,6,4,9,1]

console.log(insertionSort(arr)) 