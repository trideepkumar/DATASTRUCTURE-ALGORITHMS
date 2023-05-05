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
            if(current .value< value){
                current = current.left
                break
            }
            else{
                if(current.value>value){
                    current = current.right
                    break
                }
            }
        }
        return this
    }
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

    Bfs(){
        let queue = [this.root]
        while(queue.length){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return
    }

   Dfspreorder(root =this.root){
         if(root){
            console.log(root.value)
            this.Dfspreorder(root.left)
            this.Dfspreorder(root.right)
         }
   }

   Dfsinorder(root = this.root){
    if(root){
        this.Dfsinorder(root.left)
        console.log(root.value)
        this.Dfsinorder(root.right)
    }
   }

   //for checking the BST is valid or not
   
   Isvalid(root,min,max){
    return validateBst(root,min,max)
   }
   validateBst(root,min,max){
    if(!root) return true
    else if(root.value < min || root.value > max) return false
    return(
        this.validateBst(root.left,min,root.value)&&
        this.validateBst(root.right,root.value,max)

    )
   }
}