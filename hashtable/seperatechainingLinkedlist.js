//collision handling using sepearate chaining in Linkedlist

class Node{
    constructor(key,value){
        this.value = value
        this.key = key
        this.next = null    
    }
}

class LinkedList {
    constructor() {
      this.head = null
      this.tail = null
      this.length = 0
    }
    unshift(val) {
      let newNode = new Node(val)
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
      } else {
        let temp = this.head
        this.head = newNode
        this.head.next = temp
      }
      return ++this.length
    }
  }


class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    rehash(){
        const oldData = this.table
        const newSize = this.size*2

        this.table = new Array(newSize)
        this.size = newSize
       

        for(let i=0 ;i<oldData.length;i++){
            let current = oldData[i]
            while(current){
                const newIndex = this.hash(current.key)
                const node = new Node(current.key,current.value)
                if(!this.table[newIndex]){
                    this.table[newIndex] = node
                }
                else{
                    node.next = this.table[newIndex]
                    this.table[newIndex] = node
                }
                current = current.next
            }
        }

       
    }

    set(key, value) {
        const index = this.hash(key)
        if (!this.table[index]) {
          let list = new LinkedList()
          list.unshift([key, value])
          this.table[index] = list
        } else {
          let current = this.table[index].head
          while (current) {
            if (current.value[0] === key) {
              current.value[1] = value
              return
            }
            current = current.next
          }
          this.table[index].unshift([key, value])
        }
    }

      get(key) {
        const index = this.hash(key)
        let current = this.table[index]
    
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
    
        return undefined;
    }


remove(key){
        const index = this.hash(key);
    
        if (!this.table[index]) {
            return;
        }
    
        if (this.table[index].key === key) {
            this.table[index] = this.table[index].next;
            return
        }
    
        let current = this.table[index];
        let prev = null
    
        while (current) {
            if (current.key === key) {
                prev.next = current.next;
                return
            }
            prev = current;
            current = current.next;
        }
}
    
    

    display() {
        for (let i = 0 ; i < this.table.length ; i++) {
            if (this.table[i]) {
                let current = this.table[i]
                while (current) {
                    console.log(i, current.key, current.value)
                    current = current.next
                }
            }
        }
    }
}


const table = new HashTable(10)
table.set("name", "bob")
table.set("name",'You')
table.set("name","steve")
table.set("name","jobs")
table.set("name",'You')
table.set("name","steve")
table.set("name","jobs")

table.set("place","india")
table.set("age",21)

table.remove('place')


table.display()
console.log(table.get('name'))


