const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

columnSum(matrix);

function columnSum(matrix){

  for(let c = 0 ; c < matrix[0].length; c++){
    let sum = 0;
    for(let r = 0; r < matrix.length; r++){
      sum += matrix[r][c];
    }
    console.log(sum);
  }
}