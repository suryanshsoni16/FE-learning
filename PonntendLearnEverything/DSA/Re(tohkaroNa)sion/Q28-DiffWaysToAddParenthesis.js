var diffWaysToCompute = function (expression) {
  let result = [];

  for (let i = 0; i < expression.length; i++) {
    let ch = expression[i];
    if (ch === "+" || ch === "-" || ch === "*") {
      let leftAns = diffWaysToCompute(expression.slice(0, i));
      let rightAns = diffWaysToCompute(expression.slice(i + 1));

      for (let left of leftAns) {
        for (let right of rightAns) {
          if (ch === "+") {
            result.push(left + right);
          } else if (ch === "-") {
            result.push(left - right);
          } else {
            result.push(left * right);
          }
        }
      }
    }
  }
  // BASE CASE
  if (result.length === 0) {
    result.push(Number(expression));
  }

  return result;
};;

console.log(diffWaysToCompute("1-2+5"));
