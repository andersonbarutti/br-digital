import { createRequestTypes, createIsFetchingReducer } from '@project/core/src/helpers'

describe('(Helpers) createIsFetchingReducer', () => {
  const requestTypes = createRequestTypes('FOO')
  const reducer = createIsFetchingReducer({ requestTypes })
  const initialState = false

  it('Should return reducer with a SUCCEEDED handler', () => {
    expect(reducer[requestTypes.REQUESTED]).toBeDefined()
    expect(reducer[requestTypes.SUCCEEDED]).toBeDefined()
    expect(reducer[requestTypes.FAILED]).toBeDefined()
  })

  it('Should return true', () => {
    const handler = reducer[requestTypes.REQUESTED]
    const state = handler(initialState)
    expect(state).toEqual(true)
  })

  it('Should return false', () => {
    const handler = reducer[requestTypes.SUCCEEDED]
    const state = handler(initialState)
    expect(state).toEqual(false)
  })

  it('Should return false', () => {
    const handler = reducer[requestTypes.FAILED]
    const state = handler(initialState)
    expect(state).toEqual(false)
  })
})
