const BinaryTreeNode = require('./BINARY_NODE');
const Queue = require('./QUEUE');
const Stack = require('./STACK');
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  add(value) {
    let node = new BinaryTreeNode(value);

    if (this.root) {
      const { found, parent } = this.findNodeAndParent(value);
      if (found) {
        found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;
        node = found;
      } else if (value < parent.value) {
        parent.setLeftAndUpdateParent(node);
      } else {
        parent.setRightAndUpdateParent(node);
      }
    } else {
      this.root = node;
    }

    this.size += 1;
    return node;
  }
  has(value) {
    return !!this.find(value);
  }

  find(value) {
    return this.findNodeAndParent(value).found;
  }

  findNodeAndParent(value, node = this.root, parent = null) {
    if (!node || node.value === value) {
      return { found: node, parent };
    } if (value < node.value) {
      return this.findNodeAndParent(value, node.left, node);
    }
    return this.findNodeAndParent(value, node.right, node);
  }
  getRightmost(node = this.root) {
    if (!node || !node.right) {
      return node;
    }
    return this.getMax(node.right);
  }

  getLeftmost(node = this.root) {
    if (!node || !node.left) {
      return node;
    }
    return this.getMin(node.left);
  }

  remove(value) {
    const { found: nodeToRemove, parent } = this.findNodeAndParent(value);

    if (!nodeToRemove) return false;

    const removedNodeChildren = this.combineLeftIntoRightSubtree(nodeToRemove);

    if (nodeToRemove.meta.multiplicity && nodeToRemove.meta.multiplicity > 1) {
      nodeToRemove.meta.multiplicity -= 1;
    } else if (nodeToRemove === this.root) {
      this.root = removedNodeChildren;
      if (this.root) { this.root.parent = null; }
    } else if (nodeToRemove.isParentLeftChild) {
      parent.setLeftAndUpdateParent(removedNodeChildren);
    } else {
      parent.setRightAndUpdateParent(removedNodeChildren);
    }

    this.size -= 1;
    return true;
  }
  combineLeftIntoRightSubtree(node) {
    if (node.right) {
      const leftmost = this.getLeftmost(node.right);
      leftmost.setLeftAndUpdateParent(node.left);
      return node.right;
    }
    return node.left;
  }

  * bfs() {
    const queue = new Queue();

    queue.add(this.root);

    while (!queue.isEmpty()) {
      const node = queue.remove();
      yield node;

      if (node.left) { queue.add(node.left); }
      if (node.right) { queue.add(node.right); }
    }
  }

  * dfs() {
    const stack = new Stack();

    stack.add(this.root);

    while (!stack.isEmpty()) {
      const node = stack.remove();
      yield node;

      if (node.right) { stack.add(node.right); }
      if (node.left) { stack.add(node.left); }
    }
  }

  * inOrderTraversal(node = this.root) {
    if (node && node.left) { yield* this.inOrderTraversal(node.left); }
    yield node;
    if (node && node.right) { yield* this.inOrderTraversal(node.right); }
  }

  * preOrderTraversal(node = this.root) {
    yield node;
    if (node.left) { yield* this.preOrderTraversal(node.left); }
    if (node.right) { yield* this.preOrderTraversal(node.right); }
  }

  * postOrderTraversal(node = this.root) {
    if (node.left) { yield* this.postOrderTraversal(node.left); }
    if (node.right) { yield* this.postOrderTraversal(node.right); }
    yield node;
  }

  toArray() {
    const array = [];
    const queue = new Queue();
    const visited = new Map();

    if (this.root) { queue.add(this.root); }

    while (!queue.isEmpty()) {
      const current = queue.remove();
      array.push(current && current.value);

      if (current) { visited.set(current); }

      if (current && !visited.has(current.left)) { queue.add(current.left); }
      if (current && !visited.has(current.right)) { queue.add(current.right); }
    }

    return array;
  }
}

// aliases
BinarySearchTree.prototype.insert = BinarySearchTree.prototype.add;
BinarySearchTree.prototype.set = BinarySearchTree.prototype.add;
BinarySearchTree.prototype.delete = BinarySearchTree.prototype.remove;
BinarySearchTree.prototype.getMin = BinarySearchTree.prototype.getLeftmost;
BinarySearchTree.prototype.minimum = BinarySearchTree.prototype.getMin;
BinarySearchTree.prototype.getMax = BinarySearchTree.prototype.getRightmost;
BinarySearchTree.prototype.maximum = BinarySearchTree.prototype.getMax;
BinarySearchTree.prototype.get = BinarySearchTree.prototype.find;

module.exports = BinarySearchTree;