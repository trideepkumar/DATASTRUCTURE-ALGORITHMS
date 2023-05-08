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

    //Extracting the maxheap 

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
        while(index < this.values.length){
            let leftChildIndex = 2 * index +1
            let rightChildIndex = 2 * index +2
            let swap = null
            let leftChild
            let rightChild
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
            if(swap === null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
            element = this.values[index]
        }
    }

}

const heap = new MaxbinaryHeap()


heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(100)



console.log(heap)

heap.removeRoot()
heap.removeRoot()
heap.removeRoot()
heap.removeRoot()
// heap.removeRoot()


console.log(heap)
