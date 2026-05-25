// Implement Doubly Linked List (DLL)

function ListNode(val, prev, next) {
  this.val = val === undefined ? 0 : val;
  this.prev = prev === undefined ? null : prev;
  this.next = next === undefined ? null : next;
}

// Create nodes manually
const node3 = new ListNode(3); // tail node
const node2 = new ListNode(2, null, node3);
node3.prev = node2;

const node1 = new ListNode(1, null, node2);
node2.prev = node1;

const head = node1;

// console.log(head);

// PRINT LIST (Forward)
// 1 -> 2 -> 3
function printList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

printList(head);

// PUSH FRONT
// Add node at beginning
function pushFront(head, val) {
  const newNode = new ListNode(val);

  newNode.next = head;

  if (head !== null) {
    head.prev = newNode;
  }

  head = newNode;

  return head;
}

const newHead = pushFront(head, 0);
printList(newHead);
// 0 1 2 3

// PUSH BACK
// Add node at end
function pushBack(head, val) {
  const newNode = new ListNode(val);

  // empty list
  if (head === null) {
    return newNode;
  }

  let current = head;

  while (current.next !== null) {
    current = current.next;
  }

  // connect both directions
  current.next = newNode;
  newNode.prev = current;

  return head;
}

const updatedHead = pushBack(newHead, 4);
printList(updatedHead);
// 0 1 2 3 4

// POP FRONT
// Remove first node
function popFront(head) {
  if (head === null) {
    return null;
  }

  const newHead = head.next;

  // remove backward connection
  if (newHead !== null) {
    newHead.prev = null;
  }

  return newHead;
}

const poppedFrontHead = popFront(updatedHead);
printList(poppedFrontHead);
// 1 2 3 4

// POP BACK
// Remove last node
function popBack(head) {
  if (head === null) {
    return null;
  }

  // only one node
  if (head.next === null) {
    return null;
  }

  let current = head;

  while (current.next !== null) {
    current = current.next;
  }

  // disconnect last node
  current.prev.next = null;

  return head;
}

const poppedBackHead = popBack(poppedFrontHead);
printList(poppedBackHead);
// 1 2 3
