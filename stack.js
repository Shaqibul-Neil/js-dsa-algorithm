//last in first out(LIFO)
class Stack {
  constructor() {
    this.array = [];
  }

  print() {
    console.log(this.array.toReversed().join("->"));
  }

  isEmpty() {
    return this.array.length === 0;
  }

  push(el) {
    this.array.push(el);
  }

  pop() {
    if (this.isEmpty()) return undefined;
    return this.array.pop();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.array[this.array.length - 1];
  }
}

const stack = new Stack();
stack.print();
console.log(stack.isEmpty());
console.log(stack.peek());
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
