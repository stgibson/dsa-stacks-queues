const DoublyLinkedList = require("./doubly-linked-list");

/** Deque: chained-together nodes where you can
 *  add and remove from the front and back. */

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new DoublyLinkedList();
  }

  /** appendLeft(val): add new value to start of the deque. Returns
   * undefined. */

  appendLeft(val) {
    this._list.unshift(val);
    if (!this.size) {
      this.first = this.last = this._list.head;
    }
    else {
      this.first = this._list.head;
    }
    this.size++;
  }

  /** appendRight(val): add new value to end of the deque. Returns
   * undefined. */

  appendRight(val) {
    this._list.push(val);
    if (!this.size) {
      this.first = this.last = this._list.head;
    }
    else {
      this.last = this._list.tail;
    }
    this.size++;
  }

  /** popLeft(): remove the node from the start of the deque
   * and return its value. Should throw an error if the deque is empty. */

  popLeft() {
    if (!this.size) {
      throw new Error("Attempting popLeft on empty deque");
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

  /** popRight(): remove the node from the end of the deque
   * and return its value. Should throw an error if the deque is empty. */

  popRight() {
    if (!this.size) {
      throw new Error("Attempting popRight on empty deque");
    }
    const val = this._list.pop();
    this.size--;
    if (!this.size) {
      this.first = this.last = null;
    }
    else {
      this.last = this._list.tail;
    }
    return val;
  }

  /** peekLeft(): return the value of the first node in the deque. */

  peekLeft() {
    return this._list.getAt(0);
  }

  /** peekRight(): return the value of the last node in the deque. */

  peekRight() {
    return this._list.getAt(this.size - 1);
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Deque;
