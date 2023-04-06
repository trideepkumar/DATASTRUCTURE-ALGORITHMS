//bubblesort using do while loop
// function bubbleSort(arr){
//     let swapped 
//     do{
//         swapped = false
//         for(i=0;i<arr.length-1;i++){
//             if(arr[i]< arr[i+1]){
//               let temp = arr[i]
//                arr[i] =arr[i+1]
//                arr[i+1] = temp
//                swapped = true
//            }
//          }
//     }while(swapped)
// }


//complexity is less

// function bubbleSort(arr){

//     for(let i=0; i < arr.length-1 ;i++){
//         for(let j=0; j < arr.length-i-1 ;j++){
//             if(arr[j] > arr[j+1]){
//                 let    temp = arr[j]
//                         arr[j] = arr[j+1]
//                         arr[j+1] = temp
//                     }
//         }
//     }
// }

function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0 ; j < arr.length ; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j]= temp
            }
        }
    }
}



const arr = [3,6,33,1,9,4]
console.log(arr.length)
bubbleSort(arr)
console.log(arr)