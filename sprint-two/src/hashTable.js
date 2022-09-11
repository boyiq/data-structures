var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = this._storage[index] || [];
  let includes = false;
  for (let i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
      includes = true;
    }
  }

  if (!includes) {
    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let targetIndex;
  for (let i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i] && this._storage[index][i][0] === k) {
      targetIndex = i;
    }
  }
  return this._storage[index][targetIndex] ? this._storage[index][targetIndex][1] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let targetIndex;
  for (let i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      targetIndex = i;
    }
  }
  this._storage[index][targetIndex] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert O(1)
 *
 * retrieve: O(n)
 *
 * remove: O(n)
 */


