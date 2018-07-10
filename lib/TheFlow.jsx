'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import { get } from 'the-window'
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

  constructor (props) {
    super(props)
    this.elmRef = React.createRef()
    this.canvasElmRef = React.createRef()
    this.resize = this.resize.bind(this)
  }

  componentDidMount () {
    const window = get('window')
    window.addEventListener('resize', this.resize)
  }

  componentDidUpdate () {
    this.drawCanvas()
  }

  componentWillUnmount () {
    const window = get('window')
    window.removeEventListener('resize', this.resize)
  }

  drawCanvas () {
    const elm = this.elmRef.current
    if (!elm) {
      return null
    }
    const canvasElm = this.canvasElmRef.current
    if (!canvasElm) {
      return null
    }
    const contents = elm.querySelectorAll('.the-fow-node-content')
    console.log('contents', contents)
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
           ref={this.elmRef}
      >
        <div className='the-flow-inner'>
          <canvas className='the-flow-canvas'
                  height='200%'
                  ref={this.canvasElmRef}
                  width='200%'
          />
          {children}
          <TheFlow.BlockNode node={node} root/>
        </div>
      </div>
    )
  }

  resize () {
    this.drawCanvas()
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
