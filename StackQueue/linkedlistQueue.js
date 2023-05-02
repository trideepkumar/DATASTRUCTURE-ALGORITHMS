class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
    }

    enqueue(value){
        const node = new Node(value)
        if(this.tail === null){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
    }
    dequeue(){
        if(this.head === null){
            return null
        }else{
            this.head = this.head.next
        }
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()
queue.dequeue()
queue.dequeue()


console.log(queue)