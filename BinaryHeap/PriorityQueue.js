class Node{
    constructor(value,priority){
        this.value = value
        this.priority = priority

    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(value,priority){
        let node = new Node(value,priority)
        this.values.push(node)
        this.bubbleUp()
    }
    bubbleUp(){
        let index = this.values.length-1
        const value = this.values[index]
        while(index>0){
        let parentIndex = Math.floor(((index-1)/2))
        let parent = this.values[parentIndex]
         if(value.priority <= parent.priority) break
         this.values[parentIndex] = value
         this.values[index] = parent
         index = parentIndex
        }
     }


    dequeue(){
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
                if(element.priority < leftChild.priority){
                    swap = leftChildIndex
                }
            }
            if(rightChildIndex < this.values.length){
                rightChild = this.values[rightChildIndex]
                if((swap === null && element<rightChild.priority) ||
                   (swap !== null && leftChild <rightChild.priority)){
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

let PQ = new PriorityQueue()

PQ.enqueue("A",1)
PQ.enqueue("B",5)
PQ.enqueue("C",3)
PQ.enqueue("D",2)
PQ.enqueue("E",4)

console.log(PQ)


