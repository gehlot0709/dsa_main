/***********************
 * ALL LOOPS IN DSA (JS)
 ***********************/

/* 1️⃣ FOR LOOP */
console.log("FOR LOOP:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/* 2️⃣ WHILE LOOP */
console.log("\nWHILE LOOP:");
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

/* 3️⃣ DO-WHILE LOOP */
console.log("\nDO-WHILE LOOP:");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

/* 4️⃣ NESTED LOOP */
console.log("\nNESTED LOOP:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

/* 5️⃣ ARRAY TRAVERSAL */
console.log("\nARRAY TRAVERSAL:");
let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/* 6️⃣ SUM OF ARRAY */
console.log("\nSUM OF ARRAY:");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("Sum:", sum);

/* 7️⃣ FIND MAX ELEMENT */
console.log("\nMAX ELEMENT:");
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Max:", max);

/* 8️⃣ REVERSE A NUMBER */
console.log("\nREVERSE NUMBER:");
let num = 1234;
let rev = 0;

while (num > 0) {
  let digit = num % 10;
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}
console.log("Reverse:", rev);

/* 9️⃣ COUNT DIGITS */
console.log("\nCOUNT DIGITS:");
let number = 56789;
let count = 0;

while (number > 0) {
  count++;
  number = Math.floor(number / 10);
}
console.log("Digits:", count);

/* 🔟 PATTERN PRINTING */
console.log("\nPATTERN:");
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

/* 1️⃣1️⃣ BREAK & CONTINUE */
console.log("\nBREAK & CONTINUE:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop loop
  console.log(i);
}

/* 1️⃣2️⃣ FOR...OF LOOP */
console.log("\nFOR...OF LOOP:");
for (let value of arr) {
  console.log(value);
}

/* 1️⃣3️⃣ FOR...IN LOOP */
console.log("\nFOR...IN LOOP:");
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}

console.log("\nALL LOOPS COMPLETED ✅");
