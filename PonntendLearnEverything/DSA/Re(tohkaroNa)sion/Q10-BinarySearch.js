const input= [2, 3, 6, 77, 88, 90];

function binarySearch(arr,target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;

    const mid = Math.floor((start + end) / 2);
     if(arr[mid] === target){
        return mid;
     } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
     } else {
        return binarySearch(arr, target, mid + 1, end);
     }
}

console.log(binarySearch(input, 77));