import Node from "./node";
export default class LinkedList {
  constructor() {
    this.listHead = null; // starting of the list
  }
  prepend(value) {
    const newNode = new Node(value); // new value
    newNode.nextNode = this.listHead; // assigns address to find next node
    this.listHead = newNode; // tells it is the new head
  }
  append(value) {
    const newNode = new Node(value); // adding a new value
    if (
      this.listHead === null
    ) // if the address for next node is null it tells the programme it is a new node
    {
      this.listHead = newNode;
      return;
    } else {
      let current = this.listHead; // if this list head had a address for the next node it stores it in a temporary variable called current
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }
  size() {
    let count = 0; //counter
    let current = this.listHead; // temporary variable to count without messing with the list
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
  head() {
    if (this.listHead === null) return undefined;
    return this.listHead.value;
  }
  tail() {
    if (this.listHead !== null) {
      let current = this.listHead;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      return current.value;
    } else return undefined;
  }
  at(index) {
    if (this.listHead === null) return undefined;
    else if (index > this.size() - 1) return undefined;
    let current = this.listHead;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current.value;
  }
  pop() {
    if (this.listHead === null) return undefined;
    const popped = this.listHead.value;
    this.listHead = this.listHead.nextNode;
    return popped;
  }
  contains(value) {
    let current = this.listHead;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }
  findIndex(value) {
    let current = this.listHead;
    let count = 0;
    while (current !== null) {
      if (current.value === value) return count;
      current = current.nextNode;
      count++;
    }
    return -1;
  }
  toString() {
    let current = this.listHead;
    let str = "";
    if (current === null) return "";
    while (current !== null) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return `${str}null`;
  }
  insertAt(index, ...value) {
    if (index > this.size() || index < 0)
      throw new RangeError("index out of bounds");
    for (let j = 0; j < value.length; j++) {
      if (this.listHead === null || index === 0) {
        this.prepend(value[j]);
      } else {
        let current = this.listHead;
        for (let i = 0; i < index - 1; i++) {
          current = current.nextNode;
        }
        const newNode = new Node(value[j]);
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
      }
      index++;
    }
  }
  removeAt(index) {
    let current = this.listHead;
    if (index >= this.size() || index < 0) throw new RangeError("index out of bounds");
    if(index === 0) return this.pop();
    for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
    }
    current.nextNode = current.nextNode.nextNode;

  }
}
