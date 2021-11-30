import React from 'react'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { connectPath, pathToProps } from '@project/core/src/helpers'

describe('(Helpers) connectPath', () => {
  describe('connectPath', () => {
    it('connects path', () => {
      const expected = 'expected'
      const state = { a: { b: expected } }
      const mockStore = configureMockStore()
      const store = mockStore(state)
      const component = () => <div />
      const Component = connectPath('a.b')(component)

      expect(shallow(<Component store={store} />).props().b).toEqual(expected)
    })
  })

  describe('pathToProps', () => {
    describe('given simple path', () => {
      it('returns path contents', () => {
        const expected = { b: 'expected' }
        const results = pathToProps('a.b')({ a: expected })

        expect(results).toEqual(expected)
      })
    })

    describe('given deep path', () => {
      it('returns path contents', () => {
        const expected = { c: 'expected' }
        const results = pathToProps('a.b.c')({ a: { b: expected } })

        expect(results).toEqual(expected)
      })
    })

    describe('given array', () => {
      it('returns path contents', () => {
        const expected = { b: 'expected' }
        const results = pathToProps(['a', 'b'])({ a: expected })

        expect(results).toEqual(expected)
      })
    })
  })
})
