import Cons from "../../src/types/Cons.js";

describe("Construct valid Cons types", () => {
  test("It should construct a valid Cons type with two valid arguments", () => {
    expect(new Cons(1, null)).toEqual([1, null]);
  });

  test("It should construct a valid list with nested Cons constructor calls", () => {
    expect(new Cons(1, new Cons(2, new Cons(3, null)))).toEqual([
      1,
      [2, [3, null]],
    ]);
  });

  test("It should throw an error when given the wrong number of arguments", () => {
    expect(() => new Cons(1)).toThrow();
    expect(() => new Cons(1, 2, 3)).toThrow();
  });

  test("It should throw an error when the second argument is not a valid list", () => {
    expect(() => new Cons(1, 2)).toThrow();
  });
});
