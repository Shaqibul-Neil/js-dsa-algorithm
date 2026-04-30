//js function stateless.
/*
const counter = (amount) => {
  //lexical env
  let count = 0;
  count = count + amount;
  return count;
  //lexical env
};
console.log(counter(3));
console.log(counter(2)); //doesn't remember previous value as it creates new lexical env on every call
*/

//obj is stateful
const counter = {
  count: 0,
  add(amount) {
    this.count = this.count + amount;
  },
  print() {
    console.log(this.count);
  },
};
counter.add(3);
counter.add(2); //remembers previous value
counter.print();
