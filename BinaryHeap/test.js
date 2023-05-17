class maxHeap{
  constructor(){
    this.values = []
  }

  insert(value){
    this.values.push(value)
    this.bubbleup()
  }
  bubbleup(){
    let index = this.values.length -1
    let value = this.values[index]
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2)
      let parent = this.values[parentIndex]
      if(value <= parent) break
      this.values[parentIndex] = value
      this.values[index] = parent
      index = parentIndex
    }
  }
}

const maxheap = new maxHeap()

maxheap.insert(20)

console.log(maxHeap)