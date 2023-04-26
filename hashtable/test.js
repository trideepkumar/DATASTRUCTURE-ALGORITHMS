function merge(left,right){
    let newArr = []
    for(let i=0 ; i<arr.length;i++){
        for(let j=0 ;j<arr.length ;j++){
            if(left[i]<right[j]){
                newArr.push(left[i].shift())
            }
            newArr.push(right.shift())
        }
        return newArr.concat(left).concat(right)
    }
 }
 
 
 
 function MergeSort(arr){
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(MergeSort(left),mergeSort(right))
 }

 const arr = [1,-100,2,6,200]
 const result = MergeSort(arr)
 console.log(result);