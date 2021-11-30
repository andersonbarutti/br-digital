import React from 'react'
import { mount } from 'enzyme'
import { toClass } from 'recompose'

import { withAs } from './'

describe('(Behaviors) withAs', () => {
  const Component = () => <span />
  const ComponentClass = toClass(Component)
  const HOC = withAs(ComponentClass)

  it('should define prop Component as passed as "as"', () => {
    const wrapper = mount(<HOC as='foo' />)
    expect(wrapper.find(ComponentClass).props()).toHaveProperty('Component', 'foo')
  })

  it('should define prop Component as "div" with no custom prop is passed', () => {
    const wrapper = mount(<HOC />)
    expect(wrapper.find(ComponentClass).props()).toHaveProperty('Component', 'div')
  })
})
