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
            let charToInsert  = word[i]
           if(!curr.keys.has(word[i])){
            curr.keys.set(charToInsert, new Node())
           }
            curr = curr.keys.get(charToInsert)
        }
        curr.isWordEnd = true
    }

    contains(word){
        let curr = this.root
        for(let i=0 ; i<word.length ; i++){
            let charToFind = word[i]
            if(!(charToFind in curr.keys)){
                return false
            }
            curr = curr.keys[charToFind]
        }
        return curr.isWordEnd
    }

    traversal(prefix){
        let words=[]
    let curr=this.root
        for(let i=0;i<prefix.length;i++){
            if(!curr.keys.has(prefix[i])){
                return words
            }
            curr=curr.keys.get(prefix[i])
        }
        function traverse(node,word){
                 if(node.isWordEnd){
                      words.push(word)
                    }

        for(let [char,charNode] of node.keys.entries()){ 
            traverse(charNode,word+char)
        }
        }
        traverse(curr,prefix)
        console.log(words);
    }



    // startsWithPrefix(prefix){
    //     let curr = this.root
    //     for(let i=0 ; i< prefix.length ; i++){
    //         let charToFind = prefix[i]
    //         if(!(charToFind in curr.children)){
    //             return false
    //         }
    //         curr = curr.children[charToFind]
    //     }
    //     return true
    // }

}

const trie = new Trie()

trie.insert("hello")
trie.insert("her")
trie.insert("heist")
trie.insert("heap")
trie.insert("trideep")
trie.insert("host")
// trie.traversal('he')

console.log(trie.contains("hello"))