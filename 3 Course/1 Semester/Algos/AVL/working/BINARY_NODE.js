const LEFT = Symbol('left');
const RIGHT = Symbol('right');

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.meta = {};
    // end::snippet[]
    this.parent = null;
    this.parentSide = null;
  }

  setLeftAndUpdateParent(node) {
    this.left = node;
    if (node) {
      node.parent = this;
      node.parentSide = LEFT;
    }
  }

  setRightAndUpdateParent(node) {
    this.right = node;
    if (node) {
      node.parent = this;
      node.parentSide = RIGHT;
    }
  }
  
  get parentChildSide() {
    if (this.parent) {
      return this.isParentLeftChild ? 'left' : 'right';
    }

    return 'root';
  }

  get isParentLeftChild() {
    return this.parentSide === LEFT;
  }

  get isParentRightChild() {
    return this.parentSide === RIGHT;
  }

  get isLeaf() {
    return !this.left && !this.right;
  }

  get sibling() {
    const { parent } = this;
    if (!parent) return null;
    return parent.right === this ? parent.left : parent.right;
  }

  get uncle() {
    const { parent } = this;
    if (!parent) return null;
    return parent.sibling;
  }

  get grandparent() {
    const { parent } = this;
    return parent && parent.parent;
  }

  get color() {
    return this.meta.color;
  }

  set color(value) {
    this.meta.color = value;
  }

  get leftSubtreeHeight() {
    return this.left ? this.left.height + 1 : 0;
  }

  get rightSubtreeHeight() {
    return this.right ? this.right.height + 1 : 0;
  }

  get height() {
    return Math.max(this.leftSubtreeHeight, this.rightSubtreeHeight);
  }

  get balanceFactor() {
    return this.leftSubtreeHeight - this.rightSubtreeHeight;
  }

  toValues() {
    return {
      value: this.value,
      left: this.left && this.left.value,
      right: this.right && this.right.value,
      parent: this.parent && this.parent.value,
      parentSide: this.parentSide,
    };
  }

  data(value) {
    if (value === undefined) {
      return this.meta.data;
    }
    this.meta.data = value;
    return this;
  }

  static from(iterable = []) {
    const toBinaryTree = (array, index = 0) => {
      if (index >= array.length) return null;
      const node = new BinaryTreeNode(array[index]);
      node.setLeftAndUpdateParent(toBinaryTree(array, index * 2 + 1));
      node.setRightAndUpdateParent(toBinaryTree(array, index * 2 + 2));
      return node;
    };
    return toBinaryTree(Array.from(iterable));
  }
}

BinaryTreeNode.RIGHT = RIGHT;
BinaryTreeNode.LEFT = LEFT;

module.exports = BinaryTreeNode;