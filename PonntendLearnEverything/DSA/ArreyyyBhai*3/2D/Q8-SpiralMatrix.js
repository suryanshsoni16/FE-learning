
var spiralOrder = function (matrix) {
  let result = [];

  let top = 0;
  let bottom = matrix.length - 1;

  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // LEFT -> RIGHT
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }

    top++;

    // TOP -> BOTTOM
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }

    right--;

    // RIGHT -> LEFT
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }

      bottom--;
    }

    // BOTTOM -> TOP
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }

      left++;
    }
  }

  return result;
};
