const BinarySearchTree = require('./BINARY_TREE');
const {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
} = require('./TREE_ROTATIONS');

function balance(node) {
  if (node.balanceFactor > 1) {
    if (node.left.balanceFactor < 0) {
      return leftRightRotation(node);
    }
    return rightRotation(node);
  } if (node.balanceFactor < -1) {
    if (node.right.balanceFactor > 0) {
      return rightLeftRotation(node);
    }
    return leftRotation(node);
  }
  return node;
}

function balanceUpstream(node) {
  let current = node;
  let newParent;
  while (current) {
    newParent = balance(current);
    current = current.parent;
  }
  return newParent;
}

class AvlTree extends BinarySearchTree {
 
  add(value) {
    const node = super.add(value);
    this.root = balanceUpstream(node);
    return node;
  }

  remove(value) {
    const node = super.find(value);
    if (node) {
      const found = super.remove(value);
      this.root = balanceUpstream(node.parent);
      return found;
    }

    return false;
  }
}

module.exports = AvlTree;