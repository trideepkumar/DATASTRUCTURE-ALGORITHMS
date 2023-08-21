
const insertionSort = (arr)=>{
     for(let i=0 ;i<arr.length; i++){
        let current = arr[i]
        let j=i-1
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
     }
     return arr
}

const arr = [13,53,4,2,62,5,3,1,9,2,0,25,534]

const result = insertionSort(arr)

console.log(result)