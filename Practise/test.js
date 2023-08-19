class Node{
    constructor(value){
      this.value= value
      this.next = null
    }
  }
  
  class Linkedlist {
    constructor(){
      this.head = null
      this.size = 0
    }
  
    insert(value){
      const node = new Node(value)
      if(!this.head){
        this.head = node
      }else{
        node.next = this.head
        this.head = node
      }
      this.size++
    }
  
    display(){
      let current = this.head
      while(current){
        console.log(current.value)
        current = current.next
      }
  }
}
  
  let list = new Linkedlist()
  
  list.insert(10)
  list.insert(20)
  list.insert(30)
  list.insert(40)
  list.insert(50)
  
  list.display()