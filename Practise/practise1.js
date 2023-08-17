class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  remove(value) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.value === value) {
        if (prev === null) {
          this.head = current.next;
        } else {
          if (current.next) {
            prev.next = current.next;
          } else {
            prev.next = null;
          }
        }
      }
      prev = current;
      current = current.next;
    }
    this.size--;
  }

  insertAfter(new_value, value) {
    const node = new Node(new_value)
    let current = this.head
    while(current){
        if(current.value===value){
           node.next = current.next
           current.next = node
        }
        current = current.next
    }
    this.size++
  }


  beforeInsert(new_value, value) {
    const node = new Node(new_value);
    let current = this.head;
    let prev = null;
    
    while (current !== null && current.value !== value) {
        prev = current;
        current = current.next;
    }
    
    if (current !== null) {
        if (prev === null) {
            node.next = this.head;
            this.head = node;
        } else {
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    } else {
        // Handle case where value is not found
        console.log("Value not found in the linked list.");
    }
}

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);


list.beforeInsert(100,10)
list.beforeInsert(100,20)
list.beforeInsert(100,30)
list.beforeInsert(100,40)
list.beforeInsert(100,50)

list.display();
