var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  let result = false;
  if (!result && this.value === target) {
    result = true;
  } else if (!result) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        result = true;
      }
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 *
 * contains: O(n)
 */
