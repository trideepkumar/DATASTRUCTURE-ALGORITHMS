class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    printList() {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  
    printListReverse(node = this.head) {
      if (!node) {
        return;
      }
      this.printListReverse(node.next);
      console.log(node.data);
    }
  }
  