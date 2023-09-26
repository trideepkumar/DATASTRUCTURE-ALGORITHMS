class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
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

  insertAfter(value, new_value) {
    const node = new Node(new_value);

    let current = this.head;
    let prev = null;
    let valueFound = false;

    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        prev.next = current.next;
        valueFound = true;
        break;
      }
      prev = current;
      current = current.next;
    }
    if (!valueFound) console.log("value not found");
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list1 = new Linkedlist();
const list2 = new Linkedlist();

list1.insert(10);
list1.insert(20);
list1.insert(30);
list1.insert(40);
list1.insert(50);

list2.insert(10);
list2.insert(40);
list2.insert(30);
list2.insert(20);
list2.insert(10);

// list1.insertAfter(10,100)
// list1.insertAfter(20,100)
// list1.insertAfter(30,100)
// list1.insertAfter(40,100)
// list1.insertAfter(50,100)

// list1.display()
function sumReverse(list1, list2) {
    let sum = 0;
    let current1 = list1.head;
    console.log("list 1 head",current1.value)
    let current2 = list2.head;
    console.log("list 2 head",current2.value)
  
   
    if (current1 && current2) {
      sum = current1.value + current2.value;
    }
  
    return sum;
  }
  
  const result = sumReverse(list1, list2);

  const last =result.toString().split('').reverse().join('')
  
  console.log("Reversed Sum:", last);
  