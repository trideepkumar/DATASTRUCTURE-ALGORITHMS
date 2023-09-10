class Node {
    constructor(value){
        this.value = value
        this.left  = null
        this.right = null
    }
}

class Tree {
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)

        if(!this.root){
            this.root = node
        }
        let current = this.root

        while(current){
            if(current.value<value){
                if(!current.right){
                    current.right =node
                    break
                }
                current = current.right
            }else{
                if(!current.left){
                    current.left = node
                    break
                }
                current = current.left
            }
        }
    }

    BFS(){
        let queue = [this.root]
        while(queue.length){
            let node = queue.shift()
            console.log(node.value)
            if(node.right) queue.push(node.left)
            if(node.left) queue.push(node.right)
        }
    }
}

const tree = new Tree()

tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50)
tree.insert(60)

tree.BFS()