var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let lastIndex = someInstance.size();
    storage[lastIndex + 1] = value;
  };

  someInstance.dequeue = function() {
    let firstElement = storage[1];
    for (let key in storage) {
      if (storage[parseInt(key) + 1]) {
        storage[key] = storage[parseInt(key) + 1];
      } else {
        delete storage[key];
      }
    }
    return firstElement;
  };

  someInstance.size = function() {
    let size = 0;
    for (let key in storage) {
      size++;
    }
    return size;
  };

  return someInstance;
};
