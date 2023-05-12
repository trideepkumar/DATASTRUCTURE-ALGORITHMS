class MaxbinaryHeap{
    constructor(){
         this.values = []
    }

    //inserting to heap
    insert(value){
        this.values.push(value)
        this.bubbleUp()
    }
    bubbleUp(){
       let index = this.values.length-1
       const value = this.values[index]
       while(index>0){
       let parentIndex = Math.floor(((index-1)/2))
       let parent = this.values[parentIndex]
        if(value <= parent) break
        this.values[parentIndex] = value
        this.values[index] = parent
        index = parentIndex
       }
    }



    removeRoot(){
        const max = this.values[0]
        const end = this.values.pop()
            if(this.values.length){
                this.values[0] = end
                this.sinkDown()
            }
        return max
    }
    sinkDown(){
        let index = 0
        let element = this.values[index]
        while(index < this.values){
            let leftChildIndex = 2 * index +1
            let rightChildIndex = 2 * index +2
            if(leftChildIndex < this.values.length){
                leftChild = this.values[leftChildIndex]
                if(element < leftChild){
                    swap = leftChildIndex
                }
            }
            if(rightChildIndex < this.values.length){
                rightChild = this.values[rightChildIndex]
                if((swap === null && element<rightChild) ||
                   (swap !== null && leftChild <rightChild)){
                     swap = rightChildIndex
                   }
            }
            element = this.values[index]
        }
    }

}

const heap = new MaxbinaryHeap()



heap.insert(10)
heap.insert(20)
heap.insert(35)
heap.insert(24)
heap.insert(50)

heap.delete(35)

console.log(heap)