function insertionSort(arr){
    for(let i=1 ; i < arr.length ; i++ ){
        let numbertoInsert = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > numbertoInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = numbertoInsert
    }
    return arr
}

const arr = [1,5,3,6,3,2,8,45]
const result = insertionSort(arr)
console.log(result)