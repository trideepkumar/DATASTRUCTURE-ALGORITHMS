class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Binarytree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node
        }
        else{
            let queue = []
            queue.push(this.root)
            while(queue.length){
                let current = queue.shift()
                if(!current.left){
                    current.left = node
                    break
                }
                queue.push(current.left)

                if(!current.rigth){
                    current.right = node
                    break
                }
                queue.push(current.right)
            }
        }
    }
    //traversing a binary treee
    inorder(root){
        if(root){
       this.inorder(root.left)
       console.log(root.value)
       this.inorder(root.right)
    }
    }
}

const btree = new Binarytree()

btree.insert(10)
btree.insert(20)
btree.insert(30)
btree.insert(40)
btree.insert(50)

// console.log(btree)
btree.inorder(btree.root)
