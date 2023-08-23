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

    push(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    
    pop(){
        if(!this.head){
            return null
        }
        let current = this.head
        if(this.head === this.tail){
            this.tail = null
        }
        this.tail = this.head.tail
        this.size--
        return current.value
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

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)

list.pop()

list.print()