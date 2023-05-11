class Node{
    constructor(value){
        this.value = this.value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value) {
        const node = new Node(value);
        if(this.root === null) {
          this.root = node;
        } else {
          let queue = [];
          queue.push(this.root);
          while(queue.length) {
              let current = queue.shift();
              if(!current.left) {
                  current.left = node;
                  break;
              }
              queue.push(current.left);

              if(!current.right) {
                  current.right = node;
                  break;
              }
              queue.push(current.right);
          }
        }
      }

      inorder(root = this.root){
         if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
         }
      }
}

const binarytree = new BinaryTree()

binarytree.insert("10")
binarytree.insert("220")
binarytree.insert("30")
binarytree.insert("40")
binarytree.insert("50")
binarytree.insert("160")

 
binarytree.inorder(binarytree.root)








