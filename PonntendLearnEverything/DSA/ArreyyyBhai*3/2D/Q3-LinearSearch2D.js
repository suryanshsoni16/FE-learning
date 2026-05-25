const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function linearSearch2D(matrix, target) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === target) {
        return [r, c]; 
      }
    }
  }
  return null; 
}

// Example usage:
const target = 5;
console.log(linearSearch2D(matrix, 5));