/**
 * Test for positioner.
 * Runs with mocha.
 */
'use strict'

import positioner from '../lib/helpers/positioner'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('positioner', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <Positioner />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
