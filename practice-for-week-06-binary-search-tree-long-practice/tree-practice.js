const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

// A Binary search tree is a tree that follows some order to arrange the elements,
// whereas the binary tree does not follow any order. In a Binary search tree,
// the value of the left node must be smaller than the parent node, and the value
// of the right node must be greater than the parent node.

function findMinBST (rootNode) {
  if (!rootNode) return;
  let current = rootNode;
  while (current.left) {
    current = current.left
  }
  return current.val
}

function findMaxBST (rootNode) {
  if (!rootNode) return;
  let current = rootNode;
  while (current.right) {
    current = current.right
  }
  return current.val
}


// In Binary Search Tree, we can find maximum by traversing right pointers
// until we reach the rightmost node. But in Binary Tree, we must visit
// every node to figure out maximum.
function findMinBT (rootNode) {
  if (rootNode == null) return;

  var min = rootNode.val;
  var left = findMinBT(rootNode.left);
  var right = findMinBT(rootNode.right);

  if (left < min) min = left;
  if (right < min) min = right;
  return min;
}

function findMaxBT (rootNode) {
  // Your code here
}

function getHeight (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
