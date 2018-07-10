/**
 * Test for TheFlowStyle.
 * Runs with mocha.
 */
'use strict'

import TheFlowStyle from '../lib/TheFlowStyle'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-flow-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheFlowStyle />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
