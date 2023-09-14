const quickSort = (arr, start=0 , end=arr.length-1)=>{

    if(start<end){ 
        let index = partition(arr,start,end)
        quickSort(arr,start,index-1)
        quickSort(arr,index+1,end)
    } 
    return arr
    }

    const partition = (arr,start,end)=>{
        let i = start-1
        let pivot = arr[end]
        for(let j=start ;j<end; j++){
            if(arr[j]<=pivot){
                i++
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        i++
        let temp  = arr[i]
            arr[i]= arr[end]
            arr[end]=temp
            return i 
    }

arr = [15,1,3,2,12,0]
quickSort(arr)
console.log(arr)