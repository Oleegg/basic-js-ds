const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let node = l

  while (node.next) {
    if (node.value == k) {
      if (node.next.value == k) {
        node.value = node.next.next.value
        node.next = node.next.next.next
      } else {
        node.value = node.next.value
        node.next = node.next.next
      }
    }
    if (node.next.value == k && !node.next.next) {
      node.next = null
    } else {
      node = node.next
    }
  }

  return l
}

module.exports = {
  removeKFromList
};
