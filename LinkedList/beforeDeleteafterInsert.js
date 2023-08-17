class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head =null
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
    beforeDeleteafterInsert(value,new_value){
        
        const node = new Node(new_value)

        if(this.head === null){
            return console.log('couldnt add the value');
        }
        else if(this.head.value === value){
           let prev = this.head
           node.next = prev.next
           prev.next = node
           this.size++
        }
        else{
             let current = this.head
             let prev = null
             while(current.next){
                if(current.next && current.next.value === value && prev !== null){
                     prev.next = current.next
                     current =current.next
                     node.next = current.next
                     current.next = node
                }
                prev = current
                current = current.next
             }
             this.size++
        }
        
       
    }



    print(){
        let current  = this.head
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
list.beforeDeleteafterInsert(40,100)
list.print()