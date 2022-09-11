class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.top = null;
    this.data = {};
  }

  push(value) {
    if (this.top === null) {
      this.top = 0;
    } else {
      this.top ++;
    }
    this.data[this.top] = value;
  }

  pop() {
    let itemPopped = this.data[this.top];
    delete this.data[this.top];
    this.top --;
    if (this.top < 0) {
      this.top = null;
    }
    return itemPopped;
  }

  size() {
    if (this.top === null) {
      return 0;
    } else {
      return this.top + 1;
    }
  }

}