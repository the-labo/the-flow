'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { asStyleData } from 'the-component-util'
import { TheStyle } from 'the-style'

/** Style for TheFlow */
const TheFlowStyle = ({className, id, options}) => (
  <TheStyle {...{id}}
            className={c('the-flow-style', className)}
            styles={TheFlowStyle.data(options)}
  />
)

TheFlowStyle.displayName = 'TheFlowStyle'
TheFlowStyle.propTypes = {
  /** Style options */
  options: PropTypes.object,
}

TheFlowStyle.defaultProps = {
  options: {},
}

TheFlowStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor,
  } = options
  return asStyleData('.the-flow', {
    '.the-flow-canvas': {
      bottom: 0,
      height: '100%',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100%',
    },
    '.the-flow-inner': {
      height: 'fit-content',
      margin: '0 auto',
      position: 'relative',
      width: 'fit-content',
    },
    '.the-flow-node': {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    '.the-flow-node-root': {
      '.the-flow-node-root-content': {
        background: 'transparent',
        border: 'none',
        visibility: 'hidden',
      },
    },
    '.the-fow-node-children': {
      alignItems: 'center',
      display: 'flex',
    },
    '.the-fow-node-content': {
      background: 'white',
      border: '1px solid #CCC',
      borderRadius: '4px',
      display: 'block',
      fontSize: 'smaller',
      margin: '8px',
      padding: '4px 8px',
    },
    '&': {
      height: '100%',
      overflow: 'auto',
      width: '100%',
    },
  })
}

export default TheFlowStyle
