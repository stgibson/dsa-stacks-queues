/** Node: node for a doubly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    // base case for adding to empty list
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    // base case for adding to empty list
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    const deletedNode = this.tail;
    // base case for deleting only node
    if (this.head === this.tail) {
      this.head = this.tail = null;
    }
    else {
      const prevNode = this.tail.prev;
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;
    return deletedNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const deletedNode = this.head;
    // base case for deleting only node
    if (this.head === this.tail) {
      this.head = this.tail = null;
    }
    else {
      const nextNode = this.head.next;
      nextNode.prev = null;
      this.head = nextNode;
    }
    this.length--;
    return deletedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < this.length / 2) {
      let currNode = this.head;
      for (let i = 0; i < idx; i++) {
        currNode = currNode.next;
      }
      return currNode.val;
    }
    else {
      let currNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        currNode = currNode.prev;
      }
      return currNode.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < this.length / 2) {
      let currNode = this.head;
      for (let i = 0; i < idx; i++) {
        currNode = currNode.next;
      }
      currNode.val = val;
    }
    else {
      let currNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        currNode = currNode.prev;
      }
      currNode.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    // base case 1: adding to empty list
    if (!this.head && !idx) {
      this.head = this.tail = newNode;
    }
    // base case 2: adding to head
    else if (!idx) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    // base case 3: adding to tail
    else if (idx === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    else if (idx < this.length / 2) {
      let currNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currNode = currNode.next;
      }
      newNode.prev = currNode;
      newNode.next = currNode.next;
      currNode.next.prev = newNode;
      currNode.next = newNode;
    }
    else {
      let currNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        currNode = currNode.prev;
      }
      newNode.prev = currNode.prev;
      newNode.next = currNode;
      currNode.prev.next = newNode;
      currNode.prev = newNode;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let deletedNode;
    // base case 1: removing last item in list
    if (this.head === this.tail && !idx) {
      deletedNode = this.head;
      this.head = this.tail = null;
    }
    // base case 2: removing head
    else if (!idx) {
      deletedNode = this.head;
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    // base case 3: removing tail
    else if (!idx) {
      deletedNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    else if (idx < this.length / 2) {
      let currNode = this.head;
      for (let i = 0; i < idx; i++) {
        currNode = currNode.next;
      }
      deletedNode = currNode;
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
    }
    else {
      let currNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        currNode = currNode.prev;
      }
      deletedNode = currNode;
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
    }
    this.length--;
    return deletedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    // base case for empty list
    if (!this.length) {
      return 0;
    }
    let sum = 0;
    let currNode = this.head;
    while (currNode) {
      sum += currNode.val;
      currNode = currNode.next;
    }
    return sum / this.length;
  }
}

module.exports = DoublyLinkedList;
