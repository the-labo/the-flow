/**
 * Test for blocksAsNode.
 * Runs with mocha.
 */
'use strict'

import blocksAsNode from '../lib/helpers/blocksAsNode'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('blocks-as-node', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    blocksAsNode(
      [
        {id: 1, content: <span>This is a root</span>},
        {id: 2, parent: 1, index: 0, content: <span>This is child 01</span>},
        {id: 3, parent: 2, index: 0, content: <span>This is child01-01</span>},
        {id: 4, parent: 2, index: 1, content: <span>This is child01-02</span>},
      ]
    )
  })
})

/* global describe, before, after, it */
