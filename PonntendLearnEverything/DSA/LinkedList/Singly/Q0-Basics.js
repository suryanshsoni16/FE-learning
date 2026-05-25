//Implement LinkedList

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node3 = new ListNode(3); //tail node
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const head = node1;

// console.log(head); // 1

function pushFront(head, val) {
  const newNode = new ListNode(val, head);
  newNode.next = head;
  head = newNode;
  return head;
}

const newHead = pushFront(head, 0);
// console.log(newHead); // 0

function printList(head) {
    let current = head;
    while (current !== null){
        console.log(current.val);
        current = current.next;
    }
}
printList(newHead); // 0, 1, 2, 3

function pushBack(head, val) {
    const newNode = new ListNode(val);
    if (head === null) {
        return newNode;
    }
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}

const updatedHead = pushBack(newHead, 4);
printList(updatedHead); // 0, 1, 2, 3, 4


function popFront(head){
    if (head === null) {
        return null;
    }
    const newHead = head.next;
    return newHead;
}

const poppedFrontHead = popFront(updatedHead);
printList(poppedFrontHead); // 1, 2, 3, 4

function popBack(head) {
    if (head === null) {
        return null;
    }
    if (head.next === null) {
        return null;
    }
    let current = head;
    while (current.next.next !== null) {
        current = current.next;
    }
    current.next = null;
    return head;
}

const poppedBackHead = popBack(poppedFrontHead);
printList(poppedBackHead); // 1, 2, 3