import { cons, list, isEmpty } from "../../src/functions/list.js";

describe("cons function", () => {
  test("It should construct a valid Cons type", () => {
    expect(cons(1, null)).toEqual([1, null]);
  });
});

describe("Creating a list", () => {
  test("It should return an empty list for no arguments", () => {
    expect(list()).toEqual(null);
  });

  test("It should return an empty list when the argument is null", () => {
    expect(list(null)).toEqual(null);
  });

  test("It should return a list when called with 1 or more arguments", () => {
    expect(list(1)).toEqual([1, null]);
    expect(list(1, 2)).toEqual([1, [2, null]]);
    expect(list(1, 2, 3)).toEqual([1, [2, [3, null]]]);
  });
});

describe("isEmpty should determine if a list is empty or not", () => {
  test("It should return true if empty, false if not", () => {
    expect(isEmpty(list())).toEqual(true);
    expect(isEmpty(list(null))).toEqual(true);
    expect(isEmpty(list(1))).toEqual(false);
  });
});

describe("isList should determine if a value is a valid list", () => {
  expect(isList(1)).toEqual(false);
  expect(isList(list(1, 2, 3))).toEqual(true);
});
