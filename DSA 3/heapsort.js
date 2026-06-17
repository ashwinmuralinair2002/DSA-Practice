//HEAP SORT

//1) Sort the array using Heap Sort.
//[12, 11, 13, 5, 6, 7]

function heapify(arr, n, i) {

    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {

        [arr[i], arr[largest]] =
            [arr[largest], arr[i]];

        heapify(arr, n, largest);
    }
}

function heapSort(arr) {

    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {

        [arr[0], arr[i]] =
            [arr[i], arr[0]];

        heapify(arr, i, 0);
    }

    return arr;
}

console.log("QUESTION 1");
console.log(heapSort([12, 11, 13, 5, 6, 7]));


//2) A teacher has marks:
//[78, 92, 45, 88, 67]
//Arrange them in ascending order using Heap Sort.

function heapify(arr, n, i) {

    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {

        [arr[i], arr[largest]] =
            [arr[largest], arr[i]];

        heapify(arr, n, largest);
    }
}

function heapSort(arr) {

    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {

        [arr[0], arr[i]] =
            [arr[i], arr[0]];

        heapify(arr, i, 0);
    }

    return arr;
}

console.log("QUESTION 2");
console.log(heapSort([78, 92, 45, 88, 67]));


//3) Sort the array using Heap Sort.
//[25, 10, 35, 15, 5, 30, 20]

function heapify(arr, n, i) {

    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {

        [arr[i], arr[largest]] =
            [arr[largest], arr[i]];

        heapify(arr, n, largest);
    }
}

function heapSort(arr) {

    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {

        [arr[0], arr[i]] =
            [arr[i], arr[0]];

        heapify(arr, i, 0);
    }

    return arr;
}

console.log("QUESTION 3");
console.log(heapSort([25, 10, 35, 15, 5, 30, 20]));