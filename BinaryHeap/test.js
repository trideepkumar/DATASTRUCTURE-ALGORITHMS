function remove() {
    let max = this.values[0]
    let end = this.values.pop()
    if (this.values.length) {
      this.values[0] = end
      this.sinkDown()
    }
    return max
  }

function sinkDown() {
    let idx = 0
    let element = this.values[idx]
    while (idx < this.values.length) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let swap = null
      let leftChild, rightChild
      if (this.values[leftChildIdx]) {
        leftChild = this.values[leftChildIdx]
        if (element < leftChild) swap = leftChildIdx
      }
      if (this.values[rightChild]) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && element < rightChild) ||
          (swap !== null && leftChild < rightChild)
        )
          swap = rightChildIdx
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
    }
  }
