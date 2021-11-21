const { shuffleArray } = require("./utils");

let testArray = ["Jerahmeel", "Jack", "Jane", "Jade"];

describe("shuffleArray should", () => {
  test("shuffleArray should return an array", () => {
    expect(shuffleArray(testArray)).toBeInstanceOf(Array);
  });
  test("shuffleArray should return an array of same length as argument", () => {
    expect(shuffleArray(testArray).length).toBe(testArray.length);
  });
});
