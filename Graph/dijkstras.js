class Node {
    constructor(value, priority) {
      this.value = value
      this.priority = priority
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.values = []
    }
    enqueue(val, priority) {
      const newNode = new Node(val, priority)
      this.values.push(newNode)
      this.bubbleUp()
    }
    bubbleUp() {
      let index = this.values.length - 1
      let element = this.values[index]
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2)
        if (this.values[index].priority > this.values[parentIndex].priority) break
        this.values[index] = this.values[parentIndex]
        this.values[parentIndex] = element
        index = parentIndex
      }
    }
    dequeue() {
      let min = this.values[0]
      let end = this.values.pop()
      if (this.values.length) {
        this.values[0] = end
        this.sinkDown()
      }
      return min
    }
    sinkDown() {
      let element = this.values[0]
      let index = 0
      while (true) {
        let leftChildIndex = 2 * index + 1
        let rightChildIndex = 2 * index + 2
        let swap = null
        let leftChild, rightChild
        if (this.values[leftChildIndex]) {
          leftChild = this.values[leftChildIndex]
          if (leftChild.priority < element.priority) swap = leftChildIndex
        }
        if (this.values[rightChildIndex]) {
          rightChild = this.values[rightChildIndex]
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          )
            swap = rightChildIndex
        }
        if (swap === null) break
        this.values[index] = this.values[swap]
        this.values[swap] = element
        index = swap
      }
    }
  }
  

class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1,v2,weight){
        if(!this.adjacencyList[v1]) this.adjacencyList[v1] = []
        if(!this.adjacencyList[v2]) this.adjacencyList[v2] = []
         this.adjacencyList[v1].push({node:v2 , weight})
         this.adjacencyList[v2].push({node:v1 , weight})
         return this
     }
     removeEdge(v1,v2){
          this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2)
          this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1)
     }
     removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList(vertex)
     }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {}

    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    } 
    addEdge(v1,v2,weight){
        this.adjacencyList[v1].push({node:v2,weight:weight})
        this.adjacencyList[v2].push({node:v1,weight:weight})
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return null
        this.adjacencyList[vertex].forEach((item)=>{
            this.adjacencyList[item.node] = this.adjacencyList[item.node].filter((v)=>{
                v.node !== vertex   
            })
        })
        delete this.adjacencyList[vertex]
        return this
    }

    removeEdge(){
        if(!this.adjacencyList[v1] || this.adjacencyList[v2]) return null
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v.node !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v.node !== v1)
    return this
    }

    smallestPath()
}