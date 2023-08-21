

const insertValueAfter = (arr,insertIndex,valueToInsert)=>{

    for(let i=arr.length-1;i>=insertIndex;i--){
       arr[i+1] = arr[i]
    }

     arr[insertIndex] = valueToInsert
}

const arr = [1,2,3,4,5]
insertValueAfter(arr,3,100)

console.log(arr)


