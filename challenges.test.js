const {
  stringReversal,
  balancedBrackets,
  findSurvivor,
  calc
} = require("./challenges");

describe("stringReversal", function() {
  it("doesn't modify empty string", function() {
    expect(stringReversal("")).toBe("");
  });

  it("doesn't modify string with 1 char", function() {
    expect(stringReversal("a")).toBe("a");
  });

  it("reverses string", function() {
    expect(stringReversal("beautiful")).toBe("lufituaeb");
  });
});

describe("balancedBrackets", function() {
  it("returns true with no brackets", function() {
    expect(balancedBrackets("hello")).toBeTruthy();
  });

  it("returns true with balanced brackets", function() {
    expect(balancedBrackets("(hi) [there]")).toBeTruthy();
    expect(balancedBrackets("(hi [there])")).toBeTruthy();
    expect(balancedBrackets("(((hi)))")).toBeTruthy();
  });

  it("returns false with unbalanced brackets", function() {
    expect(balancedBrackets("(hello")).toBeFalsy();
    expect(balancedBrackets("(nope]")).toBeFalsy();
    expect(balancedBrackets("((ok) [nope)]")).toBeFalsy();
  });
});

describe("findSurvivor", function() {
  it("determines who will be the survivor", function() {
    expect(findSurvivor(10, 3)).toBe(4);
  });
});

describe("calculator", function() {
  it("evaluates expressions correctly", function() {
    expect(calc("+ 1 2")).toBe(3);
    expect(calc("* 2 + 1 2")).toBe(6);
    expect(calc("+ 9 * 2 3")).toBe(15);
    expect(calc("- 1 2")).toBe(-1);
    expect(calc("- 9 * 2 3")).toBe(3);
    expect(calc("/ 6 - 4 2")).toBe(3);
  });
});