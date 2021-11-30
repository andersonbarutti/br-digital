import React from 'react'
import { shallow } from 'enzyme'
import { dispatchOnMount } from '@project/core/src/helpers'

describe('(Helpers) dispatchOnMount', () => {
  const setup = action => {
    const PComponent = () => <p>PComponent</p>
    const enhance = dispatchOnMount(action)
    const Component = enhance(PComponent)

    return {
      Component,
    }
  }

  it('Should be componentDidMount and dispatch called', () => {
    const action = { a: 1 }
    const { Component } = setup(action)
    const dispatch = jest.fn()

    jest.spyOn(Component.prototype, 'componentDidMount')
    const wrapper = shallow(<Component dispatch={dispatch} />)

    wrapper.instance().componentDidMount()

    expect(Component.prototype.componentDidMount).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(action)
  })

  describe('given a function', () => {
    it('Should be componentDidMount and dispatch called', () => {
      const action = jest.fn()
      const { Component } = setup(() => action)
      const dispatch = action => action()

      jest.spyOn(Component.prototype, 'componentDidMount')
      const wrapper = shallow(<Component dispatch={dispatch} />)

      wrapper.instance().componentDidMount()

      expect(Component.prototype.componentDidMount).toHaveBeenCalledTimes(1)
      expect(action).toHaveBeenCalledTimes(1)
    })
  })

  describe('given a string', () => {
    it('Should be componentDidMount and dispatch called', () => {
      const expectedCall = { type: 'ACTION' }
      const { Component } = setup('ACTION')
      const dispatch = jest.fn()

      jest.spyOn(Component.prototype, 'componentDidMount')
      const wrapper = shallow(<Component dispatch={dispatch} />)

      wrapper.instance().componentDidMount()

      expect(Component.prototype.componentDidMount).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(expectedCall)
    })
  })
})
