// ===============================
// 2D ARRAYS BASICS IN JAVASCRIPT
// ===============================

// -------------------------------
// 1. Creating a 2D Array
// -------------------------------

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr);

// -------------------------------
// 2. Accessing Elements
// arr[row][col]
// -------------------------------

console.log(arr[0][0]); // 1
console.log(arr[1][2]); // 6
console.log(arr[2][1]); // 8

// -------------------------------
// 3. Rows and Columns
// -------------------------------

let rows = arr.length;
let cols = arr[0].length;

console.log("Rows:", rows);
console.log("Cols:", cols);

// -------------------------------
// 4. Traversing Entire Matrix
// -------------------------------

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    console.log(arr[i][j]);
  }
}

// -------------------------------
// 5. Row-wise Traversal
// -------------------------------

console.log("Row Wise Traversal");

for (let i = 0; i < rows; i++) {
  let output = "";

  for (let j = 0; j < cols; j++) {
    output += arr[i][j] + " ";
  }

  console.log(output);
}

// -------------------------------
// 6. Column-wise Traversal
// -------------------------------

console.log("Column Wise Traversal");

for (let col = 0; col < cols; col++) {
  let output = "";

  for (let row = 0; row < rows; row++) {
    output += arr[row][col] + " ";
  }

  console.log(output);
}

// -------------------------------
// 7. Creating Empty 2D Array
// -------------------------------

let r = 3;
let c = 4;

let emptyArr = Array.from({ length: r }, () => Array(c).fill(0));

console.log(emptyArr);

// -------------------------------
// 8. Manual Input
// -------------------------------

let inputArr = [];

inputArr.push([10, 20, 30]);
inputArr.push([40, 50, 60]);

console.log(inputArr);

// -------------------------------
// 9. Updating Values
// -------------------------------

inputArr[0][1] = 999;

console.log(inputArr);

// -------------------------------
// 10. Sum of All Elements
// -------------------------------

let totalSum = 0;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    totalSum += arr[i][j];
  }
}

console.log("Total Sum:", totalSum);

// -------------------------------
// 11. Largest Element
// -------------------------------

let max = arr[0][0];

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
    }
  }
}

console.log("Largest Element:", max);

// -------------------------------
// 12. Linear Search in 2D Array
// -------------------------------

let target = 5;
let found = false;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (arr[i][j] === target) {
      found = true;
    }
  }
}

console.log("Target Found:", found);

// -------------------------------
// 13. Count Even Numbers
// -------------------------------

let evenCount = 0;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (arr[i][j] % 2 === 0) {
      evenCount++;
    }
  }
}

console.log("Even Count:", evenCount);

// -------------------------------
// 14. Main Diagonal
// -------------------------------

console.log("Main Diagonal");

for (let i = 0; i < rows; i++) {
  console.log(arr[i][i]);
}

// -------------------------------
// 15. Secondary Diagonal
// -------------------------------

console.log("Secondary Diagonal");

for (let i = 0; i < rows; i++) {
  console.log(arr[i][cols - i - 1]);
}

// -------------------------------
// CORE TEMPLATE
// -------------------------------

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    // work on arr[i][j]
  }
}
