
class HashTable{
    constructor(size){
       this.table = new Array(size)
       this.size = size
    }

    hash(key){
        let total = 0
        for(let i =0 ;i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    // seperate chaining

    // set(key,value){
    //     let index  = this.hash(key)
    //     let bucket = this.table[index]
    //     if(!this.bucket){
    //         this.table[index] = [[key,value]]
    //     }else{
    //         const sameItem = bucket.find(item => item[0] === key)
    //         if(sameItem){
    //             bucket.push([key,value])
    //         }else{
    //             sameItem[1] = value
    //         }
    //     }

    // }

    // linear probing

    set(key,value){
        let index = this.hash(key)
        while(this.table[index] && this.table[index][0] !==  key){
            index = index+1 % this.size
        }
        if(this.table[index] && this.table[index][0] === key){
            this.table[index][1] = value
        }
        else{
            this.table[index]  = [key,value]
        }
        return this.table
    }

    display(){
        for(let i =0 ; i<this.size;i++){
            console.log(this.table[i])
        }
    }
}

const table = new HashTable(20)

table.set('name','trideep')
table.set('place','india')
table.set('ecalp','usa')
table.set('paelc','nothing')
table.set('age',21)
table.set('ega',50)
table.set('job','dont')


table.display()