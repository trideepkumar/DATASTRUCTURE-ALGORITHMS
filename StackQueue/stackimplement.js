class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    pop() {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    top() {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }
        return this.head.data;
    }

    empty() {
        return this.size === 0;
    }
}
