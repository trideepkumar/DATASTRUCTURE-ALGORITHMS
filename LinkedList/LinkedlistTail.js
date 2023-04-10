  class  Node{
    constructor(value){
        this.value = value
        this.next = null
    }
  }

  class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

       //append (inserting an element to the end of the list)

   append(value){
    const node = new Node()
    if(this.isEmpty()){
        this.head = node 
        this.tail = node
    }
    else{
       this.tail.next = node
       this.tail = node 
    }
    this.size++
   }


    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size 
    }
    print(){
        if(this.isEmpty()){
            return console.log('list is empty');
        }
        else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
   //prepend method
   prepend(value){
     const node = new Node()
     if(this.isEmpty()){
        this.head = node
        this.tail = node
     }
     else{
        node.next = this.head
        this.head = node
     }
     this.size++
   }


   //removing the node from the front 

   removeFront(){
      if(this.isEmpty()){
        return console.log('lsit is  empty');
      }
      else{
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
      }
   }

  }