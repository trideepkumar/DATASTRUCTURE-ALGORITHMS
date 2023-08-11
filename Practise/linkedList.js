class Node{
   constructor(value){
     this.value = value
     this.next = null
   }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    
    //inserting a value to the end 
    append(value){
        const node = new Node(value)

        if(this.head === null){
            this.head = node
        }else{
           node.next = this.head
           this.head = node
        }

        this.size++
    }



    //inserting a value to the first 
    prepend(value){
        const node = new Node(value)

        if(this.head === null){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }


    //printing the values in the console
    print(){
        if(this.size === 0){
             console.log("empty list")
        }
        let current = this.head

        while(current){
            console.log(current.value)
            current=current.next
        }
    }

    //inserting a value after a given index

  insertValueAfterIndex(value,index){

    const node = new Node(value)

    if(index < 0 || index > this.size){
        return null
    }
    if(index === 0){
        node.next = this.head
        this.head = node
    }else{
        let prev = this.head
        for(let i =0 ; i < index ; i++){
             prev = prev.next
        }
        node.next = prev.next
        prev.next = node
    }

    this.size++

  }
}


const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.prepend(9)
list.prepend(8)
list.append(40)
list.prepend(7)

list.insertValueAfterIndex(11,3)
list.insertValueAfterIndex(35,1)

// console.log(list)

list.print()