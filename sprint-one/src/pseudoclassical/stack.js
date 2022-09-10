var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function (value) {
  let lastIndex = this.size();
  this.storage[lastIndex + 1] = value;
};

Stack.prototype.pop = function () {
  let lastIndex = this.size();
  let lastElement = this.storage[lastIndex];
  delete this.storage[lastIndex];
  return lastElement;
};

Stack.prototype.size = function () {
  let size = 0;
  for (let key in this.storage) {
    size++;
  }
  return size;
};