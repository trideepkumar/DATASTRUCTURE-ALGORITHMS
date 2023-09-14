class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);

    if (!this.root) this.root = node;
    let current = this.root;
    while (current) {
      if (current.value === value) return undefined;
      if (current.value < value) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }
    }
    return this;
  }

  bfs() {
    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return this;
  }


  DfsPreorder(node = this.root){
        if(node){
            console.log(node.value)
            this.DfsPreorder(node.left)
            this.DfsPreorder(node.right)
        }
  }
  DfsInorder(node = this.root){
    if(node){
        this.DfsInorder(node.left)
        console.log(node.value)
        this.DfsInorder(node.right)
    }
  }

  DfsPostorder(node= this.root){
    if(node){
    this.DfsPostorder(node.left)
    this.DfsPostorder(node.right)
    console.log(node.value)
    }
  }

 min(node=this.root){
    if(!node.left){
        console.log(node.value)
        return node.value
    }else{
        this.min(node.left)
    }
 }

 max(node=this.root){
    if(!node.right){
        console.log(node.value)
        return node.value
    }else{
        this.max(node.right)
    }
 }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(5)
tree.insert(50);
tree.insert(60);

// console.log("DfsPreOrder below")
// tree.DfsPreorder()
// console.log("DfsPostOrder below")
// tree.DfsPostorder()
// console.log("DfsInOrder below")
// tree.DfsInorder()

tree.min()
tree.max()
