const { pre } = require("typegoose")

class Node{
    constructor(value){
        this.value = value
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
    }

    reverseList(){
        if(this.head === null){
            return null
        }
        const prev = null
        const current = this.head
        const next = current.next

        while(current){
            current.next = prev
            prev = current
            current = next
            next = current ? current.next : null
        }
        return prev
    }

    display(){
        let current = this.head
        while(current){
            console.log(current.value)  
            current = current.next     
         }
        
    }
}

const list = new Stack()

list.push(20)
list.push(30)
list.push(40)
list.push(50)

list.reverseList()

list.display()