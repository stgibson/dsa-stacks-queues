const LinkedList = require("./linked-list");

/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new LinkedList();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._list.unshift(val);
    if (!this.size) {
      this.first = this.last = this._list.head;
    }
    else {
      this.first = this._list.head;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // first verify not deleting from empty list
    if (!this.size) {
      throw new Error("Attempting pop on empty queue");
    }
    const val = this._list.shift();
    this.size--;
    if (!this.size) {
      this.first = this.last = null;
    }
    else {
      this.first = this._list.head;
    }
    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this._list.getAt(0);
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }

  // /** push(val): add new value to end of the stack. Returns undefined. */

  // push(val) {
  //   const newNode = new Node(val);
  //   // base case: adding to empty list
  //   if (!this.size) {
  //     this.first = this.last = newNode;
  //   }
  //   else {
  //     newNode.next = this.first;
  //     this.first = newNode;
  //   }
  //   this.size++;
  // }

  // /** pop(): remove the node from the top of the stack
  //  * and return its value. Should throw an error if the stack is empty. */

  // pop() {
  //   // first verify not deleting from empty list
  //   if (!this.size) {
  //     throw new Error("Attempting pop on empty queue");
  //   }
  //   const deletedNode = this.first;
  //   this.first = this.first.next;
  //   this.size--;
  //   return deletedNode.val;
  // }

  // /** peek(): return the value of the first node in the stack. */

  // peek() {
  //   return this.first.val;
  // }

  // /** isEmpty(): return true if the stack is empty, otherwise false */

  // isEmpty() {
  //   return this.size === 0;
  // }
}

module.exports = Stack;
