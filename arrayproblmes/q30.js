const arr = [1,2,3,4,5,1.5]

const secondSmallest = (arr) =>{

    let smallest = Infinity
    let secondSmallest = -Infinity

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < smallest){
            secondSmallest = smallest
            smallest = arr[i]
        }
        if(arr[i] < secondSmallest && arr[i] !== smallest){
            secondSmallest = arr[i]
        }
    }

    return secondSmallest
}

console.log(secondSmallest(arr))