import Cons from "../types/Cons.js";

export function cons(first, last) {
  return new Cons(first, last);
}

export function list(...args) {
  if (args.length == 0) {
    return null;
  }
  if (args.length == 1) {
    if (args[0] == null) {
      return null;
    }
    return cons(args[0], null);
  }
  return cons(args[0], list(...args.slice(1)));
}

export function isCons(obj) {
  return obj instanceof Cons;
}

export function isEmpty(lst) {
  return lst === null;
}

export function isList(obj) {
  if (isEmpty(obj)) {
    return true;
  }
  if (!isCons(obj)) {
    return false;
  }
  return isList(rest(obj));
}

export function first(lst) {
  if (isEmpty(lst)) {
    throw new Error("Invalid value to first: list must not be empty");
  }
  if (!isCons(lst)) {
    throw new Error("Invalid value to first: must be a valid list");
  }
  return lst[0];
}

export function rest(lst) {
  if (isEmpty(lst)) {
    throw new Error("Invalid value to rest: list must not be empty");
  }
  if (!isCons(lst)) {
    throw new Error("Invalid value to rest: must be a valid list");
  }
  return lst[1];
}
