class HashTable{
    constructor(size){
    this.table = new Array(size)
    this.size = size
    }

    hash(key){
        let hash = 0
        for(let i=0; i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash % this.size
    }

    set(key,value){
        let index = this.hash(key)
        // console.log(index)
        if(!this.table[index]){
            this.table[index] = [[key,value]]
        }
        else{
            while(this.table[index]!== undefined){
                if(this.table[index][0] === key){
                    this.table[index][1] = value
                }
                this.table[index] = this.table[index+1]
            }
            this.table[index] = [[key,value]]
        }
        return this.table
    }
  
    get(key){
        let index = this.hash(key)
       
      
           while(this.table[index] !== undefined){
              if(this.table[index][0][0] === key){
                console.log(this.table[index][0][1])
                return
              }
              this.table[index] = this.table[index+1]
           }
        
      }

    display(){
        for(let i=0;i<this.table.length ; i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }

}

const table = new HashTable(10)

table.set("name","bob")
table.set("name","marley")
table.set("place","india")
table.set("age",21)
table.get("")
// table.display()
