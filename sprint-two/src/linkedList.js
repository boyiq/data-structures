var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    let head = list.head.value;
    list.head = list.head.next;
    return head;
  };

  list.contains = function(target, node) {
    let result = false;
    node = node || list.head;
    if (!result && node.value === target) {
      result = true;
    } else if (!result && node.next && list.contains(target, node.next)) {
      result = true;
    }
    return result;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 *
 * removeHead: O(1)
 *
 * contains: O(n)
 */
