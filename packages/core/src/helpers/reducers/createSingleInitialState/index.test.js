import { createSingleInitialState } from '@project/core/src/helpers'

describe('(Helpers) createListInitialState', () => {
  it('Should return an object with fetching props and foo resource', () => {
    const resource = 'foo'
    const initialState = createSingleInitialState({ resource })

    expect(initialState.isFetching).toBeDefined()
    expect(initialState.isFetching).toEqual(false)
    expect(initialState[resource]).toBeDefined()
    expect(initialState[resource]).toEqual({})
  })
})
