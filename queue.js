const LinkedList = require("./linked-list");

/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.push(val);
    if (!this.size) {
      this.first = this.last = this._list.head;
    }
    else {
      this.last = this._list.tail;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // first verify list isn't empty
    if (!this.size) {
      throw new Error("Attempting dequeue on empty queue");
    }
    const val = this._list.shift();
    this.size--;
    if (!this.size) {
      this.first = this.last = this._list.head;
    }
    else {
      this.first = this._list.head;
    }
    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this._list.getAt(0);
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }

  // code to implement Queue without LinkedList

  // /** enqueue(val): add new value to end of the queue. Returns undefined. */

  // enqueue(val) {
  //   const newNode = new Node(val);
  //   // base case: queue is empty
  //   if (!this.size) {
  //     this.first = this.last = newNode;
  //   }
  //   // otherwise, add to end
  //   else {
  //     this.last.next = newNode;
  //     this.last = newNode;
  //   }
  //   this.size++;
  // }

  // /** dequeue(): remove the node from the start of the queue
  //  * and return its value. Should throw an error if the queue is empty. */

  // dequeue() {
  //   // first verify list isn't empty
  //   if (!this.size) {
  //     throw new Error("Attempting dequeue on empty queue");
  //   }
  //   const deletedNode = this.first;
  //   if (this.size === 1) {
  //     this.first = this.last = null;
  //   }
  //   else {
  //     this.first = this.first.next;
  //   }
  //   this.size--;
  //   return deletedNode.val;
  // }

  // /** peek(): return the value of the first node in the queue. */

  // peek() {
  //   return this.first.val;
  // }

  // /** isEmpty(): return true if the queue is empty, otherwise false */

  // isEmpty() {
  //   return this.size === 0;
  // }
}

module.exports = Queue;
