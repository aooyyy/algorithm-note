/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function getMidNode(node) {
  let fast = node;
  let slow = node;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function reverseNode(node) {
  let pre = null;
  let cur = node;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
function reorderList(head: ListNode | null): void {
  let midNode = getMidNode(head);
  let list = reverseNode(midNode);
  while (list.next) {
    let curNext = head.next;
    let listNext = list.next;
    head.next = list;
    list.next = curNext;
    list = listNext;
    head = curNext;
  }
}
