class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
    }
    
    push(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
    }

    reverse(){
        let current = this.head
            let reversedArr = []
            while(current){
               reversedArr.unshift(current.value)
               current = current.next
            }
            return console.log(...reversedArr);
    }

    display(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const stack = new Stack(10)

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.display()

console.log('reverse')

stack.reverse()

// stack.display()