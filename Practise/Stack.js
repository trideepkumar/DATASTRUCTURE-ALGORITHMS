class Node{
    constructor(value){
        this.data = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
        this.size = 0
    }

    push(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
    }

    pop(){
        if(this.head === null){
            return "empty stack"
        }
        this.head = this.head.next
        this.size--
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.pop()

console.log(stack)