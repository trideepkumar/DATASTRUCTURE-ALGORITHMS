class Node{
    constructor(){
        this.keys = new Map()
        this.isWordEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(let i=0 ; i<word.length ; i++){
            let charToInsert = word[i]
            if(!curr.keys.has(word[i])){
                curr.keys.set(charToInsert,new Node())
            }
            curr = curr.keys.get(charToInsert)
        }
        curr.isWordEnd = true
    }
    contains(word){
        let curr = this.root
        for(let i=0 ; i<word.length ; i++){
            let charToFind = word[i]
            if(!charToFind in curr.keys){
                return false
            }
            curr = curr.keys[charToFind]
        }
        return curr.isWordEnd
    }
}

const trie = new Trie()

trie.insert("trideep")

// console.log(trie)
console.log(trie.contains("trideep"))