import React from 'react'
import { mount } from 'enzyme'
import { dispatchOnNewPage } from '@project/core/src/helpers'

describe('(Helpers) dispatchOnNewPage', () => {
  const setup = actionCreator => {
    const PComponent = () => <p>PComponent</p>
    const enhance = dispatchOnNewPage(actionCreator)
    return enhance(PComponent)
  }

  it('dispatches action with props', () => {
    const actionCreator = ({ payload }) => ({ payload })
    const Component = setup(actionCreator)
    const dispatch = jest.fn()
    const props = { payload: 1 }

    const wrapper = mount(<Component dispatch={dispatch} {...props} />)

    wrapper.instance().handlers.handleNewPage()

    expect(dispatch).toBeCalled()
    expect(dispatch).toHaveBeenCalledWith({ payload: 1 })
  })
})
