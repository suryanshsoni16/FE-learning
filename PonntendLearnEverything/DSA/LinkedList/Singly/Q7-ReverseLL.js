//Implement LinkedList

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node3 = new ListNode(3); //tail node
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const head = node1;



function reverseLL(head){
    let prev = null 
    let current = head;
    while (current !== null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

console.log(reverseLL(head));