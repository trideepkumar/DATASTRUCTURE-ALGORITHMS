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
            prev.next = node
        }
        this.size++
    }
    insertValueAfter(value,new_value){
        const node = new Node(new_value)
        if(this.head === null){
            return console.log('couldnt add')
        }
        else if(this.head.value === value){
            this.head = node
        }
        else{
            let  current = this.head
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value);
            current = current.next 
        }
    }
}

const list = new LinkedList()


list.insert(10)
list.insert(20)
list.insert(30)
list.insertValueAfter(20,100)
list.print()