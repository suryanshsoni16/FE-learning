const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateImage(mat) {
  const n = mat.length;

  //transpose

  for (let row = 0; row < n; row++) {
    for (let col = row; col < n; col++) {
      let temp = mat[row][col];
      mat[row][col] = mat[col][row];
      mat[col][row] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  return mat;
}


console.log(rotateImage(matrix));