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
                prev= prev.next
            }
            node.next = prev.next
            prev.next = node
          }
          this.size++
    } 

    insertBefore(value, new_value){
        const node = new Node(new_value)
        if(this.size === 0){
            this.head = node
        }
        else{
            let current = this.head
            while(current && current.next.value === value){
                node.next = current.next
                current.next = node
            }
        }
        this.size++
    }

    insertAfter(value, new_value){
        const node = new Node(new_value)
        if(this.size === 0 ){
            this.head = node
        }
        else{
            let current = this.head
            while(current.next && current.next.value === value){
                current = current.next
            }
            node.next = current.next
            current.next = node
        }
        this.size++
    }

    deleteBefore(value){
        let current = this.head
        let prev = null
        while(current!=null && current.next.value !== value){
            prev = current
            current = current.next 
            }
            prev.next = current.next
            this.size--
    }
    deleteAfter(value){
        let current = this.head
       while(current){
        if(current && current.value === value && current.next){
        current.next = current.next.next
        }
        current = current.next
        this.size--
       }
      
    }

    print() {
        let current = this.head
        while(current) {
            console.log(current.value)
            current = current.next
        }
    }
    
}

const list = new LinkedList()

list.insert(10)
list.insert(20)
list.insert(30)
list.insert(40)
list.insert(50)
list.deleteAfter(30)
list.print()