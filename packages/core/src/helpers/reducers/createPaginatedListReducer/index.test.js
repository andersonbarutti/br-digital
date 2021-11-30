import { createRequestTypes, createPaginatedListReducer } from '@project/core/src/helpers'

describe('(Helpers) createPaginatedListReducer', () => {
  const LOAD = createRequestTypes('LOAD')
  const UNLOAD = createRequestTypes('UNLOAD')

  const config = { loadAction: LOAD, unloadAction: UNLOAD }
  const reducer = createPaginatedListReducer(config)

  it('Should return a combined reducer', () => {
    const state = reducer({}, {})
    const expected = { list: [], isFetching: false, currentPage: 0, total: 0 }

    expect(state).toEqual(expected)
  })
})
