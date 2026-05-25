function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node3 = new ListNode(3); //tail node
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = node1;



function pushBack(head,val){
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