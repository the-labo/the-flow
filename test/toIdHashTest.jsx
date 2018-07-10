/**
 * Test for toIdHash.
 * Runs with mocha.
 */
'use strict'

import toIdHash from '../lib/helpers/toIdHash'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('to-id-hash', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    const hash = toIdHash([{id: 1, value: 2}])
    ok(hash['1'])
  })
})

/* global describe, before, after, it */
