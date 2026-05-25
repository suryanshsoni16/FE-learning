const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];
const target = 3;


var searchMatrix = function (matrix, target) {
    let start = 0;
    let end = matrix.length * matrix[0].length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let row = Math.floor(mid / matrix[0].length);
        let col = mid % matrix[0].length;
        let midValue = matrix[row][col];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
}
