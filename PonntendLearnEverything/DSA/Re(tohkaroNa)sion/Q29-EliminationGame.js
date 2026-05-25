// //normal approach

// var lastRemaining = function (n) {
//   let head = 1;
//   let step = 1;
//   let left = true;

//   while (n > 1) {
//     // move head
//     if (left || n % 2 === 1) {
//       //if left is true and counr is odd
//       head = head + step;
//       console.log(head);
//     }

//     // half numbers remain
//     n = Math.floor(n / 2);
//     // step doubles
//     step = step * 2;
//     // change direction
//     left = !left;
//   }
//   return head;
// };

// console.log(lastRemaining(10));

//via recurssion

var lastRemaining = function (n) {
  function solve(step, left, number, head) {
    if (number === 1) return head;

    return solve(
      step * 2,
      !left,
      Math.floor(number / 2),
      left || number % 2 == 1 ? (head += step) : head,
    );
  }
  return solve(1, true, n, 1);
};
console.log(lastRemaining(10));
