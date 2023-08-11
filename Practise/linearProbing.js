class HashTable {


    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    // Hash function to calculate the index
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    // Insert a key-value pair into the hashtable
    insert(key, value) {
        const index = this.hash(key);
        
        if (!this.table[index]) {
            // If the slot is empty, directly insert the value
            this.table[index] = [key, value];
        } else {
            // If the slot is occupied, perform linear probing
            let newIndex = (index + 1) % this.size;
            while (newIndex !== index && this.table[newIndex]) {
                newIndex = (newIndex + 1) % this.size;
            }
            if (!this.table[newIndex]) {
                this.table[newIndex] = [key, value];
            } else {
                console.log("Hashtable is full. Unable to insert.");
            }
        }
    }

    // Retrieve the value associated with a key
    
    get(key) {
        const index = this.hash(key);
        
        if (this.table[index] && this.table[index][0] === key) {
            return this.table[index][1];
        } else {
            let newIndex = (index + 1) % this.size;
            while (newIndex !== index && this.table[newIndex]) {
                if (this.table[newIndex][0] === key) {
                    return this.table[newIndex][1];
                }
                newIndex = (newIndex + 1) % this.size;
            }
            return undefined; // Key not found
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

// Example usage
const hashtable = new HashTable(10);

hashtable.insert("apple", 5);
hashtable.insert("banana", 8);
hashtable.insert("orange", 3);
hashtable.insert("grape",5)
hashtable.insert("grape",5)


hashtable.display()
