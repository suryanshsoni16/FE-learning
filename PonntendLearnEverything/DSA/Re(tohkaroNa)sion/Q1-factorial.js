
function factorial(n) { 

    if (n === 0) {
        return 1;
    }

    const smallerProblem = factorial(n - 1);
    // console.log(`smallerProblem for n=${n} is ${smallerProblem}`);
    const solution = n * smallerProblem;

    return solution;    
}

console.log(factorial(5)); // 120