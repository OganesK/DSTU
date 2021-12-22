
function swapParentChild(oldChild, newChild, parent) {
  if (parent) {
    const side = oldChild.isParentRightChild ? 'Right' : 'Left';
    parent[`set${side}AndUpdateParent`](newChild);
  } else {
    newChild.parent = null;
  }
}

function leftRotation(node) {
  const newParent = node.right;
  const grandparent = node.parent;
  const previousLeft = newParent.left;

  swapParentChild(node, newParent, grandparent);

  newParent.setLeftAndUpdateParent(node);
  node.setRightAndUpdateParent(previousLeft);

  return newParent;
}

function rightRotation(node) {
  const newParent = node.left;
  const grandparent = node.parent; 
  const previousRight = newParent.right;

  swapParentChild(node, newParent, grandparent);

  newParent.setRightAndUpdateParent(node);

  node.setLeftAndUpdateParent(previousRight);

  return newParent;
}

function leftRightRotation(node) {
  leftRotation(node.left);
  return rightRotation(node);
}

function rightLeftRotation(node) {
  rightRotation(node.right);
  return leftRotation(node);
}

module.exports = {
  leftRotation,
  rightRotation,
  leftRightRotation,
  rightLeftRotation,
};