//1) Create a Min Heap.
//Insert [10, 5, 20, 2, 8] and display the heap.

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {

            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] <= this.heap[index]) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }
}

console.log("QUESTION 1");

let minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);
minHeap.insert(8);

console.log(minHeap.heap);

//2) Create a Max Heap.
//Build a heap using [10, 5, 20, 2, 8] and display it.

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {

            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] >= this.heap[index]) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    build(arr) {

        for (let value of arr) {
            this.insert(value);
        }
    }
}

console.log("QUESTION 2");

let maxHeap = new MaxHeap();

maxHeap.build([10, 5, 20, 2, 8]);

console.log(maxHeap.heap);


//3) Create a Min Heap.
//Insert [10, 5, 20, 2, 8].
//Remove the minimum element and display the heap.

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {

        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {

            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] <= this.heap[index]) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    remove() {

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {

            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }

        return min;
    }
}

console.log("QUESTION 3");

let heap = new MinHeap();

heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);
heap.insert(8);

console.log("Before Remove :", heap.heap);

console.log("Removed :", heap.remove());

console.log("After Remove :", heap.heap);
