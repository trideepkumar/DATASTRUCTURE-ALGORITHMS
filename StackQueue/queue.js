class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    enqueue(value) {
      const node = new Node(value);
      if (!this.first) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
      this.size++;
      return this;
    }
  
    dequeue() {
      if (!this.first) {
        return null;
      }
      const first = this.first;
      this.first = first.next;
      this.size--;
      return first.value;
    }

    display(){
        let current = this.first
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
  
    
  }
  
const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(40)

queue.dequeue()

queue.display()