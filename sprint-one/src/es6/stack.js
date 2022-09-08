class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    let lastIndex = this.size();
    this.storage[lastIndex + 1] = value;
  }

  pop () {
    let lastIndex = this.size();
    let lastElement = this.storage[lastIndex];
    delete this.storage[lastIndex];
    return lastElement;
  }

  size () {
    let size = 0;
    for (let key in this.storage) {
      size++;
    }
    return size;
  }
}