class Node{
    constructor(value){
        this.value = value
        this.next  = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size =0
    }
    prepend(value){
        const node = new Node(value)
        if(this.size === 0){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.size === 0){
            this.head = node
        }
        else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    remove(value){
        let current = this.head
        let prev = null
        while(current){
            if(current.value === value){
               if(prev){
                prev.next = current.next
                this.size--
               }
               else{
                this.head = current.next
                this.size--
               }
            }
            prev=current
            current = current.next
        }
    }

    removeValue(value){
        let current = this.head

        if(this.head.value===value){
            this.head = this.head.next
        }
    else{
            while(current && current.next){
                if(current.next.value === value){
                        current.next = current.next.next
                }
                current = current.next
            }
        }

    // }
    // removeValue(value) {
    //     let current = this.head;
      
    //     if (current && current.value === value) {
    //       this.head = current.next;
    //       return true;
    //     }
      
    //     while (current && current.next) {
    //       if (current.next.value === value) {
    //         current.next = current.next.next;
    //         return true;
    //       }
    //       current = current.next;
    //     }
      
        return false;
      }
      




    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const list = new LinkedList

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.removeValue(10)
list.print()