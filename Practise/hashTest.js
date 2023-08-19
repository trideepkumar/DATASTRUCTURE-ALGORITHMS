class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  //normal hash table inserting

  // set(key,value){
  //     const index = this.hash(key)

  //     this.table[index] = value
  // }

  //seperate chaining

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameIndex = bucket.find((item) => item[0] === key);
      if (sameIndex) {
       sameIndex[1] =  value;
      } else {
        bucket.push([key,value])
      }
    }
  }

  //linear probing
  // set(key,value){
  //   const index = this.hash(key)
  //   if(!this.table[index]){
  //     this.table[index] = [key,value]
  //   }else{
  //     let newIndex = (index+1) % this.size
  //     while(index !== newIndex && this.table[newIndex]){
  //         newIndex = (newIndex+1) % this.size
  //     }
  //     if(!this.table[newIndex]){
  //         this.table[newIndex] = [key,value]
  //     }else{
  //         console.log("can't be inserted")
  //     }
  //   }
  // }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(100);

table.set("name", "bob");
table.set("name", "sab");
table.set("name", "zob");
// table.set("name", "cob");

table.display();
