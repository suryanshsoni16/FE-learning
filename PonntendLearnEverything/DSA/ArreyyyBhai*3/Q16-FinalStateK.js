// nput: ((nums = [2, 1, 3, 5, 6]), (k = 5), (multiplier = 2));

// Output: [8, 4, 6, 5, 6];

var getFinalState = function (nums, k, multiplier) {

    while( k > 0){
        let minIndex = 0;

        //find minimum element index
        for(let i = 1; i < nums.length; i++){
            if(nums[i] < nums[minIndex]){
                minIndex = i;
            }
        }

        //multiply the minimum element by multiplier
        nums[minIndex] *= multiplier;

        //decrease k
        k--;        
    }
    return nums;
};

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));333
