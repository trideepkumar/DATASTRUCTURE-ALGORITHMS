const LinkedList = require('./LinkedlistStack')

class LinkedlistStack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }
    pop(){
        return this.list.removeFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        this.list.getSize()
    }
    print(){
        return this.list.print()
    }
}

const stack = new LinkedlistStack()
console.log(stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.print()