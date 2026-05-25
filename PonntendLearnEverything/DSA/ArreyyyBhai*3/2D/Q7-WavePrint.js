const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(wavePrint(matrix));  
function wavePrint(mat){
    let result = [];

    for (let col = 0; col < mat[0].length; col++) {
        if (col % 2 === 0) {
            for (let row = 0; row < mat.length; row++) {
                result.push(mat[row][col]);
            }
        } else {
            for (let row = mat.length - 1; row >= 0; row--) {
                result.push(mat[row][col]);
            }
        }
    }

    return result;  

}
