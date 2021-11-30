import React from 'react'
import { shallow } from 'enzyme'
import { withPropOrState } from '@project/core/src/helpers'

describe('(Helpers) withPropOrState', () => {
  it('overrides state with prop', () => {
    const enhance = withPropOrState('prop', 'setProp', ({ prop }) => `${prop}1`)
    const Component = enhance(props => <p>{props.prop}</p>)
    const wrapper = shallow(<Component />)

    expect(wrapper.html()).toBe('<p>undefined1</p>')

    wrapper.setProps({ prop: 'foo' })
    expect(wrapper.html()).toBe('<p>foo1</p>')
  })
})
