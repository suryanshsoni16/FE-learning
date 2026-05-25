const arr = [1, 2, 3, 4, 5];

function findMinElement(inputArr) {
  if (inputArr.length === 0) return null;
  let currentMin = inputArr[0];

  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i] < currentMin) {
      currentMin = inputArr[i];
    }
  }
  return currentMin;
}

console.log(findMinElement(arr));

// Time Complexity: O(n) - We need to traverse the entire array once to find the minimum element.
// Space Complexity: O(1) - We are using a constant amount of space to store the current minimum value.
