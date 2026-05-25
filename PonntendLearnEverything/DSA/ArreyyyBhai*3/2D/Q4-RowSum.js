const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


function rowSum(matrix){

    for (let r = 0 ; r < matrix.length; r++){
        let sum = 0;
        for (let j = 0 ; j < matrix[r].length; j++){
            sum += matrix[r][j];
        }
        console.log(`Sum of row ${r} is ${sum}`);
    }
}

rowSum(matrix)