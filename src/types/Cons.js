class Cons extends Array {
  constructor(first, last) {
    if (arguments.length != 2) {
      throw new Error(
        "A Cons type must be constructed with exactly two elements"
      );
    }
    if (!(last === null || last instanceof Cons)) {
      throw new Error("The second element in a Cons type must be a valid list");
    }
    super(first, last);
  }
}

export default Cons;
