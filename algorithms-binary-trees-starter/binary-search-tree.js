// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }


  // Insert function needs to be complete before specs pass
  insert(val, currentNode=this.root) {

    // if there is no root, that the new value becomes the root
    if(!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    // if our new value is less than the root, we there check and see if the root currently has a left node,
    // if not we insert it there, if so we call our insert function recursively on out root.left
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {

      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {

    // Fill this in

  }


  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {

    // Fill this in

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {

    // Fill this in

  }

  preOrderTraversal(currentNode=this.root) {

    // Fill this in

  }


  inOrderTraversal(currentNode=this.root) {

    // Fill this in

  }


  postOrderTraversal(currentNode=this.root) {

    // Fill this in

  }


}

module.exports = [BinarySearchTree, TreeNode];
