class Node{
    constructor(value){
        this.value= value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //for getting the size of the array
    isEmpty(){
        return this.size === 0
    }


    //adding values to the left of the linked list 
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            console.log('good');
           this.head = node
        }
        else
        {
         node.next = this.head
         this.head = node
        }
        this.size++
         
    }

    //adding values to the right of the linked list 

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let previous = this.head
            while(previous.next){
                previous = previous.next
            }
            previous.next = node
        }
        this.size++
    }

    //inserting an element when the index is given

    insert(value,index){
        const node = new Node(value)
        if(index < 0 || index > this.size){
            return null
        }
        else if(index === 0){
             node.next = this.head
             this.head = node
        }
        else
        {
          let prev = this.head
          for(let i=0 ; i < index-1 ; i++){
            prev = prev.next
          }
          node.next = prev.next
          prev.next = node
        }
        this.size++
    }


    

    print(){
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
    }
}


const list = new LinkedList()


list.append(1)
list.append(2)
list.append(3)
list.insert(0,0)
list.insert(-1,0)
list.print()

