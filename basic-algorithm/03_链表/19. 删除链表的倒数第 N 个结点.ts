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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(-1, head);
  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i < n; i++) {
      fast = fast.next;
  }

  while (fast && fast.next) {
      fast = fast.next;
      slow = slow.next;
  }
  slow.next = slow?.next?.next || null;
  return dummy.next;
};

export {}