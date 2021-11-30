import { createRequestTypes, createParamReducer } from '@project/core/src/helpers'

describe('(Helpers) createParamReducer', () => {
  const param = 'bar'
  const requestTypes = createRequestTypes('FOO')
  const reducer = createParamReducer(param, { requestTypes })
  const initialState = 0

  it('Should return reducer with a SUCCEEDED handler', () => {
    expect(reducer[requestTypes.SUCCEEDED]).toBeDefined()
  })

  it('Should return a new state with a custom param in payload', () => {
    const action = { payload: { [param]: 10 } }
    const handler = reducer[requestTypes.SUCCEEDED]
    const state = handler(initialState, action)
    expect(state).toEqual(action.payload[param])
  })
})
