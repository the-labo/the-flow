'use strict'

function toIdHash (array) {
  const hash = {}
  for (const values of array) {
    const {id} = values
    if (!id) {
      throw new Error(`[TheFlow] id is missing: ${JSON.stringify(values)}`)
    }
    if (values[id]) {
      throw new Error(`[TheFlow] duplicate id: ${id}`)
    }
    hash[id] = values
  }
  return hash
}

export default toIdHash
