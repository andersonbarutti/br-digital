import { createRequestedAction } from '@project/core/src/helpers'

describe('(Helpers) createRequestedAction', () => {
  it('Should return an action with type and payload', () => {
    const requestTypes = { REQUESTED: 'FOO_BAR' }
    const actionPayload = 'foo_bar'

    const action = createRequestedAction(requestTypes)
    const { type, payload } = action(actionPayload)

    expect(type).toBe(requestTypes.REQUESTED)
    expect(payload).toBe(actionPayload)
  })
})
