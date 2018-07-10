/**
 * Test for BlockNode.
 * Runs with mocha.
 */
'use strict'

import BlockNode from '../lib/helpers/BlockNode'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('block-node', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    ok(new BlockNode('hoge', {}))
  })
})

/* global describe, before, after, it */
