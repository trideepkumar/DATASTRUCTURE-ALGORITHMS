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

  insert(value){
    const node = new Node(value)
    if(!this.head){
      this.head = node
    }else{
        
      this.head = node
    }
    this.size++
  }

  insertAfter(value,new_value){

    const node = new Node(new_value)

    let current = this.head
    let valueFound = false

    while(current){

      if(current.value === value){
        node.next = current.next
        current.next = node
        valueFound = true
        break
      }
      current = current.next
      
    }

    if(!valueFound) console.log("value not found in list !")

  }

  delete(){
    let current = this.head
    let prev = null
    while(current){
      if(current.next === null){
        prev.next = null
      }
      prev = current
      current = current.next
    }
    this.size--
  }

  insertBeforeValue(value, new_value) {
    const node = new Node(new_value);
  
    if (this.head === null) {
      console.log("Could not insert. The list is empty.");
      return;
    }
  
    if (this.head.value === value) {
      // If the target value is in the head node, update the head
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }
  
    let prev = this.head;
    let current = prev.next;
  
    while (current !== null) {
      if (current.value === value) {
        // Insert the new node before the current node
        node.next = current;
        prev.next = node;
        this.size++;
        return;
      }
      prev = current;
      current = current.next;
    }
  
    console.log(`Value ${value} not found in the list. Insertion failed.`);
  }
  

  deleteVal(value){
   let current = this.head
   let prev = null

   while(current){
    if(current.value === value){
      if(prev === null){
        this.head = current.next
      }else{
        prev.next = current.next
      }
      this.size--
      return
    }
    prev = current
    current = current.next
   }
  }


 

  display(){
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

// list.insertAfter(90,100)
// list.insertAfter(20,100)
// list.insertAfter(50,100)

list.insertBeforeValue(20,100)
list.insertBeforeValue(10,100)
list.insertBeforeValue(50,100)



// list.deleteVal(50)

list.display()

