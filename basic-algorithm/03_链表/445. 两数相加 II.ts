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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const reverseNode = (node: ListNode | null)  => {
      if (!node || !node.next) return node;
      const newNode = reverseNode(node.next);
      node.next.next = node;
      node.next = null;
      return newNode;
  }

  let newL1 = reverseNode(l1);
  let newL2 = reverseNode(l2);
  let dummy = new ListNode(0);
  let node = dummy;
  let rest = 0;
  while (newL1 || newL2 || rest) {
      rest = (newL1?.val || 0) + (newL2?.val || 0) + rest;
      node.next = new ListNode(rest % 10);
      node = node.next;
      rest = Math.floor(rest / 10);
      newL1 = newL1?.next;
      newL2 = newL2?.next;
  }

  return reverseNode(dummy.next);

};

export {};