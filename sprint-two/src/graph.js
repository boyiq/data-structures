

// Instantiate a new graph
var Graph = function() {
  this.connections = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.connections[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.connections.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let nodeConnection = this.connections[node];
  for (let i = 0; i < nodeConnection.length; i ++) {
    this.removeEdge(nodeConnection[i], node);
  }
  delete this.connections[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.connections[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //this.connections[fromNode] = this.connections[fromNode] || [];
  //this.connections[toNode] = this.connections[toNode] || [];

  this.connections[fromNode].push(toNode);
  this.connections[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let newConnections = this.connections[fromNode].filter(function(item) {return item !== toNode;} );
  this.connections[fromNode] = newConnections;
  let newToConnections = this.connections[toNode].filter(function(item) {return item !== fromNode;} );
  this.connections[toNode] = newToConnections;
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
graph.addNode(6);
graph.addEdge(5, 4);
graph.addEdge(6, 4);
graph.addEdge(6, 5);
graph.removeEdge(5, 4);

