class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
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
  //searching values in a binary search tree
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

    //breadth first search tree

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

    //deapth first search preorder

    DFSpre(node = this.root){
        if(node){
            console.log(node.value)
            this.DFSpre(node.left)
            this.DFSpre(node.right)
        }
    }

    //deapth first search inorder

    DFSin(node = this.root){
        if(node){
            this.DFSin(node.left)
            console.log(node.value)
            this.DFSin(node.right)
        }
    }

    //finding the  minimum value
    min(root = this.root){
        if(!root.left) {
          console.log(root.value)
          return root.value
        }
        else{
          return this.min(root.left)
        }  
      }

   //validating a bst or not

   Isvalid(root,min,max){
    return this.validateBST(root,min,max)
   }
   validateBST(root,min,max){
    if(!root)  return undefined
    else if(root.value < min || root.value > max) return false
    return(
        this.validateBST(root.left,min,root.value)&&
        this.validateBST(root.right,root.value,max)
    )
   }

   deleteNode(root,value){
    if(!root)  return undefined
    else if(value<root.value){
        root.left = this.deleteNode(root.left,value)
    }
    else if(value>root.value){
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

const bst = new BST()

bst.insert(1)
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(80)
bst.insert(24)
bst.insert(12)

// console.log(bst)

// console.log(bst.search(40))

// bst.BFS()

// bst.DFSpre()
// bst.Isvalid()

// bst.delete(80)
bst.
bst.BFS()















