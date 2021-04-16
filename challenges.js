const Stack = require("./stack");
const Queue = require("./queue");

/** stringReversal(str): reverses str using a stack */

function stringReversal(str) {
  const stack = new Stack();
  for (let letter of str) {
    stack.push(letter);
  }
  let newString = "";
  while (!stack.isEmpty()) {
    newString += stack.pop();
  }
  return newString;
}

/** isOpeningBracket(char): determines if char is an opening bracket */

function isOpeningBracket(char) {
  return char === "(" || char === "[" || char === "{";
}

/** isClosingBracket(char): determines if char is a closing bracket */

function isClosingBracket(char) {
  return char === ")" || char === "]" || char === "}";
}

/** bracketsMatch(openingBracket, closingBracket): checks if brackets match */

function bracketsMatch(openingBracket, closingBracket) {
  if (openingBracket === "(" && closingBracket === ")") {
    return true;
  }
  if (openingBracket === "[" && closingBracket === "]") {
    return true;
  }
  if (openingBracket === "{" && closingBracket === "}") {
    return true;
  }
  return false;
}

/** balancedBrackets(str): returns true if brackets in str are formatted
 *  correctly, otherwise returns false */

function balancedBrackets(str) {
  const stack = new Stack();
  for (let letter of str) {
    if (isOpeningBracket(letter)) {
      stack.push(letter);
    }
    else if (isClosingBracket(letter)) {
      const openingBracket = stack.pop();
      if (!bracketsMatch(openingBracket, letter)) {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  }
  return false;
}

/** findSurvivor(numOfPeople, skip): determines who will be the survivor in the
 *  Josephus Survivor problem */

function findSurvivor(numOfPeople, skip) {
  const queue = new Queue();
  for (let i = 1; i <= numOfPeople; i++) {
    queue.enqueue(i);
  }
  let counter = 0;
  let lastDequeued;
  while (!queue.isEmpty()) {
    lastDequeued = queue.dequeue();
    counter++;
    // check if can add back into queue, or if killed
    if (counter % skip !== 0) {
      queue.enqueue(lastDequeued);
    }
  }
  // the last person dequeued will be the survivor
  return lastDequeued;
}

/** evaluate(num1, num2, operation): performs operation on num1 and num2 */

function evaluate(num1, num2, operation) {
  if (operation === "+") {
    return num1 + num2;
  }
  if (operation === "-") {
    return num1 - num2;
  }
  if (operation === "*") {
    return num1 * num2;
  }
  if (operation === "/") {
    return num1 / num2;
  }
}

/** calc(expression): evaluates expression in polish notation */

function calc(expression) {
  const stack = new Stack();

  const expressionArr = expression.split(" ");
  for (let str of expressionArr) {
    stack.push(str);
  }
  while (!stack.isEmpty()) {
    // do to the order of adding and removing from stack, 1st popped is 2nd num
    const num2 = Number(stack.pop());
    // if only item in stack left, fully evaluated expression
    if (stack.isEmpty()) {
      return num2;
    }
    const num1 = Number(stack.pop());
    const operation = stack.pop();
    stack.push(evaluate(num1, num2, operation));
  }
}

module.exports = {
  stringReversal,
  balancedBrackets,
  findSurvivor,
  calc
};