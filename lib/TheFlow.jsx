'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor, newId } from 'the-component-util'
import { get } from 'the-window'
import blocksAsNode from './helpers/blocksAsNode'
import TheFlowStyle from './TheFlowStyle'

const centerOfElm = (elm) => {
  if (!elm) {
    return null
  }
  return {
    x: elm.offsetLeft + (elm.offsetWidth / 2),
    y: elm.offsetTop + (elm.offsetHeight / 2),
  }
}

/**
 * GUI Flow
 */
class TheFlow extends React.Component {
  static BlockNode ({node, parentDOMId, prefix, root = false}) {
    const domID = `${prefix}-${node.id}`
    return (
      <div className={c('the-flow-node', {
        'the-flow-node-root': root,
      })}
           data-parent={parentDOMId ? `#${parentDOMId}` : null}
           id={domID}
      >
        <div className={c('the-fow-node-content', {
          'the-flow-node-root-content': root,
        })}
             id={`${domID}-content`}
        >
          {node.data.content || null}
        </div>
        <div className='the-fow-node-children'>
          {node.children.map((node) => (
            <TheFlow.BlockNode key={node.id}
                               node={node}
                               parentDOMId={domID}
                               prefix={prefix}
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
    this.id = props.id || newId({prefix: 'the-flow'})
  }

  componentDidMount () {
    const window = get('window')
    window.addEventListener('resize', this.resize)
    this.resize()
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
    const ctx = canvasElm.getContext('2d')
    ctx.scale(2, 2)
    ctx.lineWidth = 2
    ctx.strokeStyle = '#333333' // TODO
    const nodes = elm.querySelectorAll('.the-flow-node')
    for (const node of nodes) {
      const parentNode = elm.querySelector(node.dataset.parent)
      if (!parentNode) {
        continue
      }
      const content = node.querySelector(`#${node.id}-content`)
      const parentContent = parentNode.querySelector(`#${parentNode.id}-content`)
      const from = centerOfElm(content)
      const to = centerOfElm(parentContent)
      ctx.moveTo(from.x, from.y)
      ctx.lineTo(to.x, to.y)
      ctx.stroke()
      ctx.closePath()
    }
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
           id={this.id}
           ref={this.elmRef}
      >
        <div className='the-flow-inner'>
          <canvas className='the-flow-canvas'
                  ref={this.canvasElmRef}
          />
          {children}
          <TheFlow.BlockNode node={node}
                             prefix={[this.id, 'node'].join('-')}
                             root
          />
        </div>
      </div>
    )
  }

  resize () {
    this.resizeCanvas()
    this.drawCanvas()
  }

  resizeCanvas () {
    const canvasElm = this.canvasElmRef.current
    if (!canvasElm) {
      return null
    }
    canvasElm.width = canvasElm.offsetWidth * 2
    canvasElm.height = canvasElm.offsetHeight * 2
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
