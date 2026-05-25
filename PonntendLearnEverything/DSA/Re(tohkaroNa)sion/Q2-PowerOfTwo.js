function powerOfTwo(n) {

    if (n === 0) {
        return 1;
    }   
    const smallerProblem = powerOfTwo(n - 1);
    const solution = 2 * smallerProblem;

    return solution;

}

console.log(powerOfTwo(3));