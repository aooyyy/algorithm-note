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

function middleNode(head: ListNode | null): ListNode | null {
  let cur = head;
  let cur2 = head;
  while (cur && cur.next) {
    cur = cur.next.next;
    cur2 = cur2.next;
  }
  return cur2;
}

export {};
