var Queue = function() {
  var someInstance = {};
  someInstance.head = null;
  someInstance.tail = null;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (someInstance.head === null) {
      someInstance.head = 0;
      someInstance.tail = 0;
    } else {
      someInstance.tail ++;
    }
    let key = someInstance.tail;
    storage[key] = value;
  };

  someInstance.dequeue = function() {
    let itemDequeued = storage[someInstance.head];
    delete storage[someInstance.head];
    if (someInstance.tail > 0) {
      for (let key in storage) {
        let newkey = JSON.stringify(Number(key) - 1);
        storage[newkey] = storage[key];
        delete storage[key];
        someInstance.tail --;
      }
    } else if (someInstance.tail === 0) {
      someInstance.tail = null;
      someInstance.head = null;
    }
    return itemDequeued;
  };

  someInstance.size = function() {
    if (someInstance.tail === null) {
      return 0;
    } else {
      return someInstance.tail + 1;
    }
  };

  return someInstance;
};

