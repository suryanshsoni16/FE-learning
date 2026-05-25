/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;

  let current = head;

  while (current) {
    // save next node
    let nextNode = current.next;

    // reverse link
    current.next = prev;

    // move prev
    prev = current;

    // move current
    current = nextNode;
  }

  return prev;
};


var reverseList = function (head) {
  // base case
  if (!head || !head.next) {
    return head;
  }

  let newHead = reverseList(head.next);

  // reverse link
  head.next.next = head;

  // make current tail
  head.next = null;

  return newHead;
};