// function insertionSort(arr){
//     for(i=1; i<arr.length ; i++){
//         let numbertoInsert = arr[i]
//         let j = i-1
//         while(j >= 0 && a[j] > numbertoInsert ){
//             arr[j+1] = arr[j]
//             j=j-1
//         }
//         arr[j+1] = numbertoInsert
//     }
// }

function insertionSort(arr){
    for(i=1 ; i < arr.length ; i++){
        let numbertoInsert = arr[i]
        let j = i-1
    while(j >= 0 && arr[j] > numbertoInsert){
        arr[j+1] = arr[j]
        j = j-1
    }
    arr[j+1] = numbertoInsert
    }
}


const arr = [34,5,67,-3,56,-6,0]
insertionSort(arr)
console.log(arr);