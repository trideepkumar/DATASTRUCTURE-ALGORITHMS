class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.next = null
    }
    push(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
    }
    reverseStack(){
        let current = this.head
        let reversed = []
      while(current){
        reversed.push(current.value)
        current = current.next   
      }
      return reversed
    }

    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const stack = new Stack()

stack.push(20)
stack.push(30)
stack.push(40)

stack.print()

stack.reverseStack()

stack.print()