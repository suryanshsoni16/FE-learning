// Input: ((s = "LeetcodeHelpsMeLearn"), (spaces = [8, 13, 15]));
// Output: "Leetcode Helps Me Learn";


var addSpaces = function (s, spaces) {
    let result =[];
    let currSpaceIndex = 0;

    for (let i = 0 ; i< s.length; i ++){
        if (spaces[currSpaceIndex] === i){
            result.push(" ");
            currSpaceIndex++;
        }

        result.push(s[i]);
    }

    return result.join("");
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));