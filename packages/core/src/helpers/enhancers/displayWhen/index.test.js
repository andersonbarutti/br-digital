import React from 'react'
import { shallow } from 'enzyme'
import { displayWhen } from '@project/core/src/helpers'

describe('(Helpers) displayWhen', () => {
  const setup = condition => {
    const PComponent = () => <p>PComponent</p>
    const branch = displayWhen(condition)
    const Component = branch(PComponent)
    const wrapper = shallow(<Component />)

    return {
      wrapper,
    }
  }

  it('Should be return a pComponent when condition is true', () => {
    const { wrapper } = setup(() => true)
    expect(wrapper.text()).toBe('PComponent')
  })

  it('Should be return empty div when condition is false', () => {
    const { wrapper } = setup(() => false)
    expect(wrapper.matchesElement(<div />)).toEqual(true)
  })
})
