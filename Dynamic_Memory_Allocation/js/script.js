/********************************************
 * DYNAMIC MEMORY ALLOCATION – DSA (JS)
 ********************************************/

/* 1️⃣ Dynamic Array Allocation */
let arr = [];   // memory allocated dynamically

arr.push(10);
arr.push(20);
arr.push(30);

console.log("Dynamic Array:", arr);

/* 2️⃣ Dynamic Object Allocation */
let student = {
  name: "Rahul",
  age: 21
};

student.course = "DSA"; // memory expands dynamically
console.log("Dynamic Object:", student);

/* 3️⃣ Resize Memory (Reallocation Concept) */
let numbers = [1, 2, 3];
numbers.push(4);   // memory increases
numbers.pop();     // memory decreases

console.log("Resized Array:", numbers);

/* 4️⃣ Dynamic 2D Array (Matrix) */
let matrix = [];
let rows = 3, cols = 3;

for (let i = 0; i < rows; i++) {
  matrix[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = 0;
  }
}

console.log("Dynamic Matrix:", matrix);

/* 5️⃣ Function Memory (Heap Allocation) */
function createUser(name) {
  return { username: name };
}

let user1 = createUser("Admin");
console.log("Heap Object:", user1);

/* 6️⃣ Memory Deallocation (Garbage Collection) */
let temp = { data: 100 };
temp = null; // eligible for garbage collection

console.log("Memory deallocated (GC handled)");

console.log("\nDYNAMIC MEMORY ALLOCATION EXECUTED ✅");
