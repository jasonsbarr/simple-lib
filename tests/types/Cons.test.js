import Cons from "../../src/types/Cons.js";

describe("Construct valid Cons types", () => {
  test("It should construct a valid Cons type with two valid arguments", () => {
    expect(new Cons(1, null)).toEqual([1, null]);
  });
});
