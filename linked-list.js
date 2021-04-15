/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /**
   * sortSorted(a, b): class method that takes 2 sorted linked lists and merges
   * them in a new sorted linked list
   */

  static sortSorted(a, b) {
    // base case 1: both lists are empty
    if (a.length === b.length === 0) {
      return new LinkedList([]);
    }
    // base case 2: 1 list is empty
    if (!a.length) {
      const newList = new LinkedList([]);
      let currNode = b.head;
      while (currNode) {
        newList.push(currNode.val);
        currNode = currNode.next;
      }
      return newList;
    }
    if (!b.length) {
      const newList = new LinkedList([]);
      let currNode = a.head;
      while (currNode) {
        newList.push(currNode.val);
        currNode = currNode.next;
      }
      return newList;
    }

    const newList = new LinkedList([]);    
    let currNodeA = a.head;
    let currNodeB = b.head;
    while (currNodeA && currNodeB) {
      if (currNodeA.val <= currNodeB.val) {
        newList.push(currNodeA.val);
        currNodeA = currNodeA.next;
      }
      else {
        newList.push(currNodeB.val);
        currNodeB = currNodeB.next;
      }
    }
    // after get to end of at least one list, copy rest of values of other
    while (currNodeA) {
      newList.push(currNodeA.val);
      currNodeA = currNodeA.next;
    }
    while (currNodeB) {
      newList.push(currNodeB.val);
      currNodeB = currNodeB.next;
    }
    return newList;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currNode = this.head;
    const lastNode = this.tail;

    // base case for only 1 item
    if (currNode === lastNode) {
      this.head = this.tail = null;
      this.length--;
      return lastNode.val;
    }

    // search for node that points to last node
    while (currNode.next !== lastNode) {
      currNode = currNode.next;
    }
    currNode.next = null;
    this.tail = currNode;
    this.length--;
    return lastNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const firstNode = this.head;
    // base case for only 1 item
    if (this.head === this.tail) {
      this.head = this.tail = null;
    }
    else {
      this.head = this.head.next;
    }
    this.length--;
    return firstNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head;
    for (let i = 0; i < idx; i++) {
      currNode = currNode.next;
    }
    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head;
    for (let i = 0; i < idx; i++) {
      currNode = currNode.next;
    }
    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    // base case 1: insert in empty list
    if (!this.head && idx === 0) {
      this.head = this.tail = newNode;
    }
    // base case 2: inserting at head
    else if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    else {
      let currNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currNode = currNode.next;
      }
      newNode.next = currNode.next;
      currNode.next = newNode;
      // if newNode at end, set tail to newNode
      if (!newNode.next) {
        this.tail = newNode;
      }
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let deletedNode;
    // base case 1: removing only item
    if (this.head === this.tail && idx === 0) {
      deletedNode = this.head;
      this.head = this.tail = null;
    }
    // base case 2: deleting at head
    else if (idx === 0) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    else {
      let currNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currNode = currNode.next;
      }
      deletedNode = currNode.next;
      currNode.next = currNode.next.next;
      // check if became new tail
      if (!currNode.next) {
        this.tail = currNode;
      }
    }
    this.length--;
    return deletedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    // base case for empty list, which is apparently supposed to be 0
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

  /** reverse(): reverses list in place */

  reverse() {
    // base case for empty list or list with 1 item, do nothing
    if (!this.length || this.head === this.tail) {
      return;
    }
    let currNode = this.head;
    let prevNode = null;
    while (currNode) {
      const nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    // when currNode is null, prevNode should be tail
    this.tail = this.head;
    this.head = prevNode;
  }

  /**
   * pivot(piv): puts all values less than piv on left of list before all
   * values on the right of list
   */

  pivot(piv) {
    // base case for empty list or list with 1 item, do nothing
    if (!this.length || this.head === this.tail) {
      return;
    }
    let prevNode = null;
    let currNode = this.head;
    let prevMovedNode = null;
    while (currNode) {
      if (currNode.val < piv) {
        if (prevNode) {
          prevNode.next = currNode.next;
          if (prevMovedNode) {
            currNode.next = prevMovedNode.next;
            prevMovedNode.next = currNode;
            prevMovedNode = currNode;
          }
          else {
            currNode.next = this.head;
            this.head = currNode;
            prevMovedNode = currNode;
          }
          currNode = prevNode.next;
        }
        // if prevNode is null, only found items less than pivot
        else {
          prevMovedNode = currNode;
          currNode = currNode.next;
        }
      }
      else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    // when currNode is null, prevNode was tail
    this.tail = prevNode;
  }
}

module.exports = LinkedList;
