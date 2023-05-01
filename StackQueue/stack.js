const { log } = require("console")

class Stack{
    constructor(){
        this.item =[]
    }

    push(item){
        this.item.push(item)
    }
    pop(){
        return this.item.pop()
    }
    isEmpty(){
        return this.item.length === 0
    }
    peek(){
        return this.items[this.items.length-1]
        // return this.items[this.items.length-1];
    }
    size(){
        return this.item.length
    }
    unshift(item){
        return this.item.unshift(item)
    }
    shift(){
        return this.item.shift()
    }

    reverse(){
        const reversedStack = []
        while(!this.isEmpty()){
          reversedStack.push(this.pop())
        }
        return console.log(reversedStack)
    }
}

const stack = new Stack()

stack.push('1')
stack.push('2')
stack.push('3')
stack.push('4')
stack.push('5')

// stack.pop()

// stack.shift()
// stack.unshift('100')

// stack.peek()

console.log(stack);
stack.reverse()




