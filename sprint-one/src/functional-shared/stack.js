
var Stack = function() {

  var someInstance = {};
  someInstance.top = null;
  someInstance.data = {};
  _.extend(someInstance, stackMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
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
