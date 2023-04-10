class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail=null
      this.size=0
    }
  
    insert(value) {
      const node = new Node(value);
  
      if (this.head === null) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = node;
      }
    }
  
    insertAfter(valueToInsertAfter, valueToInsert) {
      let current = this.head;
      while (current !== null) {
        if (current.value === valueToInsertAfter) {
          const newNode = new Node(valueToInsert);
          newNode.next = current.next;
          current.next = newNode;
          break;
        }
        current = current.next;
      }
    }
  
    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  

  const list = new LinkedList();
  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.insert(4);
  list.insertAfter(2, 5);
  list.print();  // Output: 1 2 5 3 4
  