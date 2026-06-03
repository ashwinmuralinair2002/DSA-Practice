//Bubble Sort
//Sort the array using Bubble Sort. [5, 3, 8, 4, 2]

console.log("BUBBLE SORT : ");
function bubbleSort(brr) {
    let n = brr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - 1 - i; j++) {

            if (brr[j] > brr[j + 1]) {

                let temp = brr[j];
                brr[j] = brr[j + 1];
                brr[j + 1] = temp;

            }
        }
    }

    return brr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));


//2) Sort the array from largest to smallest using Bubble Sort. [7, 1, 9, 4, 6]

function bubbleSortDescending(crr) {
    let n = crr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - 1 - i; j++) {

            if (crr[j] < crr[j + 1]) {

                let temp = crr[j];
                crr[j] = crr[j + 1];
                crr[j + 1] = temp;

            }
        }
    }

    return crr;
}

console.log(bubbleSortDescending([7, 1, 9, 4, 6]));


//3) A teacher has marks: [78, 92, 45, 88, 67]
//Arrange them in ascending order using Bubble Sort.

function sortMarks(drr) {
    let n = drr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - 1 - i; j++) {

            if (drr[j] > drr[j + 1]) {

                let temp = drr[j];
                drr[j] = drr[j + 1];
                drr[j + 1] = temp;

            }
        }
    }

    return drr;
}

console.log(sortMarks([78, 92, 45, 88, 67]));


console.log("-------------------------------------------- ");
console.log("INSERTION SORT : ");

//=====================================================
// INSERTION SORT
//=====================================================

//1) Sort the array using Insertion Sort. [9, 5, 1, 4, 3]

function insertionSort(err) {

    for (let i = 1; i < err.length; i++) {

        let key = err[i];
        let j = i - 1;

        while (j >= 0 && err[j] > key) {
            err[j + 1] = err[j];
            j--;
        }

        err[j + 1] = key;
    }

    return err;
}

console.log(insertionSort([9, 5, 1, 4, 3]));


//2) Sort the array in descending order using Insertion Sort. [8, 2, 6, 1, 9]

function insertionSortDescending(frr) {

    for (let i = 1; i < frr.length; i++) {

        let key = frr[i];
        let j = i - 1;

        while (j >= 0 && frr[j] < key) {
            frr[j + 1] = frr[j];
            j--;
        }

        frr[j + 1] = key;
    }

    return frr;
}

console.log(insertionSortDescending([8, 2, 6, 1, 9]));


//3) Sort employee ages using Insertion Sort. [34, 22, 45, 19, 28]

function sortAges(grr) {

    for (let i = 1; i < grr.length; i++) {

        let key = grr[i];
        let j = i - 1;

        while (j >= 0 && grr[j] > key) {
            grr[j + 1] = grr[j];
            j--;
        }

        grr[j + 1] = key;
    }

    return grr;
}

console.log(sortAges([34, 22, 45, 19, 28]));

console.log("-------------------------------------------- ");
console.log("SELECTION SORT : ");
//=====================================================
// SELECTION SORT
//=====================================================

//1) Sort the array using Selection Sort. [64, 25, 12, 22, 11]

function selectionSort(hrr) {

    let n = hrr.length;

    for (let i = 0; i < n - 1; i++) {

        let minIndex = i;

        for (let j = i + 1; j < n; j++) {

            if (hrr[j] < hrr[minIndex]) {
                minIndex = j;
            }
        }

        let temp = hrr[i];
        hrr[i] = hrr[minIndex];
        hrr[minIndex] = temp;
    }

    return hrr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));


//2) Sort the array in descending order using Selection Sort. [7, 3, 9, 2, 8]

function selectionSortDescending(irr) {

    let n = irr.length;

    for (let i = 0; i < n - 1; i++) {

        let maxIndex = i;

        for (let j = i + 1; j < n; j++) {

            if (irr[j] > irr[maxIndex]) {
                maxIndex = j;
            }
        }

        let temp = irr[i];
        irr[i] = irr[maxIndex];
        irr[maxIndex] = temp;
    }

    return irr;
}

console.log(selectionSortDescending([7, 3, 9, 2, 8]));


//3) Sort product prices using Selection Sort. [550, 200, 750, 100, 400]

function sortPrices(jrr) {

    let n = jrr.length;

    for (let i = 0; i < n - 1; i++) {

        let minIndex = i;

        for (let j = i + 1; j < n; j++) {

            if (jrr[j] < jrr[minIndex]) {
                minIndex = j;
            }
        }

        let temp = jrr[i];
        jrr[i] = jrr[minIndex];
        jrr[minIndex] = temp;
    }

    return jrr;
}

console.log(sortPrices([550, 200, 750, 100, 400]));





//=====================================================
// QUICK SORT
//=====================================================

console.log("--------------------------------------------");
console.log("QUICK SORT :");


//1) Sort the array using Quick Sort. [10, 7, 8, 9, 1, 5]

function quickSort(krr) {

    if (krr.length <= 1) {
        return krr;
    }

    let pivot = krr[krr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < krr.length - 1; i++) {

        if (krr[i] < pivot) {
            left.push(krr[i]);
        } else {
            right.push(krr[i]);
        }

    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([10, 7, 8, 9, 1, 5]));


//2) Sort the array in descending order using Quick Sort. [12, 4, 9, 1, 15, 7]

function quickSortDescending(lrr) {

    if (lrr.length <= 1) {
        return lrr;
    }

    let pivot = lrr[lrr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < lrr.length - 1; i++) {

        if (lrr[i] > pivot) {
            left.push(lrr[i]);
        } else {
            right.push(lrr[i]);
        }

    }

    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)];
}

console.log(quickSortDescending([12, 4, 9, 1, 15, 7]));


//3) Sort exam scores using Quick Sort. [87, 65, 92, 45, 78]

function sortScores(mrr) {

    if (mrr.length <= 1) {
        return mrr;
    }

    let pivot = mrr[mrr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < mrr.length - 1; i++) {

        if (mrr[i] < pivot) {
            left.push(mrr[i]);
        } else {
            right.push(mrr[i]);
        }

    }

    return [...sortScores(left), pivot, ...sortScores(right)];
}

console.log(sortScores([87, 65, 92, 45, 78]));



//=====================================================
// MERGE SORT
//=====================================================

console.log("--------------------------------------------");
console.log("MERGE SORT :");

//1) Sort the array using Merge Sort. [38, 27, 43, 3, 9, 82, 10]

function merge(nrr) {

    let result = [];
    let left = 0;
    let right = 0;

    while (left < nrr[0].length && right < nrr[1].length) {

        if (nrr[0][left] < nrr[1][right]) {
            result.push(nrr[0][left]);
            left++;
        } else {
            result.push(nrr[1][right]);
            right++;
        }
    }

    return result
        .concat(nrr[0].slice(left))
        .concat(nrr[1].slice(right));
}

function mergeSort(nrr) {

    if (nrr.length <= 1) {
        return nrr;
    }

    let mid = Math.floor(nrr.length / 2);

    let left = mergeSort(nrr.slice(0, mid));
    let right = mergeSort(nrr.slice(mid));

    return merge([left, right]);
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));


//2) Sort the array in descending order using Merge Sort. [14, 7, 20, 3, 11]

function mergeDescending(orr) {

    let result = [];
    let left = 0;
    let right = 0;

    while (left < orr[0].length && right < orr[1].length) {

        if (orr[0][left] > orr[1][right]) {
            result.push(orr[0][left]);
            left++;
        } else {
            result.push(orr[1][right]);
            right++;
        }
    }

    return result
        .concat(orr[0].slice(left))
        .concat(orr[1].slice(right));
}

function mergeSortDescending(orr) {

    if (orr.length <= 1) {
        return orr;
    }

    let mid = Math.floor(orr.length / 2);

    let left = mergeSortDescending(orr.slice(0, mid));
    let right = mergeSortDescending(orr.slice(mid));

    return mergeDescending([left, right]);
}

console.log(mergeSortDescending([14, 7, 20, 3, 11]));


//3) Sort monthly sales using Merge Sort. [5000, 2200, 8100, 4300, 6700]

function mergeSales(prr) {

    let result = [];
    let left = 0;
    let right = 0;

    while (left < prr[0].length && right < prr[1].length) {

        if (prr[0][left] < prr[1][right]) {
            result.push(prr[0][left]);
            left++;
        } else {
            result.push(prr[1][right]);
            right++;
        }
    }

    return result
        .concat(prr[0].slice(left))
        .concat(prr[1].slice(right));
}

function sortSales(prr) {

    if (prr.length <= 1) {
        return prr;
    }

    let mid = Math.floor(prr.length / 2);

    let left = sortSales(prr.slice(0, mid));
    let right = sortSales(prr.slice(mid));

    return mergeSales([left, right]);
}

console.log(sortSales([5000, 2200, 8100, 4300, 6700]));