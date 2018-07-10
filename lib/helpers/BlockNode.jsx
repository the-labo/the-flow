/**
 * Block node
 * @class BlockNode
 */
'use strict'

class BlockNode {
  constructor (id, data = {}) {
    this.id = id
    this.data = data
    this.children = []
    this.parent = null
  }

  /**
   * Find child node by id
   * @TODO speedup
   * @param {string} id
   * @returns {*}
   */
  find (id) {
    for (const child of this.children) {
      if (!child) {
        // TODO
        continue
      }
      const hit = String(child.id) === String(id)
      if (hit) {
        return child
      }
      const hitInChild = child.find(id)
      console.log('hitInChild', hitInChild, id)
      if (hitInChild) {
        return hitInChild
      }
    }
    return null
  }

  insertChild (child, index) {
    if (typeof index === 'undefined') {
      index = this.children.length
    }
    if (this.children[index]) {
      console.warn(`[TheFlow] duplicate index ${index} on node ${this.id}`)
    }
    this.children[index] = child
  }
}

export default BlockNode
