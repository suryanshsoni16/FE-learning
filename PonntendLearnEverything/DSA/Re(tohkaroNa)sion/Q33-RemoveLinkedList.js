/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // base case
  if (!head) {
    return null;
  }

  // solve remaining list
  head.next = removeElements(head.next, val);

  // remove current node
  if (head.val === val) {
    return head.next;
  }

  return head;
};

// var removeElements = function(head, val) {

//     // remove from starting
//     while (head && head.val === val) {
//         head = head.next;
//     }

//     let current = head;

//     while (current && current.next) {

//         // remove node
//         if (current.next.val === val) {

//             current.next = current.next.next;
//         }

//         // move forward
//         else {

//             current = current.next;
//         }
//     }

//     return head;
// };
