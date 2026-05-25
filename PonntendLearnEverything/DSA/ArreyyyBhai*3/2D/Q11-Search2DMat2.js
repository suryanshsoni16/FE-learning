function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false;
  }

  let rows = matrix.length;
  let cols = matrix[0].length;

  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    let current = matrix[row][col];

    if (current === target) {
      return true;
    }

    if (current > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}
