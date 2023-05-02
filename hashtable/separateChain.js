
class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index=this.hash(key)
        let bucket =this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
               sameKey[1]=value 
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }
        else{
            const sameItem = bucket.find(item => item[0] === key)
            if(sameItem){
             return   console.log(sameItem)
            }
            else{
                console.log('no mathcing value found');
            }
        }
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameItem = bucket.find(item=>item[0]===key)
            if(sameItem){
                bucket.slice(bucket.indexOf(sameItem),1)
            }
        }
        else{
             console.log('no matching value found')
        }
    }

    display(){
        for(let i=0;i<this.size;i++){
            console.log(this.table[i])
        }
    }
}

const table=new HashTable(20)
table.set('name','musthafa')
table.set('mane','trideep')
table.set('name','pablo')
table.set('age',21)

table.remove('age')

// table.get('age')
table.display()