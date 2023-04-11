
class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    insert(value,index){
        const node = new Node(value)
        if(index < 0 || index > this.size){
            return null
        }
        else if(index === 0){
            node.next = this.head
            this.head = node
        }
        else{
            let prev = this.head
            for(let i=0 ; i< index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    //inserting to the left
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
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
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }

    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }

}

const list = new LinkedList()

list.insert(2,0)
list.insert(3,0)
list.insert(0,1)
list.insert(-1,1)
list.prepend(12)
list.append(12)
list.print()



// class Node{
//    constructor(value){
//     this.value = value
//     this.next = null
//    }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     insert(value,index){
//          const node = new Node(value)
//          if(index < 0 || index > this.size){
//             return console.log(`cannot insert in the ${index} position`) 
//         }
//         else if(index === 0){
//             node.next = this.head
//             this.head = node
//         }
//         else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//         }
//         this.size++
//     }

//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.value);
//             current = current.next

//         }
//     }


// }

// // const list = new LinkedList()

// list.insert(2,0)
// list.insert(3,0)
// list.insert(0,1)
// list.insert(-1,1)
// list.print()