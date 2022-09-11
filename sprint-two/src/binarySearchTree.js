var BinarySearchTree = function(value) {
  let newBinarySearchTree = Object.create(bstMethod);
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  return newBinarySearchTree;
};

var bstMethod = {};

bstMethod.insert = function (value) {
  if (value < this.value && !this.left) {
    this.left = new BinarySearchTree(value);
  } else if (value < this.value) {
    this.left.insert(value);
  }

  if (value > this.value && !this.right) {
    this.right = new BinarySearchTree(value);
  } else if (value > this.value) {
    this.right.insert(value);
  }
};

bstMethod.contains = function (value) {
  let result = false;
  if (value === this.value) {
    result = true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  }
  return result;
};

bstMethod.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log(n))
 *
 * contains: O(log(n))
 *
 * depthFirstLog: O(n)
 */
