var Stack = function() {
  var someInstance = {};
  someInstance.top = null;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {

    if (someInstance.top === null) {
      someInstance.top = 0;
    } else {
      someInstance.top ++;
    }
    let key = someInstance.top;
    storage[key] = value;
  };

  someInstance.pop = function() {
    let elementpopped = storage[someInstance.top];
    delete storage[someInstance.top];
    someInstance.top --;
    if (someInstance.top < 0) {
      someInstance.top = null;
    }
    return elementpopped;
  };

  someInstance.size = function() {
    if (someInstance.top === null) {
      return 0;
    } else {
      return someInstance.top + 1;
    }
  };

  return someInstance;
};
