import { createUnloadReducer } from '@project/core/src/helpers'

describe('(Helpers) createUnloadReducer', () => {
  const action = 'FOO'
  const initialState = 0

  it('Should return a reducer with clearState handler', () => {
    const currentState = 1
    const reducer = createUnloadReducer({ action, initialState })
    const handler = reducer[action]
    const clearState = handler(currentState, { type: action })

    expect(clearState).toEqual(initialState)
  })
})
