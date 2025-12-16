

/********************************************
 * MEMORY CALCULATION (SPACE COMPLEXITY) – DSA
 * JavaScript | All-in-One File
 ********************************************/

/* 1️⃣ CONSTANT SPACE – O(1) */
function constantSpace(a, b) {
  let sum = a + b;
  let diff = a - b;
  return sum + diff;
}
console.log("O(1):", constantSpace(10, 5));

/* 2️⃣ LINEAR SPACE – O(n) */
function linearSpace(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}
console.log("O(n):", linearSpace(5));

/* 3️⃣ QUADRATIC SPACE – O(n²) */
function quadraticSpace(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}
console.log("O(n²):", quadraticSpace(3));

/* 4️⃣ LOGARITHMIC SPACE – O(log n) */
function logSpace(n) {
  if (n <= 1) return 1;
  return logSpace(Math.floor(n / 2));
}
console.log("O(log n):", logSpace(16));

/* 5️⃣ RECURSION LINEAR SPACE – O(n) */
function recursionSpace(n) {
  if (n === 0) return;
  recursionSpace(n - 1);
}
recursionSpace(5);
console.log("Recursion O(n) executed");

/* 6️⃣ ARRAY TRAVERSAL – O(1) AUX SPACE */
function arrayTraversal(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log("Array traversal:", arrayTraversal([1,2,3,4]));

/* 7️⃣ STACK MEMORY (Manual Simulation) */
function stackExample() {
  let a = 10;
  let b = 20;
  let c = a + b;
  return c;
}
console.log("Stack memory example:", stackExample());

/* 8️⃣ HEAP MEMORY */
function heapExample() {
  let obj = { name: "DSA", year: 2025 };
  return obj;
}
console.log("Heap memory example:", heapExample());

/* 9️⃣ SPACE OPTIMIZED VS NON-OPTIMIZED */
function nonOptimized(n) {
  let arr = new Array(n).fill(0);
  return arr.length;
}

function optimized(n) {
  let count = 0;
  for (let i = 0; i < n; i++) count++;
  return count;
}

console.log("Non-Optimized O(n):", nonOptimized(5));
console.log("Optimized O(1):", optimized(5));

/* 🔟 INPUT SPACE VS AUXILIARY SPACE */
function inputVsAux(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log("Aux Space O(1):", inputVsAux([2,5,1,9,3]));

console.log("\nALL MEMORY CALCULATION EXAMPLES EXECUTED ✅");
