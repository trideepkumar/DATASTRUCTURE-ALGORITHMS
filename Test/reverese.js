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
        if(!this.head){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }

    reverse(){
        
        let current = this.head
        let prev = null
    
        while(current){
            const next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    


    display(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}


let list = new LinkedList()

list.insert(10)
list.insert(20)
list.insert(30)
list.insert(40)
list.insert(50)
list.insert(60)

list.display()

list.reverse()

console.log("after reversal")

list.display()