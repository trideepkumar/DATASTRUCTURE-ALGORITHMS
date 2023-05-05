//give a binary array , return the maximum number of consecutive 1's in the array

const Repeat = (arr)=>{
    let largest = -1
    let count = 0
   for(let i=0;i<arr.length;i++){
       if(arr[i]===1){
        count++
        if(count>largest){
            largest = count
        }
       }
       else {
        count = 0
       }
   }
   return console.log(largest)
}

Repeat([1,1,1,1,0,1,1,0])


