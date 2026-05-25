
const arr = [1,2,3,4,5];

function reserveArray(arr){
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}

reserveArray(arr);
console.log(arr); // Output: [5, 4, 3, 2, 1]

// time complexity: O(n) - We need to traverse half of the array to reverse it.
// space complexity: O(1) - We are using a constant amount of extra space for the left, right, and temp variables.