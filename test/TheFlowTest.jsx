/**
 * Test for TheFlow.
 * Runs with mocha.
 */
'use strict'

import TheFlow from '../lib/TheFlow'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-flow', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheFlow />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
