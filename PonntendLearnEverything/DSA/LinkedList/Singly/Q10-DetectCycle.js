//Implement LinkedList

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node6 = new ListNode(6); //tail node
const node5 = new ListNode(5, node6);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node5);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const head = node1;

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
