import { createReducer } from '@project/core/src/helpers'

describe('(Helpers) createReducer', () => {
  const type = 'INCREMENT'
  const initialState = 0

  it('Should be a reducer with custom handlers', () => {
    const handlers = { [type]: state => state + 1 }
    const reducer = createReducer(initialState, handlers)
    const state = reducer(initialState, { type })

    expect(state).toBe(initialState + 1)
  })

  it('works with non function handlers', () => {
    const handlers = { [type]: 2 }
    const reducer = createReducer(initialState, handlers)
    const state = reducer(initialState, { type })

    expect(state).toBe(2)
  })
})
