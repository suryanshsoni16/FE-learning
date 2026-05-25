function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node3 = new ListNode(3); //tail node
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const head = node1;

function insertAtIndex(head, index, val) {
  const newNode = new ListNode(val);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }
  let current = head;
  let currentIndex = 0;
  while (current !== null && currentIndex < index - 1) {
    current = current.next;
    currentIndex++;
  }
  if (current === null) {
    return head; // Index is out of bounds
  }
  newNode.next = current.next;
  current.next = newNode;
  return head;
}

console.log(insertAtIndex(head, 1, 10)); // 1, 10, 2, 3
console.log(insertAtIndex(head, 0, 0)); // 0, 1, 10, 2, 3
console.log(insertAtIndex(head, 5, 20)); // 0, 1, 10, 2, 3 (index out of bounds)
