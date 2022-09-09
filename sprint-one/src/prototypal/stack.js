var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.top = null;
  someInstance.data = {};
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  if (this.top === null) {
    this.top = 0;
    this.data[this.top] = value;
  } else {
    this.top++;
    this.data[this.top] = value;
  }

};

stackMethods.pop = function() {
  let itemPopped = this.data[this.top];
  delete this.data[this.top];
  this.top --;
  if (this.top < 0) {
    this.top = null;
  }
  return itemPopped;
};

stackMethods.size = function() {
  if (this.top === null) {
    return 0;
  } else {
    return this.top + 1;
  }
};


