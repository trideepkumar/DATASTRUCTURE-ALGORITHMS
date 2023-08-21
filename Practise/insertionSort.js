const insertionSort = (arr)=>{

    for(let i = 1 ; i< arr.length ; i++){
        let current = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr

}


const arr = [234,4553,45,0,23,54,2,45,3342,234]

const result = insertionSort(arr)

console.log(result)