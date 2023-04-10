const arr = [1,2,2,4,5,5,7,8]
const len = arr.length
const uniqueArray = []

for(let i=0;i<len;i++){
    if(!uniqueArray.includes(arr[i])){
        uniqueArray.push(arr[i])
    }
}

//converting the array to the linked list 

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head  =null
        this.tail =null
        this.size = 0
    }

    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next= newNode
            this.tail=newNode
        }
        this.size++
    }
}

const myLinkedlist = new LinkedList()
for(const element of uniqueArray){
    myLinkedlist.append(element)
}

console.log(myLinkedlist);