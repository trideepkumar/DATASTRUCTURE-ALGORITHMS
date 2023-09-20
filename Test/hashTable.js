class Node{
    constructor(key,value){
        this.value = value
        this.key = key
        this.next = null
    }
}

class  HashTable{
    constructor(size){
      this.table = new Array(size)
      this.size = size
    }

    hash(key){
        let total = 0

        for(let i =0 ;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return hash % this.size
    }

    

}