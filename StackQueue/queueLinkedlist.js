
class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
}

class LinkedList{
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
        let curr = this.head
        if(this.head === this.tail){
            this.last = null
        }
        else{
            this.head = this.head.next
            this.size--
            return  curr.value
        }
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const list = new LinkedList()

list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)
list.enqueue(50)

list.dequeue()

list.print()