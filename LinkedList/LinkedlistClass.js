

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}



class LinkedList {
    
    constructor(){
        this.head = null
        this.size = 0
    }


isEmpty() {
    return  this.size === 0
}

getSize(){
    return this.size
}

//for adding the values to the first (prepend)
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++  
    }

//for printing the values

print(){
    if(this.isEmpty()){
        console.log('list is empty');
    }else{
        let curr = this.head
        let listValues  = ''
        while(curr){
            listValues += `${curr.value}, `
            curr = curr.next
        }
        console.log(listValues);
    }
}


//for append 

append(value){
    const node = new Node(value)
    if(this.isEmpty()){
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

//for insert a value


// insert(value,index){
//     const node = new Node(value)
//     if(index <0 || index >= this.size){
//         return null
//     }
//     if(index === 0){
//         this.prepend(value)
//     }
//     else{
//         console.log('hi');
//         let prev = this.head
//         for(let i=0 ; i < index-1 ; i++ ){
//             prev = prev.next
//         }
//         node.next = prev.next
//         prev.next = node
        
//         // prev.next = node
        
//     }
//     this.size++
// }


insert(value,index){

    const node = new Node(value)

    if(index < 0 || index > this.size ){
        return null
    }
    
    if(index === 0 ){
        node.next = this.head
        this.head = node
        // this.prepend(value)
    }
    else{
        let prev = this.head
        for(let i=0 ; i< index-1 ;i++){
           prev =prev.next
        }
        node.next = prev.next
        prev.next = node
    }
    this.size++
}


//for removing the particular values

remove(index){
let removeNode ;
if(index < 0 || index >= this.size){
       return null
}
if(index === 0){
    removeNode = this.head
    this.head = this.head.next
}
let prev = this.head
for(let i=0 ; i < index-1 ; i++ ){
    prev = prev.next
}
removeNode =prev.next
prev.next = removeNode.next

this.size--
console.log('removed');
return removeNode.value

}

//for removing particular value from a linked list

removeValue(value){
    if(this.isEmpty()){
        return console.log('empty list found');
    }
    if(this.head.value === value){
        console.log('first element dleted');
        this.head =this.head.next
        this.size--
        return value
    }
    else{
        let removeNode
        let prev = this.head
        while(prev.next && prev.next.value !== value){
            prev = prev.next
        }
        if(prev.next){
            removeNode = prev.next
            prev.next = removeNode.next
            console.log('REMOVED VALUE');
            this.size--
            return value
        }
    }
}


//for searching a value in the linked list 

search(value){
    if(this.isEmpty()){
        console.log('list empty');
        return -1
    }
    else{
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                console.log('search value:');
                console.log(`${i} postion `);
                return i
            }
            curr = curr.next
            i++
        }
        console.log('not found');
        return -1
    }
}






}

const list = new LinkedList()
console.log('List is empty' , list.isEmpty());
console.log('list size' , list.getSize());
// list.print()
list.prepend(40)
// list.print()
list.prepend(20)
list.prepend(30)
// list.print()

list.append(50)

// list.print()

list.insert(10,2)
list.print()

// list.remove(1)
// list.print()

// list.removeValue(40)
// list.print()

list.search(100)
// list.print()


//tail practice






// class Node {
//    constructor(value){
//     this.value =value
//     this.next =null
//    }
// }

// class LinkedList{
//     constructor(){
//    this.head = null
//    this.size = 0
//     }

//     prepend(value){
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
// }

