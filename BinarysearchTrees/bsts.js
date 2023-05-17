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
    //insert method 
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


    //search a node in the tree

    search(value){
        if(!this.root) return undefined
        let current = this.root
        while(current){
            if(current.value === value) return true
            else if(current.value < value) current = current.right
            else current = current.left
        }
        return false
    }

    //Breadfirst Search

    Bfs(){
        let queue =[this.root]
        while(queue.length){
          let node = queue.shift()
           console.log(node.value)
           if(node.left) queue.push(node.left)
           if(node.right) queue.push(node.right)
        }
        return this
    }

    //DFS PREORDER 

    DfsPreorder(node = this.root){
         if(node) {
            console.log(node.value)
            this.DfsPreorder(node.left)
            this.DfsPreorder(node.right)
         }
    }

    //DFS POSTORDER

    DfsPostorder(node = this.root){
        if(node){
            this.DfsPostorder(node.left)
            this.DfsPostorder(node.right)
            console.log(node.value)
        }
    }

    //DFS INORDER

    DFSInorder(node = this.root){
        if(node){
            this.DFSInorder(node.left)
            console.log(node.value)
            this.DFSInorder(node.right)
        }
    }
    //FINDING THE MIN VALUE

    min(root = this.root){
      if(!root.left) {
        console.log(root.value)
        return root.value
      }
      else{
        return this.min(root.left)
      }  
    }

    //FINDING THE MAXIMUM VALUE 

    max(root = this.root){
        if(!root.right){
            console.log(root.value)
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }



    //DFS DELETING
    deleteNode(root,value){
        if(root === null) return root
        else if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{   
            if(!root.left && !root.right){
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
        return root;
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    //IS A VALID BST 
    Isvalid(root,min,max){
        return this.validateBst(root,min,max)
    }

    validateBst(root,min,max){
        if(!root) return  console.log(true)
        else if(root.value < min || root.value > max) return console.log(false)
        return (
            this.validateBst(root.left,min,root.value) &&
            this.validateBst(root.right,root.value,max)
        )
    }

    //FIND THE CLOSEST NODE 
    
    closestValue(value){
        let close = 0
        let difference = 0
        let largest = Infinity
        if(!this.root){
            return close
        }
        if(value < this.root.value){
            console.log("<")
            difference = Math.abs(value - this.root.value)
            if(difference < largest){
                largest = difference
                close = this.root.value
            }
           return this.closestValue(this.root.left,value)
        }
        if(value > this.root.value){
            console.log(">")
            difference = Math.abs(value - this.root.value)
            console.log(difference)
            if(difference < largest){
                console.log(">")
                largest = difference
                close = this.root.value
                console.log(">")
            }
           
           return this.closestValue(this.root.right,value)
        }
        return close
    }
   

}

const tree = new BinarySearchTree

tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50)
// tree.insert(8)
// tree.insert(8)
// tree.insert(35) 




// console.log(tree.search(0));
// tree.Bfs()

console.log("pre")
tree.DfsPreorder()
console.log("post")
tree.DfsPostorder()
console.log("in")
tree.DFSInorder()

// tree.min()
// tree.max()

// tree.delete(20)

// tree.DFSInorder()
// tree.Isvalid()

// console.log(tree.closestValue(33))

// tree.Bfs()