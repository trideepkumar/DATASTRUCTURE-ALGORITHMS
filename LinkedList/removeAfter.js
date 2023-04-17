class Node{
    constructor(value){
        this.value = value
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

    deleteRight(value){
      let current = this.head
      while(current){
        if(current && current.value === value && current.next){
            current.next = current.next.next
        }
        current = current.next
      }
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
list.deleteRight(30)
list.print()
