'use strict'

import React from 'react'
import { TheFlow, TheFlowStyle } from 'the-flow'

class ExampleComponent extends React.Component {
  render () {
    return (
      <div>
        <TheFlowStyle/>
        <TheFlow blocks={[
          {id: 1, content: <span>This is a root</span>},
          {id: 2, parent: 1, index: 0, content: <span>This is child 01</span>},
          {id: 3, parent: 2, index: 0, content: <span>This is child01-01</span>},
          {id: 4, parent: 2, index: 1, content: <span>This is child01-02</span>},
        ]}>
        </TheFlow>
      </div>

    )
  }
}

export default ExampleComponent
