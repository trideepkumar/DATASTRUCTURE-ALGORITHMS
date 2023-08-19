class Queue{
    constructor(){
        this.items = []
        this.head = 0   
        this.tail = 0
    }

    //ADDING AN ELEMENT TO THE BACK OF THE QUEUE

    enqueue(element){
        this.items[this.tail] = element
        this.tail++
    }

    //DEQUEUE : REMOVES AN ELEMENT FROM THE FRONT OF THE QUEUE
    
    dequeue(){
        const item = this.items[this.head]
        this.items[this.head] = null
        this.head++
        return this.item
    }
    //DEQUEUE USING SHIFT() METHOD
    // dequeue(){
    //   const item =  this.items.shift()
    //   return item
    // }
}

const queue = new Queue()

queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.enqueue(70)

queue.dequeue()
queue.dequeue()
queue.dequeue()




console.log(queue)