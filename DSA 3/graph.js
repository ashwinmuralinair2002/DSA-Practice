//GRAPH

//1) Create an undirected graph.
//Add vertices A, B, C.
//Add edges A-B and A-C.
//Display the graph.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}

console.log("QUESTION 1");

let graph1 = new Graph();

graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");

graph1.addEdge("A", "B");
graph1.addEdge("A", "C");

graph1.display();

//2) Create a graph.
//Add vertices A, B, C, D.
//Add edges A-B, B-C, C-D.
//Remove the edge B-C.
//Display the graph.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {

        this.adjacencyList[vertex1] =
            this.adjacencyList[vertex1].filter(
                vertex => vertex !== vertex2
            );

        this.adjacencyList[vertex2] =
            this.adjacencyList[vertex2].filter(
                vertex => vertex !== vertex1
            );
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}

console.log("QUESTION 2");

let graph2 = new Graph();

graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");

graph2.addEdge("A", "B");
graph2.addEdge("B", "C");
graph2.addEdge("C", "D");

graph2.removeEdge("B", "C");

graph2.display();

//3) Create a graph.
//Add vertices A, B, C, D.
//Add edges A-B, A-C, B-D.
//Remove vertex B.
//Display the graph.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {

        this.adjacencyList[vertex1] =
            this.adjacencyList[vertex1].filter(
                vertex => vertex !== vertex2
            );

        this.adjacencyList[vertex2] =
            this.adjacencyList[vertex2].filter(
                vertex => vertex !== vertex1
            );
    }

    removeVertex(vertex) {

        while (this.adjacencyList[vertex].length) {

            let adjacentVertex =
                this.adjacencyList[vertex].pop();

            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}

console.log("QUESTION 3");

let graph3 = new Graph();

graph3.addVertex("A");
graph3.addVertex("B");
graph3.addVertex("C");
graph3.addVertex("D");

graph3.addEdge("A", "B");
graph3.addEdge("A", "C");
graph3.addEdge("B", "D");

graph3.removeVertex("B");

graph3.display();