//BINARY SEARCH TREE

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;

        while (true) {
            if (value < current.value) {

                if (!current.left) {
                    current.left = node;
                    return;
                }

                current = current.left;

            } else {

                if (!current.right) {
                    current.right = node;
                    return;
                }

                current = current.right;
            }
        }
    }

    contains(value) {
        let current = this.root;

        while (current) {

            if (value === current.value) {
                return true;
            }

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    inorder(node) {
        if (!node) return;

        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    preorder(node) {
        if (!node) return;

        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    postorder(node) {
        if (!node) return;

        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }
}


//1) Create a BST with values [50,30,70,20,40,60,80].
//Check whether 60 and 100 are present.
//Display Inorder, Preorder and Postorder traversals.

console.log("QUESTION 1");

let bst1 = new BST();

[50, 30, 70, 20, 40, 60, 80].forEach(value => bst1.insert(value));

console.log("Contains 60 :", bst1.contains(60));
console.log("Contains 100 :", bst1.contains(100));

console.log("Inorder");
bst1.inorder(bst1.root);

console.log("Preorder");
bst1.preorder(bst1.root);

console.log("Postorder");
bst1.postorder(bst1.root);

//2) Find the Closest Value to a given target in a BST.
//Target = 58

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;

        while (true) {

            if (value < current.value) {

                if (!current.left) {
                    current.left = node;
                    return;
                }

                current = current.left;

            } else {

                if (!current.right) {
                    current.right = node;
                    return;
                }

                current = current.right;
            }
        }
    }

    findClosest(target) {

        let current = this.root;
        let closest = this.root.value;

        while (current) {

            if (
                Math.abs(target - current.value) <
                Math.abs(target - closest)
            ) {
                closest = current.value;
            }

            if (target < current.value) {
                current = current.left;
            } else if (target > current.value) {
                current = current.right;
            } else {
                break;
            }
        }

        return closest;
    }
}

console.log("QUESTION 2");

let bst2 = new BST();

[50, 30, 70, 20, 40, 60, 80].forEach(value => bst2.insert(value));

console.log("Closest Value :", bst2.findClosest(58));


//3) Validate whether a given tree is a BST.
//Also delete the node 70 and display inorder traversal.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {

        if (!node) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else {
            node.right = this.insertNode(node.right, value);
        }

        return node;
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {

        if (!node) return null;

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {

            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let min = node.right;

            while (min.left) {
                min = min.left;
            }

            node.value = min.value;
            node.right = this.deleteNode(node.right, min.value);
        }

        return node;
    }

    inorder(node) {

        if (!node) return;

        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    isValidBST(node, min = -Infinity, max = Infinity) {

        if (!node) return true;

        if (node.value <= min || node.value >= max) {
            return false;
        }

        return (
            this.isValidBST(node.left, min, node.value) &&
            this.isValidBST(node.right, node.value, max)
        );
    }
}

console.log("QUESTION 3");

let bst3 = new BST();

[50, 30, 70, 20, 40, 60, 80].forEach(value => bst3.insert(value));

console.log("Valid BST :", bst3.isValidBST(bst3.root));

bst3.delete(70);

console.log("After deleting 70");

bst3.inorder(bst3.root);