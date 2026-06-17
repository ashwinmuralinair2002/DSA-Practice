//TREE

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor(value) {
        this.root = new Node(value);
    }

    insert(parentValue, newValue) {
        let parent = this.search(this.root, parentValue);

        if (parent) {
            parent.children.push(new Node(newValue));
        }
    }

    search(node, value) {
        if (!node) return null;

        if (node.value === value) {
            return node;
        }

        for (let child of node.children) {
            let found = this.search(child, value);

            if (found) {
                return found;
            }
        }

        return null;
    }

    countNodes(node) {
        if (!node) return 0;

        let count = 1;

        for (let child of node.children) {
            count += this.countNodes(child);
        }

        return count;
    }

    height(node) {
        if (!node) return 0;

        let maxHeight = 0;

        for (let child of node.children) {
            let childHeight = this.height(child);

            if (childHeight > maxHeight) {
                maxHeight = childHeight;
            }
        }

        return maxHeight + 1;
    }
}


//1) Create a Tree and search for the value 50.

console.log("QUESTION 1");

let tree1 = new Tree(10);

tree1.insert(10, 20);
tree1.insert(10, 30);
tree1.insert(20, 40);
tree1.insert(20, 50);

let result = tree1.search(tree1.root, 50);

console.log(result ? "Value Found" : "Value Not Found");


//2) Create a Tree and count the total number of nodes.

console.log("QUESTION 2");

let tree2 = new Tree(1);

tree2.insert(1, 2);
tree2.insert(1, 3);
tree2.insert(2, 4);
tree2.insert(2, 5);
tree2.insert(3, 6);

console.log("Total Nodes :", tree2.countNodes(tree2.root));


//3) Create a Tree and find its height.

console.log("QUESTION 3");

let tree3 = new Tree(100);

tree3.insert(100, 200);
tree3.insert(100, 300);
tree3.insert(200, 400);
tree3.insert(400, 500);

console.log("Height :", tree3.height(tree3.root));