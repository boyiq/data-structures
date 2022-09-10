class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue (value) {
    let lastIndex = this.size();
    this.storage[lastIndex + 1] = value;
  }

  dequeue () {
    let firstElement = this.storage[1];
    for (let key in this.storage) {
      if (this.storage[parseInt(key) + 1]) {
        this.storage[key] = this.storage[parseInt(key) + 1];
      } else {
        delete this.storage[key];
      }
    }
    return firstElement;
  }

  size () {
    let size = 0;
    for (let key in this.storage) {
      size++;
    }
    return size;
  }
}
