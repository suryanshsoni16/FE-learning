const arr = [1, 2, 3, 4, 5];

function findMaxElement(inputArr) {
  if (inputArr.length === 0) return null;
  let currentMax = inputArr[0];

  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i] > currentMax) {
      currentMax = inputArr[i];
    }
  }
  return currentMax;
}

console.log(findMaxElement(arr)); 

// Time Complexity: O(n) - We need to traverse the entire array once to find the maximum element.
// Space Complexity: O(1) - We are using a constant amount of space to store the current maximum value.
