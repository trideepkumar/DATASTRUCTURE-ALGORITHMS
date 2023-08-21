class Stack{
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    enqueue(value){

      while(this.queue1.length){
        this.queue2.push(this.queue1.shift())
      }

      this.queue1.push(value)
      
      while(this.queue2.length){
        this.queue1.push(this.queue2.shift())
      }

    }


}


const stack = new Stack

stack.enqueue(10)
stack.enqueue(20)
stack.enqueue(30)
stack.enqueue(40)
stack.enqueue(50)


        
console.log(stack)