class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.size = 0
    }

    enqueue(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }

    dequeue(){
        if(!this.head){
            return null
        }else{
            let prev 
            let current = this.head
            while(current){
                if(current.next=== null){
                    prev.next = null
                }
                prev = current
                current =current.next
            }
        }
    }

    display(){
        let current = this.head
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
queue.enqueue(50)
queue.enqueue(60)

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()

queue.display()