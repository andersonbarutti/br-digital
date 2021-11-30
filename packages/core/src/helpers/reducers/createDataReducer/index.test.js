import { createRequestTypes, createDataReducer } from '@project/core/src/helpers'

describe('(Helpers) createDataReducer', () => {
  const requestTypes = createRequestTypes('FOO')
  const reducer = createDataReducer({ requestTypes })
  const initialState = []

  it('Should return reducer with a SUCCEEDED handler', () => {
    expect(reducer[requestTypes.SUCCEEDED]).toBeDefined()
  })

  it('Should return a new state with payload data', () => {
    const action = { payload: [0, 1, 2] }
    const handler = reducer[requestTypes.SUCCEEDED]
    const state = handler(initialState, action)

    expect(state).toEqual(action.payload)
  })
})
