/**
 * Normalize block structure
 * @function blocksAsNode
 * @returns {BlockNode} - Abstract tree
 */
'use strict'

import BlockNode from './BlockNode'
import toIdHash from './toIdHash'

/** @lends blocksAsNode */
function blocksAsNode (blocksArray) {
  const hash = toIdHash(blocksArray)
  const doneHash = {}
  const result = new BlockNode('root')
  const apply = (block) => {
    const {content, id, index, parent: parentId} = block
    if (doneHash[id]) {
      return
    }
    if (parentId) {
      const parentBlock = hash[parentId]
      if (!hash[parentId]) {
        throw new Error(`[TheFlow] Unknown parent: ${parentId}`)
      }
      if (!doneHash[parentId]) {
        apply(parentBlock)
      }
    }

    const parentNode = parentId ? result.find(parentId) : result
    if (!parentNode) {
      console.warn(`[TheFlow] Unknown parent "${parentId}" for "${id}"`)
      return
    }
    const node = new BlockNode(id, {
      content,
    })
    parentNode.insertChild(node, index)

    doneHash[id] = true
  }
  for (const [id, block] of Object.entries(hash)) {
    apply(block)
  }
  return result
}

export default blocksAsNode
