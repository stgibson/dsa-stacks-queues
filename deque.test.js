const Deque = require("./deque");

let deque;

beforeEach(function() {
  deque = new Deque();
});

describe("appendLeft", function() {
  it("places the value at the start of the deque and returns undefined", function() {
    expect(deque.appendLeft(10)).toBe(undefined);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(10);
    deque.appendLeft(100);
    expect(deque.first.val).toBe(100);
    expect(deque.last.val).toBe(10);
    deque.appendLeft(1000);
    expect(deque.first.val).toBe(1000);
    expect(deque.last.val).toBe(10);
  });
});

describe("appendRight", function() {
  it("places the value at the end of the deque and returns undefined", function() {
    expect(deque.appendRight(10)).toBe(undefined);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(10);
    deque.appendRight(100);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(100);
    deque.appendRight(1000);
    expect(deque.first.val).toBe(10);
    expect(deque.last.val).toBe(1000);
  });
});

describe("popLeft", function() {
  it("returns the value of the node removed", function() {
    deque.appendRight(10);
    deque.appendRight(100);
    deque.appendRight(1000);
    let removed = deque.popLeft();
    expect(removed).toBe(10);
    expect(deque.size).toBe(2);
    deque.popLeft();
    deque.popLeft();
    expect(deque.size).toBe(0);
  });

  it("throws an error if the deque is empty", function() {
    expect(() => deque.popLeft()).toThrow(Error);
  });
});

describe("popRight", function() {
  it("returns the value of the node removed", function() {
    deque.appendLeft(10);
    deque.appendLeft(100);
    deque.appendLeft(1000);
    let removed = deque.popRight();
    expect(removed).toBe(10);
    expect(deque.size).toBe(2);
    deque.popRight();
    deque.popRight();
    expect(deque.size).toBe(0);
  });

  it("throws an error if the deque is empty", function() {
    expect(() => deque.popRight()).toThrow(Error);
  });
});

describe("peekLeft", function() {
  it("returns the value at the start of the queue", function() {
    deque.appendRight(3);
    expect(deque.peekLeft()).toBe(3);
    deque.appendRight(5);
    expect(deque.peekLeft()).toBe(3);
  });
});

describe("peekRight", function() {
  it("returns the value at the end of the queue", function() {
    deque.appendLeft(3);
    expect(deque.peekRight()).toBe(3);
    deque.appendLeft(5);
    expect(deque.peekRight()).toBe(3);
  });
});

describe("isEmpty", function() {
  it("returns true for empty deques", function() {
    expect(deque.isEmpty()).toBe(true);
  });

  it("returns false for nonempty deques", function() {
    deque.appendLeft(3);
    expect(deque.isEmpty()).toBe(false);
  });
});
