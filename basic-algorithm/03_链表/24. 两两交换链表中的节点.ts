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

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(-1, head);
  let p0 = dummy;
  let pre = null;
  let cur = p0.next;

  while(cur && cur.next) {
      for(let i= 0; i < 2; i++) {
          let next = cur.next;
          cur.next = pre;
          pre = cur;
          cur = next;
      }
      let next = p0.next;
      p0.next.next = cur;
      p0.next = pre;
      p0 = next;
  }
  return dummy.next;
};

export {}