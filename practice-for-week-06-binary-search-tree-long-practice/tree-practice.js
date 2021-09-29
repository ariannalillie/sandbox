const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

// A Binary search tree is a tree that follows some order to arrange the elements,
// whereas the binary tree does not follow any order. In a Binary search tree,
// the value of the left node must be smaller than the parent node, and the value
// of the right node must be greater than the parent node.

function findMinBST(rootNode) {
  if (!rootNode) return;
  let current = rootNode;
  while (current.left) {
    current = current.left
  }
  return current.val
}

function findMaxBST(rootNode) {
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

// Time Complexity: O(N)
// In the recursive function calls, every node of the tree is processed once
// and hence the complexity due to the function is O(N) if there are total N
// nodes in the tree. Therefore, the time complexity is O(N).
function findMinBT(rootNode) {
  if (rootNode == null) return;

  let min = rootNode.val;
  let left = findMinBT(rootNode.left);
  let right = findMinBT(rootNode.right);

  if (left < min) min = left;
  if (right < min) min = right;
  return min;
}

function findMaxBT(rootNode) {
  if (rootNode == null) return;

  let max = rootNode.val;
  let left = findMaxBT(rootNode.left);
  let right = findMaxBT(rootNode.right);

  if (left > max) max = left;
  if (right > max) max = right;
  return max;
}

// height of a binary tree is equal to the largest number of the edges from
// the root to the most distant leaf node.
function getHeight(rootNode) {
  // if there is no root, return 0 because the tree has a height of 0
  if (!rootNode) return -1;

  // if the root doesn't have a left node or a right node, there are no edges in this
  // tree, therefore the height is also 0
  if (!rootNode.left && !rootNode.right) return 0;

  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}

function countNodes(rootNode) {
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

// a binary tree in which the left and right subtrees of every node differ
// in height by no more than 1.

// The balanced subtree definition hints at the fact that we should treat each subtree
// as a subproblem. The question is: in which order should we solve the subproblems?
function balancedTree(rootNode) {
  if (!rootNode) return true
  if (Math.abs(getHeight(rootNode.left) - getHeight(rootNode.right)) > 1) {
    return false
  }
  else {
    return balancedTree(rootNode.left) && balancedTree(rootNode.right)
  }
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
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
