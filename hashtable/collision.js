class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let hash =0 
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash % this.size
    }

    set(key,value){
        const index = this.hash(key)
        // this.table[index] = value
        // console.log(index);
        //handling collision using 
        if(!this.table[index]){
            this.table[index] = [[key,value]]
        }
        else{
            this.table[index].push([key,value])
        }
        // console.log(this.table)
        // return
    }

    get(key){
        const index = this.hash(key)
        if(this.table[index]){
                const sameItem = this.table[index].find(item=>item[0] === key)
                if(sameItem){
                    return sameItem[1]
                }
        }
        return undefined
    }

    display(){
        for(let i=0;i<this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i])
                console.log(" ");
            }
        }
    }
}

const table = new HashTable(17)

table.set("name","trideep")
table.set("age",20)
table.set("place","india")
table.set("name","bob")
table.set("name","jobs")

table.display()

console.log(table.get("age"));