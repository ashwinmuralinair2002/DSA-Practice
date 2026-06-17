//TRIE

//1) Insert the words:
//["apple", "banana", "mango"]
//Search for "banana".

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {

        let node = this.root;

        for (let char of word) {

            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.isEnd = true;
    }

    search(word) {

        let node = this.root;

        for (let char of word) {

            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return node.isEnd;
    }
}

console.log("QUESTION 1");

let trie1 = new Trie();

trie1.insert("apple");
trie1.insert("banana");
trie1.insert("mango");

console.log(trie1.search("banana"));

//2) Insert the words:
//["cat", "car", "camera"]
//Check whether the prefix "ca" exists.

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {

        let node = this.root;

        for (let char of word) {

            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.isEnd = true;
    }

    startsWith(prefix) {

        let node = this.root;

        for (let char of prefix) {

            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return true;
    }
}

console.log("QUESTION 2");

let trie2 = new Trie();

trie2.insert("cat");
trie2.insert("car");
trie2.insert("camera");

console.log(trie2.startsWith("ca"));


//3) Insert the words:
//["dog", "door", "doll"]
//Search for "dog" and "dot".
//Check whether the prefix "do" exists.

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {

        let node = this.root;

        for (let char of word) {

            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        node.isEnd = true;
    }

    search(word) {

        let node = this.root;

        for (let char of word) {

            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return node.isEnd;
    }

    startsWith(prefix) {

        let node = this.root;

        for (let char of prefix) {

            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return true;
    }
}

console.log("QUESTION 3");

let trie3 = new Trie();

trie3.insert("dog");
trie3.insert("door");
trie3.insert("doll");

console.log("dog :", trie3.search("dog"));
console.log("dot :", trie3.search("dot"));
console.log("Prefix do :", trie3.startsWith("do"));