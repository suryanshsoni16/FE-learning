const arr = [24,454,65,65,2,24,253,53];

function linearSearch(arr , target){
    for (let i = 0 ;i <arr.length ; i ++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 65)); // Output: 2 (the index of the first occurrence of 65)
console.log(linearSearch(arr, 100)); // Output: -1 (100 is not in the array)

// time complexeity: O(n) - In the worst case, we may have to traverse the entire array to find the target or determine that it is not present.
// space complexity: O(1) - We are using a constant amount of extra space for the index variable and the target variable.  