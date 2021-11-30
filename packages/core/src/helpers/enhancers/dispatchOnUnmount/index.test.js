import React from 'react'
import { shallow } from 'enzyme'
import { dispatchOnUnmount } from '@project/core/src/helpers'

describe('(Helpers) dispatchOnUnmount', () => {
  const setup = action => {
    const PComponent = () => <p>PComponent</p>
    const enhance = dispatchOnUnmount(action)
    const Component = enhance(PComponent)

    return {
      Component,
    }
  }

  it('Should be componentWillUnmount and dispatch called', () => {
    const action = { a: 1 }
    const { Component } = setup(action)
    const dispatch = jest.fn()

    jest.spyOn(Component.prototype, 'componentWillUnmount')
    const wrapper = shallow(<Component dispatch={dispatch} />)

    wrapper.instance().componentWillUnmount()

    expect(Component.prototype.componentWillUnmount).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(action)
  })

  describe('given a function', () => {
    it('Should be componentWillUnmount and dispatch called', () => {
      const action = jest.fn()
      const { Component } = setup(() => action)
      const dispatch = action => action()

      jest.spyOn(Component.prototype, 'componentWillUnmount')
      const wrapper = shallow(<Component dispatch={dispatch} />)

      wrapper.instance().componentWillUnmount()

      expect(Component.prototype.componentWillUnmount).toHaveBeenCalledTimes(1)
      expect(action).toHaveBeenCalledTimes(1)
    })
  })
})
