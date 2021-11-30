import { createRequestTypes, createPaginatedListDataReducer } from '@project/core/src/helpers'

describe('(Helpers) createPaginatedListDataReducer', () => {
  const requestTypes = createRequestTypes('FOO')
  const reducer = createPaginatedListDataReducer({ requestTypes })
  const initialState = []

  it('Should return reducer with a SUCCEEDED handler', () => {
    expect(reducer[requestTypes.SUCCEEDED]).toBeDefined()
  })

  it('Should return reducer with a REQUESTED handler', () => {
    expect(reducer[requestTypes.REQUESTED]).toBeDefined()
  })

  describe('SUCCEEDED handler', () => {
    const action1 = { payload: { list: [0, 1, 2] } }
    const action2 = { payload: { list: [3, 4, 5] } }
    const action3 = { payload: { list: [0, 0, 0], reset: true } }

    const handler = reducer[requestTypes.SUCCEEDED]

    const state = handler(initialState, action1)
    const state2 = handler(state, action2)
    const state3 = handler(state2, action3)

    it('Should return a new state with payload data', () => {
      expect(state).toEqual(action1.payload.list)
    })

    it('Should return a new concatenated state in the previous state', () => {
      const expected = action1.payload.list.concat(action2.payload.list)
      expect(state2).toEqual(expected)
    })

    it('Should return a new state by ignoring the previous state', () => {
      expect(state3).toEqual(action3.payload.list)
    })
  })

  describe('REQUESTED handler', () => {
    const action1 = { payload: {} }
    const action2 = { payload: { reset: true } }

    const handler = reducer[requestTypes.REQUESTED]

    const state = handler(initialState, action1)
    const state2 = handler(state, action2)

    it('Should return the same state when reset === false', () => {
      expect(state).toEqual(initialState)
    })

    it('Should return empty array when reset === true', () => {
      expect(state2).toEqual([])
    })
  })
})
