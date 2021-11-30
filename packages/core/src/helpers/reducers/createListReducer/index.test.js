import { createRequestTypes, createListReducer } from '@project/core/src/helpers'

describe('(Helpers) createListReducer', () => {
  const LOAD = createRequestTypes('LOAD')
  const UNLOAD = createRequestTypes('UNLOAD')

  const config = { loadAction: LOAD, unloadAction: UNLOAD }
  const reducer = createListReducer(config)

  it('Should return a combined reducer with list and isFetching defined', () => {
    const state = reducer({}, {})
    const expected = { list: [], isFetching: false }

    expect(state).toEqual(expected)
  })
})
