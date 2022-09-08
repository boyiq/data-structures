var Stack = function() {
  var someInstance = {};

  var storage = {};

  someInstance.push = function(value) {
    let lastIndex = someInstance.size();
    storage[lastIndex + 1] = value;
  };

  someInstance.pop = function() {
    let lastIndex = someInstance.size();
    let lastElement = storage[lastIndex];
    delete storage[lastIndex];
    return lastElement;
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
