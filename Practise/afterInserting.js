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

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  insertAfter(new_value,value){
    const node = new Node(new_value)
    let current = this.head
    while(current){
        if(current.value===value){
            node.next = current.next
            current.next = node
        }
        current= current.next
    }
  }

}

const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);

list.insertAfter(100, 40);
list.insertAfter(100, 30);
list.insertAfter(100, 50);
list.insertAfter(100, 20);

list.display();
