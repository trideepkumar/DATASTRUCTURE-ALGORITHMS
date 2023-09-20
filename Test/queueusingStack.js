class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value){
       this.stack1.push(value)
    }

    dequeue(){
     while(this.stack1.length){
        this.stack2.push(this.stack1.pop())
     }
     return this.stack2.pop()
    }
}


const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

queue.dequeue()

console.log(queue)