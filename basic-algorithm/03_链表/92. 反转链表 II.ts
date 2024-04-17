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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let dummy = new ListNode(-1, head);
  let p = dummy;
  for (let i = 0; i < left - 1; i++) {
    p = p.next;
  }
  let pre = null;
  let cur = p.next;
  for (let i = 0; i < right - left + 1; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  p.next.next = cur;
  p.next = pre;
  return dummy.next;
}

export {};
