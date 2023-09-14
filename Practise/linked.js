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
        }else{
            node.next = this.head
            this.head=node
        }
        this.size++
    }

    reverse(){
        let current = this.head
        let prev = null
        let next = null
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    print(){
        let current = this.head
        while(current){
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

list.print()

console.log("after reversing")

list.reverse()

list.print()