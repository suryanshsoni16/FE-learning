function sayDigits(n) {

    if (n === 0) {
        return;
    }

    const lastDigit = n % 10;
    console.log(lastDigit);
    const smallerProblem = Math.floor(n / 10);
    sayDigits(smallerProblem);

}

sayDigits(1234);