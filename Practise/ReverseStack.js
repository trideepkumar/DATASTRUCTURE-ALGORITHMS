const { log } = require("console")

class Node{
    constructor(value){
        this.data = value
        this.next = null
    }
}

class Stack{

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
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    
    }

    pop(){
        this.head=this.head.next
        this.size--
    }
    
display(){
    let curr=this.head
    while(curr){
        console.log(curr.data);
        curr=curr.next
    }
}

}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.display()
stack.pop()
console.log('after pop')
stack.display()


