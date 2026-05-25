function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node3 = new ListNode(3); //tail node
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const head = node1;



function popBack(head){
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