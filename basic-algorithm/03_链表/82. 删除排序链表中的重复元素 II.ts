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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(-1, head);
  let cur = dummy;

  while(cur.next && cur.next.next) {
      let val = cur.next.val;
      if(cur.next.next.val === val) {
          while(cur.next && cur.next.val === val) {
              cur.next = cur.next.next;
          }
      }else {
          cur = cur.next;
      }
  }
  return dummy.next;
};