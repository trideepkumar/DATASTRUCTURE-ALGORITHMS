class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let hash = 0
        for(let i= 0 ;i<key.length; i++){
            hash+=key.charCodeAt(i)
        }
        return hash % this.size
    }

    
    set(key,value){
        const index = this.hash(key)

        if(!this.table[index]){
           this.table[index] = [key,value]
        }else{
            this.table[index].push([key,value])
        }
        
    }

}

const table = new HashTable(10)

table.set('name','bob')
table.set('name','marley')
table.set('age',132)


console.log(table)


