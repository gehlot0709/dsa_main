/********************************
 * ALL SORTING (ASSORTMENT) IN DSA
 * JavaScript – Single File
 ********************************/

/* Utility Function */
function print(title, arr) {
  console.log(title, JSON.stringify(arr));
}

/* 1️⃣ BUBBLE SORT */
function bubbleSort(arr) {
  let a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

/* 2️⃣ SELECTION SORT */
function selectionSort(arr) {
  let a = [...arr];
  for (let i = 0; i < a.length; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) min = j;
    }
    [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}

/* 3️⃣ INSERTION SORT */
function insertionSort(arr) {
  let a = [...arr];
  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
}

/* 4️⃣ MERGE SORT */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

/* 5️⃣ QUICK SORT */
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/* 6️⃣ COUNTING SORT (For small positive integers) */
function countingSort(arr) {
  let max = Math.max(...arr);
  let count = new Array(max + 1).fill(0);

  for (let num of arr) count[num]++;

  let result = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i]-- > 0) result.push(i);
  }
  return result;
}

/* 7️⃣ BUILT-IN SORT (NOT FOR INTERVIEWS) */
function builtInSort(arr) {
  return [...arr].sort((a, b) => a - b);
}

/* ===============================
   TESTING ALL SORTING METHODS
   =============================== */

let data = [64, 25, 12, 22, 11];

console.log("Original Array:", data);

print("Bubble Sort:", bubbleSort(data));
print("Selection Sort:", selectionSort(data));
print("Insertion Sort:", insertionSort(data));
print("Merge Sort:", mergeSort(data));
print("Quick Sort:", quickSort(data));
print("Counting Sort:", countingSort(data));
print("Built-in Sort:", builtInSort(data));

console.log("\nALL SORTING ALGORITHMS EXECUTED ✅");
