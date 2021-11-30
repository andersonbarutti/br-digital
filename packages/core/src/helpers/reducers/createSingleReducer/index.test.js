import { createRequestTypes, createSingleReducer } from '@project/core/src/helpers'

describe('(Helpers) createSingleReducer', () => {
  const LOAD = createRequestTypes('LOAD')
  const UNLOAD = createRequestTypes('UNLOAD')

  const config = { loadAction: LOAD, unloadAction: UNLOAD }
  const reducer = createSingleReducer(config)

  it('Should return a combined reducer with data and isFetching defined', () => {
    const state = reducer({}, {})
    const expected = { data: {}, isFetching: false }

    expect(state).toEqual(expected)
  })
})
