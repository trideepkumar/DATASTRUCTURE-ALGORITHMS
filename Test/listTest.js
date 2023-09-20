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

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insertValueAfter(value, new_value) {
    const node = new Node(new_value);

    let current = this.head;
    let valueFound = false;

    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        valueFound = true;
        break;
      }
      current = current.next;
    }

    if (!valueFound) return console.log("value not found");
  }

  deleteLast() {
    let current = this.head;
    let prev;
    while (current) {
      if (current.next === null) {
        prev.next = null;
        break;
      }
      prev = current;
      current = current.next;
    }
  }

  deleteValue(value) {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
      }
      prev = current;
      current = current.next;
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

// list.insertValueAfter(30,100)
// list.insertValueAfter(10,100)
// list.insertValueAfter(20,100)
// list.insertValueAfter(40,100)
// list.insertValueAfter(50, 100);

// list.deleteLast()

list.deleteValue(50);

list.display();
