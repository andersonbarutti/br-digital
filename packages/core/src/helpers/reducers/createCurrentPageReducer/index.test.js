import { createRequestTypes, createCurrentPageReducer } from '@project/core/src/helpers'

describe('(Helpers) createCurrentPageReducer', () => {
  const requestTypes = createRequestTypes('FOO')
  const reducer = createCurrentPageReducer({ requestTypes })

  it('Should return reducer with a SUCCEEDED handler', () => {
    expect(reducer[requestTypes.SUCCEEDED]).toBeDefined()
  })

  it('Given state > 0 and reset === false it should return a new state incremented', () => {
    const handler = reducer[requestTypes.SUCCEEDED]
    const state = handler(1, { payload: {} })

    expect(state).toEqual(2)
  })

  it('Given state === 0 it should return a new state incremented', () => {
    const handler = reducer[requestTypes.SUCCEEDED]
    const state = handler(0, { payload: {} })

    expect(state).toEqual(1)
  })

  it('Given reset === true it should return 1', () => {
    const handler = reducer[requestTypes.SUCCEEDED]
    const state = handler(2, { payload: { reset: true } })

    expect(state).toEqual(1)
  })
})
