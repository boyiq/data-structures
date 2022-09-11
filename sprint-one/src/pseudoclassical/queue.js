var Queue = function() {
  this.head = null;
  this.tail = null;
  this.data = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
  if (this.head === null) {
    this.head = 0;
    this.tail = 0;
  } else {
    this.tail ++;
  }
  this.data[this.tail] = value;
};

Queue.prototype.dequeue = function() {
  let itemDequeued = this.data[this.head];
  delete this.data[this.head];
  if (this.tail === 0) {
    this.tail = null;
    this.head = null;
  } else if (this.tail > 0) {
    this.tail --;
    for (let key in this.data) {
      let newkey = JSON.stringify(Number(key) - 1);
      this.data[newkey] = this.data[key];
      delete this.data[key];
    }
  }
  return itemDequeued;
};

Queue.prototype.size = function() {
  if (this.tail === null) {
    return 0;
  } else {
    return this.tail + 1;
  }
};

