
class HashTable{
    constructor(size){
       this.table = new Array(size)
       this.size = size
    }

    hash(key){
        let total = 0
        for(let i =0 ; i<key.length ;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    //seperate chaining


    // set(key,value){

    //     const index = this.hash(key)
    //     let bucket = this.table[index]
    //     if(!bucket){
    //         this.table[index] = [[key,value]]
    //     }else{
    //         const sameKey = bucket.find((item)=> item[0] === key)
    //         if(sameKey){
    //             bucket.push([key,value])
    //         }else{
    //             sameKey[1] = value
    //         }
    //     }
        
    // }

    //linear probing

    // set(key,value){
    //     let index = this.hash(key)
    //     while(this.table[index] && this.table[index][0] !==key){
    //         index = index+1 % this.size
    //     }

    //     if(this.table[index] && this.table[index][0] === key){
    //         this.table[index][1]  = value
    //     }
    //     else{
    //         this.table[index] = [key,value]
    //     }
    //     return this.table
    // }
    
    
    display(){
        for(let i =0 ; i<this.size;i++){
            console.log(this.table[i])
        }
    }
}

const table = new HashTable(10)

table.set('name','bob')
table.set('name','pablo')
table.set('place','macaue')
table.set('age','21')
table.set('s/o','marley')
table.set('job','musician')

table.display()