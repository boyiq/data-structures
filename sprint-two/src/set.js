var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'string') {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  if (typeof item === 'string') {
    return this._storage.hasOwnProperty(item);
  }
};

setPrototype.remove = function(item) {
  if (typeof item === 'string') {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 *
 * contains: O(1)
 *
 * remove: O(1)
 */
