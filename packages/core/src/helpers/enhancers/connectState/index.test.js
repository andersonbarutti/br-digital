import React from 'react'
import mockStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import { connectState } from '@project/core/src/helpers'

describe('(Helpers) connectState', () => {
  it('Should return a component with state props', () => {
    const expected = 'expected'
    const selector = 'foo'
    const state = { [selector]: { b: expected, c: expected } }

    const store = mockStore()(state)
    const component = () => <div />
    const Component = connectState(selector)(component)
    const wrapper = shallow(<Component store={store} />)

    expect(wrapper.props().b).toEqual(expected)
    expect(wrapper.props().c).toEqual(expected)
  })
})
