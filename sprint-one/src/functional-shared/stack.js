let Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {
    storage: {}
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

let stackMethods = {
  push: function (value) {
    let lastIndex = this.size();
    this.storage[lastIndex + 1] = value;
  },

  pop: function () {
    let lastIndex = this.size();
    let lastElement = this.storage[lastIndex];
    delete this.storage[lastIndex];
    return lastElement;
  },

  size: function () {
    let size = 0;
    for (let key in this.storage) {
      size++;
    }
    return size;
  },
};
