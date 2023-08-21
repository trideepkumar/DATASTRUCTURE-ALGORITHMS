class Node{
    constructor(value){
        this.value =value
        this.next = null
    }
}

class LinkedList{
    constructor(){
       this.head = null
       this.size = 0
    }
    insert(value){
      const node = new Node(value)
      if(this.size === 0){
        this.head = node
      }
      else{
          let prev = this.head
          while(prev.next){
            prev = prev.next
          }
          node.next = prev.next
          prev.next = node
      }
      this.size++
    }
    
    reverseLinkedList(){
        let current = this.head
        let previous = null
        let next = null
        while(current){
            next = current.next
            current.next =previous
            previous = current
            current = next
        }
        this.head = previous
    }


    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const list = new LinkedList

list.insert(10)
list.insert(20)
list.insert(30)
list.insert(40)
list.insert(50)

list.print()

// list.reverseLinkedList()

// list.print()