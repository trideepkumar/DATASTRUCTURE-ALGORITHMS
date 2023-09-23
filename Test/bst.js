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
        if(!this.root) {
            this.root = node
        }
        let current = this.root
        while(current){
            if(current.value === value) return undefined
            if(current.value<value){
                  if(!current.right){
                    current.right = node
                    break
                  }
                  current = current.right
            }else{
                if(current.value > value){
                    if(!current.left){
                        current.left = node
                        break
                    }
                    current = current.left
                }
            }
        }
        return this
    }

    bfs(){
        let queue = [this.root]
        while(queue.length){    
            let current = queue.shift()
            console.log(current.value)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
    }

    dfsPreorder(node = this.root){
        if(!node) return
         console.log(node.value)
         this.dfsPreorder(node.left)
         this.dfsPreorder(node.right)
    }
    dfsPostorder(node = this.root){
        if(!node) return
        this.dfsPostorder(node.left)
        this.dfsPostorder(node.right)
        console.log(node.value)
    }
    dfsInorder(node = this.root){
        if(!node) return
        this.dfsInorder(node.left)
        console.log(node.value)
        this.dfsInorder(node.right)
    }

    min(node) {
        while(node.left !== null) {
            node = node.left;
        }
        return node.value;
    }

    // delete(root,value){
    //     if(root === null) return root

    //     else if(value  < root.value){
    //         root.left = this.delete(root.left,value)
    //     }else if(value > root.value){
    //         root.right = this.delete(root.right,value)
    //     }
        
    //     else{
    //         if(!root.right  && !root.left){
    //             return null
    //         }
    //         else if(!root.right){
    //             return root.left
    //         }
    //         else if(!root.left){
    //             return root.right
    //         }
    //         else{
    //             root.value = this.min(root.right)
    //             root.right = this.delete(root.right,value)
    //         }
    //     }
    // }
    delete(root, value) {
        if (root === null) return root;
        
        if (value < root.value) {
            root.left = this.delete(root.left, value);
        } else if (value > root.value) {
            root.right = this.delete(root.right, value);
        }
        
        else { 
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            
            root.value = this.min(root.right);
            root.right = this.delete(root.right, root.value);
        }
        
        return root;
    }
}

let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(1)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50)


// tree.bfs()

// console.log("preorder")
// tree.dfsPreorder()

// console.log("inorder")
// tree.dfsInorder()

// console.log("postorder")
// tree.dfsPostorder()

tree.delete(10,40)

tree.bfs()


