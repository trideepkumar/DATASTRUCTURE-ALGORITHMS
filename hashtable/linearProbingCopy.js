class hashTable{
    constructor(size){
      this.table = new Array(size)
      this.size = size
      this.count = 0
    }
  
    hash(key){
      let tot = 0 
      for(let i = 0 ; i < Math.min(key.length,100) ; i++){
        let ch = key[i]
        let cha = ch.toLowerCase()
        let char = cha.charCodeAt(0)-96
        let prime = 17
        tot = (tot*prime+char)%this.size
      }
      return tot
    }

  
    rehash(){
      let oldTable = this.table
      this.size = this.size * 2
      this.table = new Array(this.size)
      this.count = 0
      for (let index = 0; index < oldTable.length; index++) {
          if(oldTable[index]){
            const [key,value] = oldTable[index][0]
            this.set(key,value)
          }
      }
      return this.table
      
    }
  
    set(key,value){
      let loadFactor = this.count/this.size
      if(loadFactor >= 0.75){
  
       this.rehash()
      }
  
      let index = this.hash(key)
  
      if(!this.table[index]){
              this.table[index] = [[key,value]]
              this.count++
              return
  
      }else{
        while(this.table[index] !== undefined){
          if(this.table[index][0][0]==key){
            this.table[index][0][1]= value
          }
        this.table[index] = this.table[index+1]
        }
        this.table[index] = [[key,value]]
        this.count++
      }
      return this.table
    }
  
    get(key){
      let index = this.hash(key)
      
      if(this.table[index][0]===key){
        console.log(this.table[index][0][1])
        return
      }else{
        while (this.table[index] !==undefined) {
            if (this.table[index][0]==key) {
              console.log(this.table[index][0])
              console.log(this.table[index][1])
              return
            }
          this.table[index] = this.table[index+1]
        }
      }
      return undefined
    }
  
    print(){
      for(let i=0;i<this.size;i++){
        if(this.table[i]){
          console.log(`At index ${i}:`);
          console.log(this.table[i][0])
        }
      }
    }
    coun(){
      console.log(`number of elements avaliable==>${this.count}`)
      console.log(`Size of array===>${this.size}`)
      console.log(`Loadfactor => ${this.count/this.size}`)
      return
    }
    
  }
  
  let tab = new hashTable(7)
  tab.set("Hi","1")
  tab.set("Hello",2)
  tab.set("Hey",3)
  tab.set("Holla","5")
  tab.set("heyyy","5")
  tab.set("hummm","5")
  tab.set("hum","5")
  
  
  tab.print()
  tab.coun()
  tab.get("Hello")