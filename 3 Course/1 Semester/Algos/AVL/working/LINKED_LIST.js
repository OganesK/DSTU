const util = require('util');
const Node = require('./NODE'); // Doubly

class LinkedList {
  constructor(
    iterable = [],
    ListNode = Node,
  ) {
    this.first = null;
    this.last = null;
    this.size = 0;

    this.ListNode = ListNode;

    Array.from(iterable, (i) => this.addLast(i));
  }

  addFirst(value) {
    const newNode = new this.ListNode(value);

    newNode.next = this.first;

    if (this.first) {
      this.first.previous = newNode;
    } else {
      this.last = newNode;
    }

    this.first = newNode; // update head
    this.size += 1;

    return newNode;
  }
  addLast(value) {
    const newNode = new Node(value);

    if (this.first) {
      newNode.previous = this.last;
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return newNode;
  }

  addAt(value, position = 0) {
    if (position === 0) return this.addFirst(value);
    if (position === this.size) return this.addLast(value);

    const current = this.findBy({ index: position }).node;
    if (!current) return undefined;

    const newNode = new Node(value);
    newNode.previous = current.previous;
    newNode.next = current;
    current.previous.next = newNode;
    current.previous = newNode;
    this.size += 1;
    return newNode;
  }

  getIndexByValue(value) {
    return this.findBy({ value }).index;
  }
  get(index = 0) {
    return this.findBy({ index }).node;
  }

  findBy({ value, index = Infinity } = {}) {
    for (let current = this.first, position = 0;
      current && position <= index; 
      position += 1, current = current.next) {
      if (position === index || value === current.value) {
        return { node: current, index: position };
      }
    }
    return {};
  }

  removeFirst() {
    if (!this.first) return null;
    const head = this.first;

    this.first = head.next;
    if (this.first) {
      this.first.previous = null;
    } else {
      this.last = null;
    }
    this.size -= 1;
    return head.value;
  }
  
  removeLast() {
    if (!this.last) return null;
    const tail = this.last;

    this.last = tail.previous;
    if (this.last) {
      this.last.next = null;
    } else {
      this.first = null;
    }
    this.size -= 1;
    return tail.value;
  }

  removeByPosition(position = 0) {
    if (position === 0) return this.removeFirst();
    if (position === this.size - 1) return this.removeLast();
    const current = this.findBy({ index: position }).node;
    if (!current) return null;
    current.previous.next = current.next;
    current.next.previous = current.previous;
    this.size -= 1;
    return current && current.value;
  }

  removeByNode(node) {
    if (!node) { return null; }
    if (node === this.first) {
      return this.removeFirst();
    }
    if (node === this.last) {
      return this.removeLast();
    }
    node.previous.next = node.next;
    node.next.previous = node.previous;
    this.size -= 1;

    return node.value;
  }

  * [Symbol.iterator]() {
    for (let node = this.first; node; node = node.next) {
      yield node;
    }
  }

  toString() {
    const parts = [...this];
    return parts.map((n) => util.inspect(n.value)).join(' -> ');
  }


  get length() {
    return this.size;
  }

  find(callback) {
    for (let current = this.first, position = 0;
      current;
      position += 1, current = current.next) {
      const result = callback(current, position);

      if (result !== undefined) {
        return result;
      }
    }
    return undefined;
  }

  remove(callbackOrIndex) {
    if (typeof callbackOrIndex !== 'function') {
      return this.removeByPosition(parseInt(callbackOrIndex, 10) || 0);
    }

    const position = this.find((node, index) => {
      if (callbackOrIndex(node, index)) {
        return index;
      }
      return undefined;
    });

    if (position !== undefined) {
      return this.removeByPosition(position);
    }

    return false;
  }
}

LinkedList.prototype.push = LinkedList.prototype.addLast;
LinkedList.prototype.pop = LinkedList.prototype.removeLast;
LinkedList.prototype.unshift = LinkedList.prototype.addFirst;
LinkedList.prototype.shift = LinkedList.prototype.removeFirst;
LinkedList.prototype.search = LinkedList.prototype.contains;

module.exports = LinkedList;