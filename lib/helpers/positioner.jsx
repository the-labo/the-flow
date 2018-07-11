/**
 * Position calc
 */
'use strict'

const positioner = {
  bottomCenterOfElm: (elm) => {
    return positioner.ofElm(elm, 0.5, 1)
  },
  centerOfElm: (elm) => {
    return positioner.ofElm(elm, 0.5, 0.5)
  },
  ofElm: (elm, xRate, yRate) => {
    if (!elm) {
      return null
    }
    return {
      x: elm.offsetLeft + (elm.offsetWidth * xRate),
      y: elm.offsetTop + (elm.offsetHeight * yRate),
    }
  },
  topCenterOfElm: (elm) => {
    return positioner.ofElm(elm, 0.5, 0)
  },
}

export default positioner
