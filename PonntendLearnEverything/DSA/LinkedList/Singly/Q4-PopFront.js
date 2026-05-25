function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node3 = new ListNode(3); //tail node
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const head = node1;



function popFront(head){
    if (head === null) {
        return null;
    }
    const newHead = head.next;
    return newHead;
}

const poppedFrontHead = popFront(head);
console.log(poppedFrontHead); // 2



