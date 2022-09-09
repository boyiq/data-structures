

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.connections = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.connections[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.connections[fromNode] = this.connections[fromNode] || [];
  this.connections[toNode] = this.connections[toNode] || [];

  this.connections[fromNode].push(toNode);
  this.connections[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.connections[fromNode]; i++) {
    if (this.connections[fromNode][i] === toNode) {
      this.connections[fromNode][i] = null;
    }
  }

  for (let i = 0; i < this.connections[toNode]; i++) {
    if (this.connections[toNode][i] === fromNode) {
      this.connections[toNode][i] = null;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
let graph = new Graph();
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
graph.removeEdge(5, 4);


