/********************************
 * SIMPLE CALCULATOR IN DSA (JS)
 ********************************/

/* Arithmetic Functions */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero";
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

/* Calculator Function (DSA Style) */
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return modulus(a, b);
    default:
      return "Invalid Operator";
  }
}

/* ===============================
   TESTING CALCULATOR
   =============================== */

let num1 = 20;
let num2 = 10;

console.log("Addition:", calculator(num1, num2, "+"));
console.log("Subtraction:", calculator(num1, num2, "-"));
console.log("Multiplication:", calculator(num1, num2, "*"));
console.log("Division:", calculator(num1, num2, "/"));
console.log("Modulus:", calculator(num1, num2, "%"));

console.log("\nCALCULATOR OPERATIONS COMPLETED ✅");
