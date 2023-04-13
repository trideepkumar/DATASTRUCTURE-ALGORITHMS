class Node{
    constructor(value){
        this.value=value
        this.next= null
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
            let  prev = this.head
            while(prev.next){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            
        }
        this.size++
    }

    deleteBefore(value){
        if(this.head == null || this.head.value === value ){
            return console.log('cannot delete');
        }

        let current = this.head
        let prev = null

        while(current.next){
            if(current.next.value === value){
                if(prev === null){
                    this.head = current.next
                }
                else{
                    prev.next = current.next
                }
                this.size--
            }
            prev = current
            current = current.next
        }
       
    }

    print(){
        let current = this.head
        while(current){
            console.log(current);
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
list.deleteBefore(10)
list.print()


