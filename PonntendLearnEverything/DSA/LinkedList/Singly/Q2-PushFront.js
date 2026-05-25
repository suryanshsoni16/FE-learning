function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node3 = new ListNode(3); //tail node
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = node1;



function pushFront(head, val) {
    const newNode = new ListNode(val, head);
    newNode.next = head;
    head = newNode;
    return head;
}

const newHead = pushFront(head, 0);
console.log(newHead); // 0