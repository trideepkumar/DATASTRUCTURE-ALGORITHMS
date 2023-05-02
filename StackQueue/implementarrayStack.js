class Stack {
    constructor(){
        this.arr = []
    }
    push(value){
        this.arr.push(value)

    }
    reverseStack(stack){
        const tempStack = new Stack()
        while(!this.stack.length === 0){
            tempStack.push(stack.pop())
        }
        while(!tempStack.length === 0){
            stack.push(tempStack.pop())
        }
        return stack
    }
}

const stack = new Stack()


stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)


console.log(stack)

reverseStack(stack)

console.log(stack)
