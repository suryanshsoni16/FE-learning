const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfArray(arr)); // Output: 55 (the sum of the elements in the array)

// time complexity: O(n) - We need to traverse the entire array to calculate the sum.
// space complexity: O(1) - We are using a constant amount of extra space for the sum variable.