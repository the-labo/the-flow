'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import blocksAsNode from './helpers/blocksAsNode'
import TheFlowStyle from './TheFlowStyle'

/**
 * GUI Flow
 */
class TheFlow extends React.Component {
  static BlockNode ({node, root = false}) {
    return (
      <div className={c('the-flow-node', {
        'the-flow-node-root': root,
      })}>
        <div className={c('the-fow-node-content', {
          'the-flow-node-root-content': root,
        })}>
          {node.data.content || null}
        </div>
        <div className='the-fow-node-children'>
          {node.children.map((node) => (
            <TheFlow.BlockNode key={node.id}
                               node={node}
            />
          ))}
        </div>
      </div>
    )
  }

  render () {
    const {props} = this
    const {
      blocks,
      children,
      className,
    } = props

    const node = blocksAsNode(blocks)
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-flow', className)}
      >
        <div className='the-flow-inner'>
          {children}
          <TheFlow.BlockNode node={node} root/>
        </div>
      </div>
    )
  }
}

TheFlow.Style = TheFlowStyle

TheFlow.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.object,
  ),
}

TheFlow.defaultProps = {
  blocks: [],
}

TheFlow.displayName = 'TheFlow'

export default TheFlow
