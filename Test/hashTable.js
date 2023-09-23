// class Node{
//     constructor(key,value){
//         this.value = value
//         this.key = key
//         this.next = null
//     }
// }

// class  HashTable{
//     constructor(size){
//       this.table = new Array(size)
//       this.size = size
//     }

//     hash(key){
//         let total = 0

//         for(let i =0 ;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }
     
//     set(key,value){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }
//         else{
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 sameKey[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameItem = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 return console.log(sameItem)
//             }else{
//                 console.log('no matching value')
//             }
//         }
//     }

//     display(){
//         for(let i=0 ; i<this.size ;i++){
//             console.log(this.table[i])
//         }
//     }

// }

// const table = new HashTable(20)

// table.set('name','bob')
// table.set('name','pablo')
// table.set('place','macaue')
// table.set('age','21')
// table.set('s/o','marley')
// table.set('job','musician')


// table.display()





class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
       let total = 0
       for(let i =0 ;i<key.length ;i++){
           total+=key.charCodeAt(i)
       }
       return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKey = bucket.find(item => item[0] === key)
            if(!sameKey){
                bucket.push([key,value])
            }else{
                sameKey[1] = value
            }
        }
    }

    delete(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket){
            const itemIndex = bucket.findIndex(item => item[0] === key)
            if(itemIndex !== -1){
                bucket.splice(itemIndex,1)
            } 
        }
    }

    display(){
        for(let i =0 ;i<this.size;i++){
            console.log(this.table[i])
        }
    }
}

const table = new HashTable(20)



table.set('name','bob')
table.set('name','pablo')
table.set('place','macaue')
table.set('age','21')
table.set('s/o','marley')
table.set('job','musician')

table.delete('age')


table.display()