class Node{
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(!this.root) this.root = node
        let current = this.root
        while(current){
            if(current.value === value) return undefined
            if(current.value < value){
                if(!current.right){
                    current.right = node
                    break
                }
                current = current.right
            }
            else{
                if(!current.left){
                    current.left = node
                    break
                }
                current = current.left
            }
        }
        return this
    }

    BFS(){
         let queue = [this.root]
         while(queue.length){
            let node = queue.shift()
            console.log(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
         }
         return this
    }

    DFS(root = this.root){
        if(root){
            console.log(root.value)
            this.DFS(root.left)
            this.DFS(root.right)
        }
    }
    min(root =this.root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    deleteNode(root,value){
        if(root === value) return root
        else if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if (value < root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.right && !root.left){
                return null
            }
            else if(!root.right){
                return root.left
            }
            else if(!root.left){
                return root.right
            }
            else{
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right,value)
            }
        }
        return root
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
}


const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)

bst.delete(10)

// bst.BFS()
bst.DFS()
