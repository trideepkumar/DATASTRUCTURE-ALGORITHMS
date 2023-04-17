const secondlargest = (arr)=>{
    let large = arr[0]
    for(let i=0; i< arr.length-1 ; i++){
       if(arr[i]%2 === 0 && arr[i]<large){
        arr[i] = large 
       }
    }
    return large
}