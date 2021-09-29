// Practice problems on binary trees

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

function findMinBT(rootNode) {
  // let min = rootNode.val;

  // if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  // if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

  // return min;

  let min = rootNode.val;

  let current = rootNode

  if (current.left) {
    if (current.left < min) {
      min = current.left;
      current = current.left
    }
  }
  if (current.right) {
    if (current.right < min) {
      min = current.right;
      current = current.right
    }
  }
  console.log(min)
  return min;

}

function findMaxBT(rootNode) {

  // Fill this in

}

function getHeight(rootNode) {

  // Fill this in

}

function countNodes(rootNode) {

  // Fill this in

}

function balancedTree(rootNode) {

  // Fill this in

}

function getParentNode(rootNode, target) {

  // Fill this in

}

function inOrderPredecessor(rootNode, target) {

  // Fill this in

}


function deleteNodeBST(rootNode, target) {

  // Fill this in

}

module.exports = [
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
]
