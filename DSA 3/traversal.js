//GRAPH TRAVERSALS

//1) Create a graph.
//A-B, A-C, B-D, B-E, C-F
//Perform BFS traversal starting from A.

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

    bfs(start) {

        let queue = [start];
        let visited = new Set();

        visited.add(start);

        while (queue.length) {

            let vertex = queue.shift();

            console.log(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {

                if (!visited.has(neighbor)) {

                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

console.log("QUESTION 1");

let graph1 = new Graph();

graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.addVertex("E");
graph1.addVertex("F");

graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "D");
graph1.addEdge("B", "E");
graph1.addEdge("C", "F");

graph1.bfs("A");

//2) Create a graph.
//A-B, A-C, B-D, B-E, C-F
//Perform Recursive DFS traversal starting from A.

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

    dfsRecursive(start, visited = new Set()) {

        visited.add(start);

        console.log(start);

        for (let neighbor of this.adjacencyList[start]) {

            if (!visited.has(neighbor)) {
                this.dfsRecursive(neighbor, visited);
            }
        }
    }
}

console.log("QUESTION 2");

let graph2 = new Graph();

graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");

graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("B", "D");
graph2.addEdge("B", "E");
graph2.addEdge("C", "F");

graph2.dfsRecursive("A");

//3) Create a graph.
//A-B, A-C, B-D, B-E, C-F
//Perform Iterative DFS traversal starting from A.

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

    dfsIterative(start) {

        let stack = [start];
        let visited = new Set();

        while (stack.length) {

            let vertex = stack.pop();

            if (!visited.has(vertex)) {

                visited.add(vertex);

                console.log(vertex);

                for (let neighbor of this.adjacencyList[vertex].reverse()) {

                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }
}

console.log("QUESTION 3");

let graph3 = new Graph();

graph3.addVertex("A");
graph3.addVertex("B");
graph3.addVertex("C");
graph3.addVertex("D");
graph3.addVertex("E");
graph3.addVertex("F");

graph3.addEdge("A", "B");
graph3.addEdge("A", "C");
graph3.addEdge("B", "D");
graph3.addEdge("B", "E");
graph3.addEdge("C", "F");

graph3.dfsIterative("A");