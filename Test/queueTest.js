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
        this.size = 0
    }

    enqueue(value){

        const node = new Node(value)

        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    dequeue(){
        if(!this.head){
            return null
        }
        if(this.head === this.tail){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next  
        }
        this.size++
    }

    display(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}


let queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

queue.dequeue()


queue.display()