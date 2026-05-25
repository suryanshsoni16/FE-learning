//Implement LinkedList

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node3 = new ListNode(3); //tail node
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const head = node1;

var mergeTwoLists = function (list1, list2) {
  // if one list ends
  if (!list1) return list2;
  if (!list2) return list1;

  // choose smaller node
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
};
