class Node{
    constructor(value){
        this.value = value
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
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    pop(){
        if(!this.head){
            return null
        }
        if(this.head === this.tail){
            this.tail = null
        }
        let current = this.head
        let prev = null
        while(current){
            if(current === this.tail){
                prev.next = null
            }
            prev = current
            current = current.next
        }
        this.size--
    }

    display(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

let stack = new Stack()


stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.pop()


stack.display()