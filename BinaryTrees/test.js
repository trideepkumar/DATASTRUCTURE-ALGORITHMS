class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(!this.root) this.root = node
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
                if(!current.right){
                    current.right = node
                    break
                }
                queue.push(current.right)
            }
        }
    }
    inorder(root = this.root){
        if(root){
            console.log(root.value)
            this.inorder(root.left)
            this.inorder(root.right)
            
        }
    }
}

const btree = new BinaryTree()

btree.insert(10)
btree.insert(20)
btree.insert(30)
btree.insert(40)
btree.insert(50)

btree.inorder()