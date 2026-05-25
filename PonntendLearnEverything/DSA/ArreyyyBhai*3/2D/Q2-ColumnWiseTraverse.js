const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


function columnWiseTraversal(matrix){
    let rows = matrix.length;
    let cols = matrix[0].length;

    for(let c = 0 ; c < cols; c++){
        let output = "";
        for(let r = 0; r < rows; r++){
            output += matrix[r][c] + " ";
        }
        console.log(output);
    }
}

columnWiseTraversal(matrix);