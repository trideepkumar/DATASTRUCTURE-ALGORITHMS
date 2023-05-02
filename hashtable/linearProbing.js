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
        while(this.table[index] && this.table[index][0]!==key){
            index = index+1 % this.size
        }
        if(this.table[index] && this.table[index][0] === key){
            this.table[index][1] = value
        }
        else{
            this.table[index] = [key,value]
        }
        return this.table
    }
  
    get(key){
        let index = this.hash(key)
           while(this.table[index]){
              if(this.table[index][0] === key){
                return console.log(this.table[index][1])
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
table.set("name","pablo")
table.set("place","india")
table.set("place","colombia")
table.set("age",45)
table.get("name")
// table.display()
