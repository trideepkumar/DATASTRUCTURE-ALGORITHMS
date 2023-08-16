class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Linkedlist {
    constructor(){
        this.head = null
        this.size = 0
    }

    push(value){
        const node = new Node(value)
        if(!this.head === null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insertAfter(new_value,value){
        const  node = new Node(new_value)
         let current = this.head
         while(current){
            if(current.value === value){
                node.next = current.next
                current.next = node
                break
            }
            current = current.next
         }
    }

    insertBefore(new_value,value){
        const node = new Node(new_value)
        let prev = this.head
        while(prev.next !== null &&  prev.next.value !== value){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
         
        this.size++
    }

    display(){
        let current = this.head
        while(current){
            console.log(current.value)
            current= current.next
        }
    }
}


const list = new Linkedlist()

list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)

list.insertBefore(100,30)
list.insertBefore(100,20)
list.insertBefore(100,10)


list.display()

