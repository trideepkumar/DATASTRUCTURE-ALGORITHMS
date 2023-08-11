class Node{
    constructor(value){
        this.data = value
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
        if(this.head===null && this.tail === null ){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    pop(){
        if(this.head && this.tail === null){
            return "empty stack"
        }else{
            this.tail.next = null
            this.tail = null
        }
        this.size--
    }
}

const stack = new LinkedList()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.pop()

console.log(stack)