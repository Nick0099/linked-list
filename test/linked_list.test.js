import LinkedList from "../src/linked_list";

test("append adds values to the end", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  expect(list.toString()).toBe("( dog ) -> ( cat ) -> null");
});

test("prepend adds values to the front", () => {
  const list = new LinkedList();
  list.append("dog");
  list.prepend("cat");
  expect(list.toString()).toBe("( cat ) -> ( dog ) -> null");
});

test("size returns the number of nodes", () => {
  const list = new LinkedList();
  list.append("a");
  list.append("b");
  list.append("c");
  expect(list.size()).toBe(3);
});

test("pop removes and returns the head", () => {
  const list = new LinkedList();
  list.append("dog");
  list.append("cat");
  expect(list.pop()).toBe("dog");
  expect(list.toString()).toBe("( cat ) -> null");
});

test("removeAt throws RangeError for invalid index", () => {
  const list = new LinkedList();
  list.append("dog");
  expect(() => list.removeAt(5)).toThrow(RangeError);
});