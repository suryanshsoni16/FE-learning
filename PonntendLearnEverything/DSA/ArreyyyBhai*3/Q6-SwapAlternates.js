const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function swapAlternates(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        // Swap arr[i] and arr[i + 1]
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

console.log(swapAlternates(arr));

// Output: [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]  

// time complexity: O(n) where n is the number of elements in the array. This is because we need to iterate through the array once to swap the elements.
// Space complexity: O(1) because we are swapping the elements in place and not using any additional data structures that grow with the input size.        