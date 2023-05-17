class Heap{
    constructor(){
        this.heap = []
    }
    
    heapify(arr = [] , n = arr.length , index){
        let left = 2 *index +1
        let right = 2 *index +2
        let largest = index
        if(left < n && arr[left] > arr[index]){
            largest = left
        }
        if(right < n && arr[right] > arr[largest]){
            largest = right
        }
        if(largest !== index){
            let temp = arr[index]
            arr[index] = arr[largest]
            arr[largest] = temp
            this.heapify(arr,n,largest)
        }
    }
    

    buildHeap(arr=[]){
        for(let i = Math.floor(arr.length/2)-1; i>=0; i--){
            this.heapify(arr,arr.length,i)
        }
    }

    heapSort(arr = []){
       this.buildHeap(arr)

       for(let i = arr.length-1 ; i>=0 ; i--){
        let temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        this.heapify(arr,i-1,0)
       }
    } 
}

