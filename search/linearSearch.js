function linearSearch(arr,target){
    for(let i=0 ; i<= arr.length-1 ; i++){
        if(arr[i] === target){
            return i
        }
    }
    return 'notfound'
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9],8))