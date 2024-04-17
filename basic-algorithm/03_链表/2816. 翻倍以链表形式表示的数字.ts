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

function doubleIt(head: ListNode | null): ListNode | null {
  if (head.val > 4) {
    head = new ListNode(0, head);
  }
  let cur = head;
  while (cur) {
    cur.val = (2 * cur.val) % 10;
    if (cur.next && cur.next.val > 4) {
      cur.val += 1;
    }
    cur = cur.next;
  }
  return head;
}

export {};
