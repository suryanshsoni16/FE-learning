

function rowWiseTraverse(matrix) {

    for (let r = 0; r < matrix.length; r++) {
        let output = "";
        for (let c = 0; c < matrix[r].length; c++) {
            output += matrix[r][c] + " ";
        }
        console.log(output);
    }
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rowWiseTraverse(matrix); // Output: 1 2 3 4 5 6 7 8 9