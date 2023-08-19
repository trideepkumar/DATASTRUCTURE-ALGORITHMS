class Node{
    constructor(value){
      this.value= value
      this.next = null
    }
  }
  
  class Stack{
    constructor(){
      this.top = null
      this.size = 0
    }
  
    push(data){
      const node = new Node(data)
      node.next = this.top
      this.top = node
    }
  
    pop(){
      if(this.top === null){
         return null
      }
      
      let prev = this.top
      this.top = this.top.next
      prev = null
  
      this.size--
    }
  
    display(){
      let current = this.top
      while(current){
        console.log(current.value)
        current = current.next
      }
    }
  }
  
  const stack = new Stack()
  
  stack.push(10)
  stack.push(20)
  stack.push(30)
  stack.push(40)
  stack.push(50)
  
  stack.pop()
  x
  
  stack.display()